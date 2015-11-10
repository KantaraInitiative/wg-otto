= OTTO Requirements and use cases

== Overview

OTTO shall provide the basic structures and services to establish trustworthy technical, organizational and legal information in multi-party federations. While geared towards OAuth2, the architecture should be useable for other technologies such as SAML, PKIX and trust status lists as well.

== Terminology
claim: an possibly unconfirmed statement 
assertion: a claim confirmed by a trusted party
circle of trust
entity

== Requirements

=== R1. Technology-Independent Claims
OTTO shall generalize the format and services for fundamental claims that can be re-used with different technologies. Exception: Claims that are specific to a technology.
Example: The assertion of an entity’s membership in a circle of trust can be used in SAML metadata and a PKIX. An exception would be a protocol-specific endpoint that does not have a meaning in other technologies.

=== R2. Triple-Format for Claims
Claims are formally stated as triples (subject, predicate, object). The semantic definitions of triples are the concern of the user groups using OTTO. Standardization outside this document shall help to converge the definitions.

=== R3. Atomic Claims
Each claim shall only relay a single fact.
Example: Reference identifiers (RI, aka NameIDs) have multiple properties: A SAML IDP would claim to provide an RI with following qualities:
- RI must be non-reassignable
- RI must be unlinkable across privacy domains
- RI must be persistent across user sessions
- RI must be opaque

The IDPSSODescriptor generated from that would then contain an <md:NameIDFormat>urn:oasis:names:tc:SAML:2.0:nameid-format:persistent</md:NameIDFormat> element.


=== R4. Fundamental Trust Properties for Claims
OTTO shall provide different trust properties for claims:
a)	Self-asserted. (Like an entity’s public key or technical contact email address) 
b)	Asserted by an authoritative source or trusted third party. (Like an entity’s name-key binding)
c)	Continuity. (The key used in a previous period is the same as the current one.)
d)	Public scrutiny. Claims can be monitored by interested parties. This feature may be limited by access control and paywalls.
e)	Uniqueness: OTTO must be able to guarantee the uniqueness of claims

=== R5. Claim Aggregation to Support Lightweight and Legacy Clients
OTTO shall support the generation of aggregates, such as SAML metadata and X.509 certificates. Lightweight clients and legacy standards may need signatures that broker trust from authoritative sources. 
Taking a SAML EntityDescriptor as example, its elements that are of different provenance have been stitched together by the entity operator in cooperation with the federation operator:
- technical data such as key material and endpoints are authoritative from the entity operator;
- The ownership of domains used in endpoints is asserted by a third party;
- membership in a federation is asserted by the FO;
- a trustmark is from a third party trust assessor;
- compliance with an entity category for attribute release may be confirmed by another 3rd party.

=== R6. Shared Infrastructure
An OTTO implementation should be deployed an operated as a public service shared my heterogeneous parties and federation technologies. Larger communities increase redundancy and reduce the number of legers that entities have to monitor when joining multiple federations.

=== R7. Grouping of Entities
Grouping of entities into federations, circles of trust and similar trust constellations is achieved by using specific membership claims. OTTO does not provide any explicit structure beyond this for this purpose.

