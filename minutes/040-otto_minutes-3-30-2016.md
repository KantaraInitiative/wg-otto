OTTO WG Minutes 3/30/16
STATUS: Final

## Voting Members Attending:
 - Mike Schwartz
 - Judith Bush
 - Keith Hazelton
 - Yuriy Zabrovarnyy
 - Janusz Ulanowski
 
## Special Guest
 - Jeff Young, OCLC JSON-LD guru

## Discussion of Schema

Great feedback from Jeff:

Schema.org [Thing](https://schema.org/Thing) defines a property called
[contentURL](https://schema.org/contentUrl)  Perhaps this can be used 
for otto:discoveryUrl? 

Schema.org also defines [provider](http://schema.org/provider)

`@type` can now be a multi-value array, so the additionalType property is deprecated.

All otto defined properties should be prefixed `otto:`

Jeff converted our sample JSON-LD to turtle format ("N3"), which he prefers to 
review linked data. This format looks like this:

    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
    @prefix schema: <http://schema.org/> .
    @prefix otto: <http://kantarainitiative.org/otto/schema/> .
    
    # Ontology
    
    otto:OpenID_Provider a rdfs:Class .
    
    otto:discoveryURL a rdf:Property ;
     rdfs:range xsd:anyURI;
     .
    
    otto:discoveryJSONHash a rdf:Property ;
     rdfs:range xsd:string;
     .
    
    otto:providedBy a rdf:Property ;
     rdfs:range schema:Organization;
     .
    
    otto:jwksJSONHash a rdf:Property ;
     rdfs:range xsd:string ;
     .
    
    # Instance data
    
    <https://fs.com/federations/904cb092/c5a6-11e5-9912-ba0be0483c18>
     a schema:Thing, otto:OpenID_Provider;
     otto:discoveryURL "https://idp.example.com/.well-known/openid-configuration" ;
     otto:discoveryJSONHash "2fd4e1c67a2d28fced849ee1bb76e7391b93eb12";
     otto:jwksJSONHash "de9f2c7fd25e1b3afad3e85a0bd17d9b100db4b3";
     otto:providedBy <https://fc.com/otto/organization/904cb092/230948-DFJLK>;
     .

As JSON-LD is just one linked data format, there is a website that enables
conversion called the [RDF Translator Website](http://rdf-translator.appspot.com/)
which produced this equivalent conversion for 

    {
      "@context": {
        "otto": "http://kantarainitiative.org/otto/schema/",
        "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
        "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
        "schema": "http://schema.org/",
        "xsd": "http://www.w3.org/2001/XMLSchema#"
      },
      "@graph": [
        {
          "@id": "otto:jwksJSONHash",
          "@type": "rdf:Property",
          "rdfs:range": {
            "@id": "xsd:string"
          }
        },
        {
          "@id": "otto:OpenID_Provider",
          "@type": "rdfs:Class"
        },
        {
          "@id": "otto:discoveryURL",
          "@type": "rdf:Property",
          "rdfs:range": {
            "@id": "xsd:anyURI"
          }
        },
        {
          "@id": "https://fs.com/federations/904cb092/c5a6-11e5-9912-ba0be0483c18",
          "@type": [
            "otto:OpenID_Provider",
            "schema:Thing"
          ],
          "otto:discoveryJSONHash": "2fd4e1c67a2d28fced849ee1bb76e7391b93eb12",
          "otto:discoveryURL": "https://idp.example.com/.well-known/openid-configuration",
          "otto:jwksJSONHash": "de9f2c7fd25e1b3afad3e85a0bd17d9b100db4b3",
          "otto:providedBy": {
            "@id": "https://fc.com/otto/organization/904cb092/230948-DFJLK"
          }
        },
        {
          "@id": "otto:providedBy",
          "@type": "rdf:Property",
          "rdfs:range": {
            "@id": "schema:Organization"
          }
        },
        {
          "@id": "otto:discoveryJSONHash",
          "@type": "rdf:Property",
          "rdfs:range": {
            "@id": "xsd:string"
          }
        }
      ]
    }

Mike asked if there were other organizations that were using Linked Data to manage
interdomain trust. Jeff responded that Linked Data was primarily to help search
engines find stuff. He mentioned that Wikipedia's use of linked data to organize
a diverse community of contributors might be an interesting analogy of trust 
management.

Jeff mentioned that there is a standard JSON format to define a new ontology. 
The tool that is used to render the schema.org website is free open source from 
this JSON. For example, OCLC used this tool to generate their schema documentation
[bibliograph.net](http://bibliograph.net/)


## Next Meeting - Weds 4/6/2016 8am PT

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

