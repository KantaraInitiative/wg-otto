OTTO WG Minutes: 5/10/2017
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Meg Joshi
 - Judith Bush

## Fast Fed news

As referenced on the mailing list, there may be some synergies with the OpenID
Foundation FastFed working group. It would be really great if they could use
the JSON-LD model we developed. Mike plans to join the FastFed WG to advocate
for this approach.

## Reviewed docs
 - http://gluu.co/otto-api
 - http://gluu.co/otto-vocab
 - http://gluu.co/otto-openid
 - https://github.com/KantaraInitiative/wg-otto/blob/master/context/otto-schema.jsonld
 - https://github.com/KantaraInitiative/wg-otto/blob/master/context/openid-context.jsonld

We reviewed the docs and found some errors. See github checkin [e9ff](https://github.com/KantaraInitiative/wg-otto/commit/93ea12d9190dbad40d1748c775e29725c4c8e9ff)

Here is a quick summary:

1. Removed `Acr` subclass. No add'l properties are needed so we handled this by
   adding a `SchemaCategory` for `Acr`.
2. Removed properties `scope`, `userclaim`, and `acr`. This is now handled with the
   `supports` property which references type `Schema`.
3. Added `rdfs:label` to category elements (these are the actual values of the
   enumeration)
4. Created a new `Category`: `MetadataCategory` and added the `category` property
   to the Metadata class. Now it's possible to get back either OpenID or SAML
   metadata for a federation's `metadata` property,
5. Added `metadata` property to the federation class
6. Added `operateBy` to the `Entity` class--was already specified in context, but  
   it was missing in the xml.

## Discussion of process for managing metadata

The process for a federation "publishing" federation metadata is different
for SAML and OpenID Connect. SAML federations publish a signed aggregate.
OpenID Connect federations provide individual signed metadata statements (JWT)
for entities.

OTTO will faciliate the publication of both types of metadata. For OpenID Connect,
the entities have a `metadataStatement` property of `Metadata` type. TODO: an
OpenID Connect federation should also publish metadata to distribute it's
signing key and other information. We should define a subclass of Metadata
for `OpenIDFederationMetadata`

SAML federations should be able to use the OTTO data to render a metadata
aggregate. When the SAML extension is designed, it should capture the information
required that doesn't overlap with the Participant class--specifically the
organizational contact information. Jagger is already generating SAML aggregates
based on data from a database, so this idea is not that strange--we're just
standardizing how to serialize the underlying information.

Of course, implementations will help to finalize the data model. The Gluu Server
plans to implement OpenID Connet federations in version 3.1, due out by the
end of July.  That will help with end-to-end testing.

## Next Meeting 5/17 12pm US Eastern Time

*** NOTE: No meeting 5/3 because of IIW! ***

1.  Please join my meeting.
https://global.gotomeeting.com/join/162399285

2.  Use your microphone and speakers (VoIP) - a headset is recommended.  Or, call in using your telephone.

United States: +1 (669) 224-3319
Australia: +61 2 8355 1034
Austria: +43 7 2088 0716
Belgium: +32 28 93 7002
Canada: +1 (647) 497-9372
Denmark: +45 69 91 84 58
Finland: +358 923 17 0556
France: +33 170 950 590
Germany: +49 692 5736 7206
Ireland: +353 19 030 053
Italy: +39 0 699 26 68 65
Netherlands: +31 208 080 759
New Zealand: +64 9 974 9579
Norway: +47 21 04 30 59
Spain: +34 931 76 1534
Sweden: +46 852 500 691
Switzerland: +41 435 0026 89
United Kingdom: +44 20 3713 5011

Access Code: 162-399-285
Meeting ID: 162-399-285
