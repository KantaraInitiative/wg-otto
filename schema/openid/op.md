# OpenID Provider

## schema/otto/openid_provider.jsonld

```N3
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
     rdfs:range otto:Hash;
     .

    otto:providedBy a rdf:Property ;
     rdfs:range schema:Organization;
     .

    otto:jwksJSONHash a rdf:Property ;
     rdfs:range otto:Hash ;
     .

    # Instance data  TODO -> need to set instance data correctly

    <https://ra.org/federations/904cb092/c5a6-11e5-9912-ba0be0483c18>
     a schema:Thing, otto:OpenID_Provider;
     otto:discoveryURL "https://idp.example.com/.well-known/openid-configuration" ;
     otto:discoveryJSONHash "2fd4e1c67a2d28fced849ee1bb76e7391b93eb12";
     otto:jwksJSONHash "de9f2c7fd25e1b3afad3e85a0bd17d9b100db4b3";
     otto:providedBy <https://fc.com/otto/organization/904cb092/230948-DFJLK>;
```

## Non-normative example: openid_provider.jsonld
```json
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
            "@type": "ott:Hash"
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
            "@id": "otto:providedBy",
            "@type": "rdf:Property",
            "rdfs:range": {
              "@id": "schema:Organization"
            }
          },
          {
             "@id": "otto:discoveryJSONHash",
             "@type": "otto:Hash"
          },
          {
            "@id": "https://ra.org/federations/904cb092/c5a6-11e5-9912-ba0be0483c18",
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
        ]
      }
```
