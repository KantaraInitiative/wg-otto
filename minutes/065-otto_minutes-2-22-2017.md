 OTTO WG Minutes: 2/22/2017
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Judith Bush
 - Janusz Ulanowski
 
## Discussion schema 

See diagrams in Github from Judith:

JSON-LD Object we need to define:

1.  Registration Authority extends Organization. Properties:
- registers - link to participant, federation or entity.


2.  Participant extends Organization. Properties:
- registeredBy - A link to an RegistrationAuthority or
a Registration Authority object (maybe more efficient to send all the 
data).
- registration_authority_identifier - The id issued by the federation
to this Participant.
- operates - link to Entities
- memberOf - Link to Federation or Federation ID? 

3.  Federation extends Organization

4.  Entity - extends Thing, add property: 
`operatedBy` to point back to participant.

5.  UserClaim extends Thing
6.  Scope extends Thing
7.  ACR extends Thing
8.  AMR extends Thing
9.  Trustmark extends Thing

Entity object has additionalType: for example OpenID Provider. 
OTTO WG could define additional types (extend Metadata). 

1. OpenID Provider 
2. OpenID Client
3. UMA Client
4. UMA RS
5. UMA AS
6. SAML (SP and or IDP)

Work is to consider each each object, which attributes it uses from
its super-class, and which new attributes are needed to describe it.

See Judith's diagram.