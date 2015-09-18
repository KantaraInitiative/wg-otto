OTTO WG Minutes 9/23/15
STATUS: Draft

## Voting Members Attending:
 
## Non-voting members

### Voting results

Please vote. You should have received the email with the link.

### Nominations are still open for
 - Crypto Guru:
 - Project Manager:

### Janusz's email

EntityDescriptor (attrs: entityID...):
 - Organization (optional)
 - Extensions (mostly mdrpi
 - most common Roles :
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
      - Certificates(sig/enc)
      - Endpoints
      - supported nameidentifiers
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
