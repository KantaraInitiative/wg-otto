### Properties

Properties :
  * hash - http://kantarainitiative.org/otto/schema/property/hash - hash of the object
  * hashAlg - http://kantarainitiative.org/otto/schema/property/hashAlg - hash algorithm

### schema/otto/hash.jsonld

```n3
    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
    @prefix schema: <http://schema.org/> .
    @prefix otto: <http://kantarainitiative.org/otto/schema/> .

    # Ontology

    otto:Hash a rdfs:Class .

    otto:hashValue a rdf:Property ;
     rdfs:range xsd:string;
     .

    otto:hashAlgorithm a rdf:Property ;
     rdfs:range xsd:string;
     .
```

hash.jsonld
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
         "@id": "otto:hashValue",
         "@type": "rdf:Property",
         "rdfs:range": {
           "@id": "xsd:string"
         }
       },
       {
         "@id": "otto:Hash",
         "@type": "rdfs:Class"
       },
       {
         "@id": "otto:hashAlgorithm",
         "@type": "rdf:Property",
         "rdfs:range": {
           "@id": "xsd:string"
         }
       }
     ]
   }
```