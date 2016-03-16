OTTO WG Minutes 3/16/16
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Judith Bush
 - Keith Hazelton
 - Yuriy Zabrovarnyy

## Discussion of Schema

Schema.org describes the extension process [on this page] 
(http://schema.org/docs/extension.html) We are going to proceed with an 
"External Extension". We could maybe go back and get our schema into 
"Reviewed/hosted Extensions", which would be nice
for publicity, but we can probably reach our audience without.

Working on OpenID Connect JSON-LD

Example Instance (this entity would be hosted at the federation):

    {
      "@context": [ "http://schema.org/", {"otto":"http://kantarainitiative.org/otto/schema"}]
      "@id": "https://fs.com/federations/904cb092-c5a6-11e5-9912-ba0be0483c18",
      "@type": ["Thing", "otto:OpenID_Provider"],
      "additionalType": "http://kantarainitiative.org/otto/OpenID_Provider",
      "discoveryURL": "https://idp.example.com/.well-known/openid-configuration",
      "discoveryJSONHash": "2fd4e1c67a2d28fced849ee1bb76e7391b93eb12",
      "jwksJSONHash": "de9f2c7fd25e1b3afad3e85a0bd17d9b100db4b3"
      "providedBy": "https://fc.com/otto/organization/988cb077-c566-1115-9912-ba0be0483c18",
      }
    }

Example of JSON LD Schema:

    {
      "@context": {
         "xsd": "http://www.w3.org/2001/XMLSchema#",
 
         "discoveryURL": {
             "@id": "http://schema.org/url",  ← This means that 'discoveryURL' is shorthand for 'http://schema.org/url' 
             "@type": "@id"  ← This means that a string value associated with 'discoveryURL' should be interpreted as an identifier that is an IRI 
         },
         "discoveryJSONHash":{
             "@id:", "http://kantarainitiative.org/otto/schema/hash",
             "@type":"xsd:string"
         },
         "jwksJSONHash":{
             "@id:", "http://kantarainitiative.org/otto/schema/hash",
             "@type":"xsd:string"
         },
         "providedBy":{
             "@id": "http://schema.org/url", 
             "@type": "@id"
         }
      }
    }

There was some confusion on the use of the `"@type": "@id"` usage. Mike was
especially confused about the fact this `@type` was used for both `discoveryURL`
and `providedBy`.

Discussion of Judith's Previous [Diagram]
(https://raw.githubusercontent.com/KantaraInitiative/wg-otto/master/files/OTTOschemaNoodling_002.png)
Judith has reconsidered her original position that the federation service (or entity)
should be linked from the organization. Instead, its enough that the entity links
to the organization. Also, it makes sense that entities derive from a object that 
contains the common denominator of attributs. For example, OpenID_Provider may
and UMA_AS may dervice from a common Federation_Server schema.

Reviewed Section 3 of the [SAML Metadata Guidance Document]
(https://github.com/KantaraInitiative/wg-otto/blob/master/files/saml-metadata-guide-v1.0-wd03.pdf)
just as a sanity check to make sure we're not missing anything. 

The OTTO JSON-LD seems very short for an OpenID Connect provider. Of course
the referenced discovery document contains a lot of information.

## Next Meeting - Weds 3/30/2016 8am PT

No meeting next week due to Mike's travel, and Keith's vacation. But we 
did set a goal of emailing out the initial Organization schema by Weds 
for review. Judith offered to try to arrange a special guest for the 3/30 meeting: 
a JSON-LD guru from OCLC. 

Screen Sharing: [https://global.gotomeeting.com/join/162399285](https://global.gotomeeting.com/join/162399285)

 - Audio: Skype: +99051000000481
 - North America Toll: +1 (805) 309-2350
 - Alternate Toll: +1 (714) 551-9842
 - International Toll: http://www.turbobridge.com/international.html

 - Conference ID: 613-2898

    Command Menu: 0 Plays menu of Keypad Commands *3 Promote to Host (if non-host) *5 Raise your hand 
    *6 Mute yourself (toggle on/off) *# Private roll call of participants *\ Mute music-on-hold (toggle on/off)

    TurboPhone (beta): https://www.turbobridge.com/join.html Works with Internet Explorer on Windows only

    SIP Access (using IP phone or soft phone) sip:bridge@turbobridge.com
    SIP URL details: https://www.turbobridge.com/help/Index.html?context=180

