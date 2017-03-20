OTTO WG Minutes: 3/22/2017
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Janusz Ulanowski
 - Yuriy Zabrovarnyy
 - Meg Joshi
 
## Discussion on Schema

We have created a new consolidated schema file:
 - https://github.com/KantaraInitiative/wg-otto/blob/master/schema/otto-schema.jsonld

Some items up for discussion:

1. Initial list of Classes:
  - Federation
  - Participant
  - RegistrationAuthority
  - Entity
  - OpenIDProvider
  - OpenIDRelyingParty
 

2. To show membership by a Participant in a Federation, use "memberOf".
 This requires no addtional schema because Participant and Federation
 are already Organizations.
 
3. Defined TrustMark. Tried to keep terminology consistent with 
https://trustmark.gtri.gatech.edu/technical-framework/

  - TrustMark
  - TrustMarkProvider
  - TrustMarkPolicy
  - TrustMarkDefinition
  - TrustMarkAgreement
  - TrustMarkProfile
 