OTTO WG Minutes: 3/22/2017
STATUS: Approved

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Meg Joshi
 - Keith Hazelton

## Special Guest
 - Rhys Smith

## Guest Speaker Rhys Smith

Video available at : https://youtu.be/wcJJiNXE5W0

JISC runs the UK Access Federation, one of the largest R&E federations
with around 1004 members and 2,000+ entities (plus EDUGAIN entities)

Members have been manually managing entity information. There is a GIT
repository (was SVN, CVS...) for around 10 years. There are processes
that produce SAML aggregate and publish them.

They are currently setting up a self service portal to manage their
SAML entities. Rather then the portal interacting directly with
the backend, there is a web front end with API, and an implementation
that transforms the data to GIT.

The web front end uses the API, but they may expose it to members who
have the technical capability. If there are 1-2 entities, web ui is ok.
But one large provider has many entities, several hundred EDUServ.

JISC is also going to offer a hosted IDP service, and it will make
sense to use the API's

API's:
 - One to manage entities
 - One to manage memberships
 - One for approvals (non-self asserted claims), or for certain claims
that need to be validated by the federation operator (like domain--
is the claimant allowed to assert it).

Here is the current docs: https://api.dev.ja.net/api.html

Certain members can grant use of sub-domain, i.e. https://campus.oclc.edu.
Grant can be specific or generic.

Search/Query functionality was not really a primary requirement.
The current API supports query by entityID and by organization. The
latter was required to limit the data returned when a specific organization
admin was viewing their registrations.

The schema for Organizations can be found here:
https://github.com/ukf/ukf-members/blob/master/src/main/resources/ukfederation-members.xsd
The "scopes" attribute is being deprecated.

One of the ideas with the API's was to abstract the interfaces from the
backend. While Jagger and Federation Registry require a certain backend,
these API's could be supported by different implementations.

The approval process schema could be generalized, although there may be
some implementation specific features in there.

Rhys says automation is needed by a larger federation, and especially
by participants who manage many entities. He cited an example where
a participant needed to update 300 certificates, and it was really
a challenge for both member and the federation.  An automated process
to perform this take would be been more accurate and less expensive.

Mike raised the possibility that the federation may be in a position to
offer more services. Rhys mentioned that some use cases for leveraging
the federation were being considered in the U.K., for example to
facilitate student voter registration.

Net-net: great feedback from Rhys. Listen to the video if you can spare
an hour!

## Discussion of Schema Queued for next week:

We have created a new consolidated schema file:
 - https://github.com/KantaraInitiative/wg-otto/blob/master/schema/otto-schema.jsonld

1. Initial list of Classes:
  - Federation
  - Participant
  - RegistrationAuthority
  - Entity
  - OpenIDProvider
  - OpenIDRelyingParty


2. To show membership by a Participant in a Federation, use "memberOf".
 This requires no additional schema because Participant and Federation
 are already Organizations.

3. Defined TrustMark. Tried to keep terminology consistent with
https://trustmark.gtri.gatech.edu/technical-framework/

  - TrustMark
  - TrustMarkProvider
  - TrustMarkPolicy
  - TrustMarkDefinition
  - TrustMarkAgreement
  - TrustMarkProfile
