




### schema/otto/uma_rs.jsonld

```N3

    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
    @prefix schema: <http://schema.org/> .
    @prefix otto: <http://kantarainitiative.org/otto/schema/> .

    # Ontology

    otto:UMA_Resource_Server a rdfs:Class .

    otto:resource_server_uri a rdf:Property ;
     rdfs:range xsd:anyURI;
     .

    otto:resource_set_uris a rdf:Property ;
     rdfs:range xsd:anyURI;
     .
```

### schema/otto/uma_as.jsonld

```N3

    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
    @prefix schema: <http://schema.org/> .
    @prefix otto: <http://kantarainitiative.org/otto/schema/> .

    # Ontology

    otto:UMA_Authorization_Server a rdfs:Class .

    otto:discoveryURL a rdf:Property ;
     rdfs:range xsd:anyURI;
     .

    otto:discoveryJSONHash a rdf:Property ;
     rdfs:range otto:Hash;
     .
```

### schema/otto/uma_relying_party.jsonld

```N3
    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
    @prefix schema: <http://schema.org/> .
    @prefix otto: <http://kantarainitiative.org/otto/schema/> .

    # Ontology

    otto:UMA_Relying_Party a rdfs:Class .

    otto:redirect_uris a rdf:Property ;
     rdfs:range xsd:anyURI;
     .

    otto:jwks_uri a rdf:Property ;
     rdfs:range xsd:anyURI;
     .

    otto:sector_identifier_uri a rdf:Property ;
     rdfs:range xsd:anyURI;
     .

    otto:initiate_login_uri a rdf:Property ;
     rdfs:range xsd:anyURI;
     .

    otto:logout_uri a rdf:Property ;
     rdfs:range xsd:anyURI;
     .

    otto:entity_category a rdf:Property ;
     rdfs:range xsd:anyURI;
     .
```
