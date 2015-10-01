OTTO WG Minutes 9/23/15
STATUS: No Quorum - Notes.

## Voting Members Attending:
 Mike Schwartz
 Judith Bush
 
## Non-voting members

### Voting results

Please vote. You should have received the email with the link.

### Nominations are still open for
 - Crypto Guru:
 - Project Manager:

## OAuth2 / OpenID Connect Client Registration Specs

 - [Oauth2 Client Metadata](https://tools.ietf.org/html/rfc7591#section-2)
 - [OpenID Connect Client Metadata](http://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata)
 

### Work on new federation metadata attributes

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

-----------------------------------------------

In our metadata

  - EndityID:
     - metadata (not related to federation):
       - @datalink for metadata query
       OR
       - global:
           ....
       - rp|op:
           ....
     - membership?
     - .....
--------------------------

For OPs Role we can review elements from : .well-known/openid-configuration
For RPs Role as you mentioned https://tools.ietf.org/html/rfc7591#section-2
