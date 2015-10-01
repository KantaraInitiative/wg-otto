OTTO WG Minutes 9/30/15
STATUS: Draft

## Voting Members Attending:
 Mike Schwartz
 Judith Bush
 Janusz Ulanowski
 Keith Hazelton
 
## Non-voting members


## Discussion on Eran Hammer's video on why he left OAuth2 

 https://vimeo.com/52882780
 
Mike pointed out that one of the interesting thing Eran proposed was that the spec follows the code.
He was annoyed the OAuth2 spec took three years, and perhaps coding earlier would have expedited the stnadard.
Keith pointed out that the implementations will highlight any defects.

## Voting results

 Mike moved to approve the vote and Judith seconded it. 

## Nominations are still open for
 - Crypto Guru:
 - Project Manager:

## Discussion on Janusz's email


Janusz sent this email on 9/17: 

    I'd like to share  my thoughts with partially overlap others:

    I would see it this way.
    I would split completely entities metadata from  federation(s) metadata - they might be controlled by different parties.
    Federation metadata contains all trusted members and their records contain @datalink to entity metadata (GlobalCatalog) plus information related to federation/registration/authority
       - just everything which is not global or must be approved/controled by federation operator.
       - also the list membership entries which my contains link to other federation or even entity

Consensus is that this is a good idea... concerns about maintaining with SAML. But the improvement would be better 
way to scale updates. 

The federation would still have to approve the metadata. They would do this by updating the federation
metadata for the federation and linking to the new approved metadata.

Judith pointed out that organizations could make a choice about whether to wait for the federation to 
approve the metadata.

How would entities be authorized to update their metadata. Perhaps on registeration, you receive a token that 
would enable you to subsequently update your metadata.

    RP/OP:
     has to set trusted federations URLs and trusted GlobalCatalogs plus certs (if used) for validation.
     also they need to define one federation URL as mother fed

    example in the oidc flow - if RP wants to check if selected OP is trusted it can just call

    https://fed1/.well-known/membership?requester=ENTITY&askingfor=ENTITY&includemetadata=yes
      I think this request it's quite light even if we  have reference links.

The idea is that requester might have partial visibility of the federation metadata. Perhaps another solution 
would be to use a token that is associated with the federation 

GET https://fed1/.well-known/membership?ENTITY=12345&includemetadata=yes
Authorization: Bearer 204c69636b6c69

## OAuth2 / OpenID Connect Client Registration Specs

 - [Oauth2 Client Metadata](https://tools.ietf.org/html/rfc7591#section-2)
 - [OpenID Connect Client Metadata](http://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata)
 

## Jim mentioned service provider configuration in the SCIM standard:

 - https://tools.ietf.org/html/rfc7643#section-5

Not sure if this should be included, but perhaps if the entity has SCIM endpoints.

### More discussion on SAML schema

EntityDescriptor 
  (attrs: entityID, validUntil):
 - Organization (optional)
 - Extensions 
    - entity attributes (grouping of entities for policy decisions)
    - registration (mdrpi) and publication info 
    - supported algorithms (needed for cryptographic flexibility when using signatures, not for TLS)
 - Most common Roles :
   - SPSSODescriptor:
      - Extensions:
        - MDUI Elelments
      - Certificates(sig/enc)
      - Endpoints
      - Service:
        - Attribute Requirements (required|desired)
   - IDPSSODescriptor
      - Extensions:
        - mdui elements
        - scopes (different meaning than we have in oidc)
        - discovery service
      - Certificates(sig/enc)
      - Endpoints
      - supported name identifiers
   - AttributeAuthorityDescriptor
      (quite simillar to IDPSSODescriptor)

