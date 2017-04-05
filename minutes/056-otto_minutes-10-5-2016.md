OTTO WG Minutes: 10/5/2016
STATUS: Approved

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Meg Joshi
 - Keith Hazelton
 - Janusz Ulanowski
 - Judith Bush

## Discussion of SAML

Keith is interested to start testing if OTTO could be applied to
SAML federations.

Mike has some concerns about this solution:
https://github.com/KantaraInitiative/wg-otto/blob/master/schema/saml/idp.md

 1. The base64 encoded metadata would not be searchable.
 2. Priority: would it be better to focus on OpenID Connect and revisit
 SAML when we had a better model?

## Discussion of Test Server

Meg did a long demo showing all the endpoints using the Swagger UI:

Swagger UI: http://otto-test.gluu.org/swagger
Code: https://github.com/GluuFederation/otto-node

Some points:

1. Tight schema enforcement
2. Depth enables links to be expanded
3. Filtering working quite well
4. Need to consider how to handle external links--copy / auto-refresh?
5. Need to consider how to secure API's? Should we define standard OAuth2
scopes that are required to access each API? This enable more
interoperability then just saying "use OAuth."

## Notes on OIDC federation spec

OIDC federation:
  http://openid.net/specs/openid-connect-federation-1_0.html

One major change with this OpenID Connect federation model is that the
federation operator does not publish metadata--just signs "metadata
statements" which are published by the OP, or used by the RP to register
at an OP.

This raises a fundamental question: should the federation publish
metadata at all? If not--this takes a big task off our plate. We no
longer need to "sign the graph." However, this would not solve
signing for SAML metadata.

## Kantara Blog

Mike published a short blog on OTTO for the Kantara newsletter:
https://www.gluu.org/blog/pivoting-otto-to-meet-the-requirements-of-federation-2-0/

## Next Meeting - Weds 10/12/2016 9am PT / 5pm GMT

Please attend as we only have two more meetings before IIW!

We need to make progress on the schema for : federation,
federation_entity, and organization.

Meeting details are the same:

1.  Please join my meeting.
https://global.gotomeeting.com/join/162399285

2.  Use your microphone and speakers (VoIP) - a headset is recommended.  
Or, call in using your telephone.

United States: +1 (669) 224-3319
Australia: +61 2 8355 1034
Austria: +43 7 2088 0716
Belgium: +32 (0) 28 93 7002
Canada: +1 (647) 497-9372
Denmark: +45 69 91 84 58
Finland: +358 (0) 923 17 0556
France: +33 (0) 170 950 590
Germany: +49 (0) 692 5736 7206
Ireland: +353 (0) 19 030 053
Italy: +39 0 699 26 68 65
Netherlands: +31 (0) 208 080 759
New Zealand: +64 9 974 9579
Norway: +47 21 04 30 59
Spain: +34 931 76 1534
Sweden: +46 (0) 852 500 691
Switzerland: +41 (0) 435 0026 89
United Kingdom: +44 (0) 20 3713 5011

Access Code: 162-399-285
Audio PIN: Shown after joining the meeting

Meeting ID: 162-399-285
