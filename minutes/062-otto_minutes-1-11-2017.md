OTTO WG Minutes: 1/11/2017
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Janusz Ulanowski
 - Yuriy Zabrovarnyy
 - David Walker
 - Meg Joshi

## Special Guest:
 - Roland Hedberg

## Meeting Recording

For those who missed it, I recorded this meeting:
  https://youtu.be/nD9mUw6Kdg8

## Notes on Conversation with Roland

Curent draft 01 of OpenID Connect Federation 1.0:
http://openid.net/specs/openid-connect-federation-1_0.html

For those who don't know, Roland is a federation guru who has an active community
member, programmer for many years in multiple federation technologies. In addition
to the above federation spec, he's the author of the OpenID Connect conformance tests, 
and quite a bit of SAML, OpenID Connect and UMA software.

One of the goals of this federation standard was to leverage the dynamic
registration and discovery capabilities of OpenID Connect, but to make 
it possible to increase the trust level. For example, it would be nice
if an OpenID Provider (OP) could enable a client to register, knowing 
that it agrees to the policies of the federation. The federation also
offers possibilities to align relying parties with regard to attribute
release policies, security requirements (such as required authentication
cryptographic stengths), and other details set forth by the federation.

The Federation operator acts as the "Trust Anchor"--it's private key
is used to sign documents that assert membership in the federation. 

One of the unique approaches of this federation draft is the use of
"metadata statements", which include information about a federation 
participant, and the services it offers. The IT Architect at an 
organization submits an initial metadata statement from to the 
federation operator, and then system administrators at the organization
submit additional information about the services they manage until
an aggregate bundle of metadata statements is created. There is 
a hierarchy of claims, and a party consuming the metadata statements
must properly handle possible collisions, giving preference to 
claims that originate from the federation operator. 

The federation operator may want to publish a blacklist of clients,
in the case where a certain member has violated the policies.

The federation may also want to publish and sign a list of the public
keys of other federations, enabling domains to verify from several
locations that the integrity of the key.

If a participant's federation key is compromised, the entity would have
to re-register with new metadata statements. Signing keys would be 
long lived, but how long is up for debate. The main issue with
a key being compromised is how to most efficiently get the word out
quickly.

One of the challenges with this design is that the individuals would
need to manage keys to sign metadata statements. Mike suggested that 
the federation operator may want to introduce some identity management
processes to help organizations address this operational burden. 
The federation operator may also want to host the metadata_uri,
which would have the added advantage of enabling the federation operator
to offer metadata search services.





