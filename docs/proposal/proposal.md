## Before reading proposal
* ID - just for convenience of this proposal we are using UUID however it can be any other identifier, e.g. URI, inum, long integer or whatever.
* Federation Server - for convenience this proposal refers to "http://fs.com", which stands for federation server and must be replaced with concrete server address.

## Discussion roadmap

* FIXME

## Big picture

![Big picture](https://raw.githubusercontent.com/KantaraInitiative/wg-otto/0628d4a8400e2d98ea971a26f4c28075f63056d1/docs/proposal/img/ottobigpicture.png "Big picture")

## Concept

* Federation - group of entities.
* Member - reference to entity or another federation.
* Entity - concrete representation of entity. Entity may have many types at the same time. It means that given implementation may act as OpenID Connect OP and UMA AS at the same time.
    * Entity type :
        * OAuth2 RP - https://fs.com/schema/otto/entity/type/oauth2_rp
        * OAuth2 OP - https://fs.com/schema/otto/entity/type/oauth2_op
        * OpenID Connect RP - https://fs.com/schema/otto/entity/type/connect_rp
        * OpenID Connect OP - https://fs.com/schema/otto/entity/type/connect_rp
        * UMA AS - https://fs.com/schema/otto/entity/type/uma_as
        * UMA RS - https://fs.com/schema/otto/entity/type/uma_rs
        * UMA RP - https://fs.com/schema/otto/entity/type/uma_rp
* Organization - organization description. It may be present in any entry/object: Federation, Entity or any other organization related entry/object.


##  /federations

#### Fetching (GET)

Endpoint to return federation metadata or otherwise federation IDs that are hosted by given server.

Request:
* federation_id - OPTIONAL - id of federation.
* entity_type - OPTIONAL - filter to return federation entities only of specific type. For example OpenID Connect OP implementation in general is interested only in OpenID Connect RP entity because it's going to server only Connect RP requests. Such implementation is not interested in any UMA or SAML or OAuth2 entities. For this we provide filtering functionality. Possible values:
    * oauth2_rp
    * oauth2_op
    * connect_rp
    * connect_op
    * uma_rs
    * uma_rp
    * uma_as

Requests:
  - /federations - returns federation IDs registered by given server
  - /federations/<federation id> - returns metadata of federation
  - /federations/<federation id>&entity_type=<type> - returns metadata of federation filtered by type.


**Federation list Request:**

```
GET https://fs.com/federations HTTP/1.1
```


**Federation list Response:**
```json
{
  "@context": "https://fs.com/schema/otto/federation_list",
  "federations": [
    "https://fs.com/federations/904ca9da-c5a6-11e5-9912-ba0be0483c18",
    "https://fs.com/federations/904cae1c-c5a6-11e5-9912-ba0be0483c18",
    "https://fs.com/federations/904cb092-c5a6-11e5-9912-ba0be0483c18"
  ]
}
```


**Federation Request:**

```
GET https://fs.com/federations/904cb092-c5a6-11e5-9912-ba0be0483c18 HTTP/1.1
```


**Federation Response:**
```json
{
  "@context": "https://fs.com/schema/otto/federation.jsonld",                      <- context of federation
  "name": "OAuth 2 Federation",                                                    <- name of federation
  "entity":"https://fs.com/federation_entity/194d8ab2-c5a7-11e5-9912-ba0be0483c18",<- reference to entity
  "entity":"https://fs.com/federations/904cb092-c5a6-11e5-9912-ba0be0483c18",      <- reference to federation
  "entity":"https://fs.com/federation_entity/394d8fbc-c5a7-11e5-9912-ba0be0483c18",
  "entity":"https://fed1.com/federation_entity/494d8fbc-c5a7-11e5-9912-ba0be0483c18",
  "entity":"https://fed2.com/federation_entity/594d8fbc-c5a7-11e5-9912-ba0be0483c18",
  "organization": "https://gluu.org/otto/organization"
}
```


#### Create (POST)

**Request:**
```json
POST /federations
{
   "name":"MyFederation",
   <other properties here>
}
```

**Response:**
```json
HTTP/1.1 201 Created
Content-Type: application/json

{
   "id":"https://fs.com/federations/904cb092-c5a6-11e5-9912-ba0be0483c18"
}
```

#### Update (PUT)

**Request:**
```json
PUT /federations/904cb092-c5a6-11e5-9912-ba0be0483c18 HTTP/1.1
{
   "name":"MyFederation",
   <other properties here>
}
```

**Response:**
```
HTTP/1.1 200 OK
```

#### Delete (DELETE)

**Request:**
```
DELETE /federations/904cb092-c5a6-11e5-9912-ba0be0483c18 HTTP/1.1
```

**Response:**
```
HTTP/1.1 200 OK
```

#### Join federation (POST)

It may create entity and join the federation or otherwise join already existed entity.

**Request**
```json
POST /federations/<federation_id> HTTP/1.1
{
   "name":"MyEntity",
   <other properties here>
}
```

**Response**
```
HTTP/1.1 200 OK
```

#### Leave federation (DELETE)

Leave federation.

**Request**
```
DELETE /federations/<federation_id>/<entity id> HTTP/1.1
```

**Response**
```
HTTP/1.1 200 OK
```

### /federation_entity

#### Fetch (GET)

**Entity Request:**
```
GET https://fs.com/federation_entity/194d8ab2-c5a7-11e5-9912-ba0be0483c18 HTTP/1.1
```

**OpenID Connect OP Entity Response:**
```json
{
  "@context": "https://fs.com/schema/otto/entity/connect_op.jsonld",
  "name": "Gluu Server Ce-dev",
  "id":"https://ce-dev.gluu.org"           <- in OP context it is URI
  "organization":"https://gluu.org/otto/organization"
}
```

**OpenID Connect RP Entity Response:**
```json
{
  "@context": "https://fs.com/schema/otto/entity/connect_rp.jsonld",
  "name": "Gluu Server Ce-dev Client",
  "id":"https://ce-dev.gluu.org/rp",          <- in RP context it is redirect_uri
  "organization":"https://gluu.org/otto/organization"
}
```

**UMA Resource Server Entity Response:**
```json
{
  "@context": "https://fs.com/schema/otto/entity/uma_rs.jsonld",
  "name": "Gluu Resource Server",
  "id":"https://ce-dev.gluu.org/rs",          <- in RS context it is URI
  "organization":"https://gluu.org/otto/organization"
}
```

#### Create (POST)

**Request:**
```json
POST /federation_entity
{
   "name":"MyFederationEntity",
   <other properties here>
}
```

**Response:**
```json
HTTP/1.1 201 Created
Content-Type: application/json

{
   "id":"https://fs.com/federation_entity/904cb092-c5a6-11e5-9912-ba0be0483c19"
}
```

#### Update (PUT)

**Request:**
```json
PUT /federation_entity/<entity id> HTTP/1.1
{
   "name":"MyEntity",
   <other properties here>
}
```

**Response:**
```
HTTP/1.1 200 OK
```

#### Delete (DELETE)

**Request:**
```
DELETE /federation_entity/<entity id> HTTP/1.1
```

**Response:**
```
HTTP/1.1 200 OK
```

### Organization information sharing

Organization information can be provided by:
  * Organization public server (for example https://gluu.org/otto/organization)
  * Or otherwise it can be managed/hosted by Federation server (e.g. https://fc.com/otto/organization)

Main point is that hosted server must follow otto organization schema context. So organization information is structured according to schema and is well known.

## Schema

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

### schema/otto/openid_provider.jsonld

[External extensions](http://schema.org/docs/extension.html)
[JSON-LD basic concept](https://www.w3.org/TR/json-ld/#basic-concepts)

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
```

openid_provider.jsonld
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
        ]
      }
```


###  Questions

* How are we going to support versioning of federation metadata?
* How are we going to support versioning of entities ? E.g. UMA RP 1.0 vs UMA RP 1.0.1 implementation.
* Do we want to support custom members?
