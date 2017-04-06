OTTO WG Minutes: 4/5/2017
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Meg Joshi
 - Judith Bush
 - Janusz Ulanowski

## Approve minutes

Minutes 8/3/16 minutes to 3/29/17 are approved!

## Schema

Should Metadata be a class, and perhaps we define specific types of
Metadata, and anyone can extend it for the information needed for
their protocol? Who is operating? Where is it registered? With
what Federation?

Short discussion on localization. OpenID Connect has a clever solution for
messages. See http://openid.net/specs/openid-connect-core-1_0.html#IndividualClaimsLanguages
However, it only accounts for locaziation of the value, not the key of a json
data structure. Open Badge also provides an interesting model for localization.
See https://www.imsglobal.org/sites/default/files/Badges/OBv2p0/index.html#Internationalization

For further reading, Judith referenced this acticle: Linked Data and Schema.org: Crossing the language chasm with terminological assets
http://www.tcworld.info/e-magazine/content-strategies/article/linked-data-and-schemaorg-crossing-the-language-chasm-with-terminological-assets/

The latest spec xml is checked in here:
 https://github.com/KantaraInitiative/wg-otto/tree/master/xml

We decided to break up Vocabulary and API's. It will make it more clear. Also,
the Core OTTO spec is going to focus on the core federation objects. Specific
applications can be handled as "Extensions." SAML and Open Badge support comes
to mind first. And perhaps OpenID Connect should also be handled as an
extension too (versus in the Core?)

Note: Mike talked to Keith after the meeting, and he seems up for tackling the
SAML extension.

Should we reference schema.org as a default vocabulary? Section 4.2 of the
JSON-LD 1.1 spec explains how to do this:  
 http://json-ld.org/spec/latest/json-ld/#default-vocabulary
It seems like we should. Open Badges does not, but then each property from
schema.org has to be referenced in their conte; for example, see:
 https://www.imsglobal.org/sites/default/files/Badges/OBv2p0/v2/context.json

We think including the schema.org context  makes sense for OTTO because would
give us re-use of common properties. For example, see the address property of
Organization: http://schema.org/Organization
That's something we are not going to add a lot of value defining, but some
Partipcants or Federations may want to use it.

The current Vocabulary draft spec says in the Introduction:

```
If properties are included  OTTO federation JSON that cannot be mapped to
the JSON-LD terms defined in the object's <spanx style="verb">@context</spanx>,
they are not considered part of the OTTO metadata's meaning.
```

The intent is that implementers can use Schema.org vocabulary, even if we
don't define it in our spec (like address).

We also discussed specifically the schema for Registration Authority.
Ironically, we sort of overlooked this Class because there is no corresponding
API to create a RA, or to GET RA's. This entry should be returned
from the configuration endpoint.

After reviewing the schema, Judith suggested some changes which are
reflected in Github Commit
[570ba6](https://github.com/KantaraInitiative/wg-otto/commit/570ba69adfe4213f21a67926da7c6074098a5451)

We also reviewed the diagrams from Judith. Mike agrees with the Simplified diagram:
https://github.com/KantaraInitiative/wg-otto/blob/master/files/070_jeb_diagram1_simplified.png

The more detailed diagram needs some work, it didn't render right.

## Next Meeting 4/12 12pm US Eastern Time

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
