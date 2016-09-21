# Relying Party

## schema/otto/openid_relying_party.jsonld

```N3
    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
    @prefix schema: <http://schema.org/> .
    @prefix otto: <http://kantarainitiative.org/otto/schema/> .

    # Ontology

    otto:OpenID_Relying_Party a rdfs:Class .

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