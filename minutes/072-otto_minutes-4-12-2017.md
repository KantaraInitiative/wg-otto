OTTO WG Minutes: 4/5/2017
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Meg Joshi
 - Judith Bush

## Discussion on recent doc changes

New short links:
 - http://gluu.co/otto-api
 - http://gluu.co/otto-vocab

 The core Vocab spec is getting close to done. Mike is going to work this
 week on the OpenID, Badge, and Trustmark extensions.

 The API spec needs a lot of work. Much of the content exists on the
 OTTO github [Readme](https://github.com/KantaraInitiative/wg-otto) and
 in the Swagger interface. But it needs to be xml-ified. And actually the
 Swagger content is more current then the README.

### Contacts

`ContactPoint` was shortened to `Contact` in the meeting. Mike pointed out that
he used the [InCommon Participant Agreeement](https://internet2.app.box.com/v/incommon-participation-agreemt)
as the rough basis for the federation class. SAML metadata has different
contact requirements, but Mike was thinking that the SAML extension could
align with those requirements.

### Configuration Endpoint

Response to .well-known/otto-configuration now returns a RA class. For example:

```
"@context": "https://docs.kantarainitiative.org/otto/vocab-1.0",
  "@id": "https://ra.acme.ex/otto/.well-known/otto-configuration",
  "name": "Acme Registration Authority",
  "url": "https://www.acme.ex",
  "description": "Registration Authority for the ACME federations",
  "federation_endpoint":"https://rsa.acme.ex/otto/federation",
  "participant_endpoint":"https://ra.acme.ex/otto/participant",
  "entity_endpoint":"https://ra.acme.ex/otto/entity",
  "registers": ["https://ra.acme.ex/otto/federation/28e780f4-eedf",
                "https://ra.acme.ex/otto/federation/348159fd-8441"]
```
Note `registers` returns only the federations, not participants or entities
which are also registered at the RA.

JSON-LD properties typically use camel case. But the discovery response for
OAuth configuration endpoints typical use an underscore. The underscore
for the _endpoint_ properties seemed to look more familiar. But we may
want to change this.  

We need to add a link back to the OTTO vocab in this document. Perhaps it should
be at the top of the doc, because all the endpoints use the vocab.

Note: the `@id` property is referencing the configuration endpoint, similar
to the convention in SAML to use the metadata url for the `entityID`.

### Metadata

We reviewed the Metadata Class. It only has two properties, 'metadataFormat'
and `expiration`. Classes that extend it will add more specific information
as required. The advantage of having a Metadata class is that we can use the
same property in the Entity class to reference  differnt types of Metadata.

### IRI versus URI

Open Badges make a point to use
[RFC 3987 IRI](https://www.ietf.org/rfc/rfc3987.txt) versus URI or URL. The
advantage of IRI's is that they support character sets other then Roman. Should
we do the same for OTTO?

URL is a type defined by schema.org. It is a more specific DataType of
[Text](https://schema.org/URL), and it is a property of
[Thing](https://schema.org/Thing).

One interesting datapoint on IRI: although it's used in the [Open Badge Spec]
(https://www.imsglobal.org/sites/default/files/Badges/OBv2p0/index.html), it's
not anywhere to be found in the [context] (https://www.imsglobal.org/sites/default/files/Badges/OBv2p0/v2/context.json).
Perhaps because IRI's are specifically referenced in [JSON-LD spec]
(http://json-ld.org/spec/latest/json-ld/#iris)

### Superclass context

If a superclass includes a property, is it necessary to include it in the
OTTO context? This is an important question. We need to figure out if we
need to specify the property in the OTTO context, or we can leave it out.
Judith thinks the latter. If this is true, we can remove a lot of properties
from the OTTO context. We need to get a thrid opinion from a JSON-LD expert.

## Next Meeting 4/19 12pm US Eastern Time

Same time, same place!

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
