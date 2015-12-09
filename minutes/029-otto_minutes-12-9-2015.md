OTTO WG Minutes 12/9/15
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Keith Hazelton
 - Janusz Ulanowski
 - Judith Bush

## Non-voting members
 - Rainer Hoerbe
 - George Fletcher
 - Alan Karp
 
## Special Guest
 - Manu Sporny
 
# JSON-LD

Manu and CTO from DigitalBazaar created JSON-LD to solve problems around multiple organizations
sharing data in an interoperable manner. They needed a standard vocabulary for sharing data, 
about people places and things, and after hearing about RDFa, they started JSON-LD to provide a 
complimentary approach. Working through IETF and W3C enabled sharing patent and royalty free standards. 

Manu thinks our idea to use JSON-LD is a good fit, communicate information about entities 
is what JSON-LD was trying to solve. Look at Example 3 in the [OpenCreds spec]
(http://opencreds.org/specs/source/identity-credentials/)

    {
      "@context": "https://w3id.org/identity/v1",
      "id": "http://example.gov/credentials/3732",
      "type": ["Credential", "PassportCredential"],
      "name": "Passport",
      "issuer": "https://example.gov",
      "issued": "2010-01-01",
      "claim": {
        "id": "did:ebfeb1f712ebc6f1c276e12ec21",
        "name": "Alice Bobman",
        "birthDate": "1985-12-14",
        "gender": "female",
        "nationality": {
          "name": "United States"
        },
        "address": {
          "type": "PostalAddress",
          "addressStreet": "372 Sumter Lane",
          "addressLocality": "Blackrock",
          "addressRegion": "Nevada",
          "postalCode": "237842",
          "addressCountry": "US"
        },
        "passport": {
          "type": "Passport",
          "name": "United States Passport",
          "documentId": "123-45-6789",
          "issuer": "https://example.gov",
          "issued": "2010-01-07T01:02:03Z",
          "expires": "2020-01-07T01:02:03Z"
        }
      },
      "signature": {
        "type": "LinkedDataSignature2015",
        "creator": "https://example.gov/keys/27",
        "signature": "3780eyfh3q0fhhfiq3q9f8ahsidfhf29rhaish"
      }
    }

Most data models don't separate the data model from the syntax. RDF solved this problem. JSON-LD and RDFa 
are equivalent--can be converted without loss. 

JSON-LD enables syntax to be changed over time... maybe in the future we'll like something other than JSON.
By not coupling syntax from data model, we can build system that interoperate today based on JSON, as long
as they are built off the data model, not the syntax we can migrate. Unlike SOAP-XML...

One of the issues with JOSE is that its signing at the syntax level, not the data level. With JSON-LD, you
are signing the data model, not the syntax. One signature for all syntaxes! The JOSE group didn't want to
do canonicalization--all we do is base64 and sign it. However, this raised another issue--tied you into 
syntax.

In JSON-LD signatures, you start out with JSON-LD or turtle, convert it to RDFa, sort triples in a certain order, 
serialize the n-quads, and sign. We turn the web into a giant PKI. Usually for digital signatures you need to
register public key out of band. In the signature field, the creator field references the public key.

Alan raised a question about the whitespace. Manu indicated that the signature algorithm takes out the whitespace.

You can pick and choose which vocabularies you can use... for example, schema.org, IMS global, and you can
also define your own terms. 

Links from the meeting:

 - [That's a link to the JSON-LD specification](http://www.w3.org/TR/json-ld/)
 - [OpenCreds](http://opencreds.org/specs/source/identity-credentials/)
 - [Web Payments Spec](https://web-payments.org/specs/source/ld-signatures/)
 - [Digital Bazaar JSON LD Javascript Libary](https://github.com/digitalbazaar/jsonld.js)
 - [Digital Bazaar JSON LD Python Libary](https://github.com/digitalbazaar/pyld)
 - [Digital Bazaar JSON LD PHP Libary](https://github.com/digitalbazaar/php-json-ld)
 - [The Verifiable Claims Task Force](http://w3c.github.io/vctf/)
 - [JSON LD IRC Channel](http://webchat.freenode.net/?channels=#json-ld)

## Next Meeting - Weds 12/16 8am PT 

**Next MEETING 12/16 **

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

