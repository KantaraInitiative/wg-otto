# Open Trust Taxonomy for Federation Operators

Table of Contents
=================

  * [Open Trust Taxonomy for Federation Operators](#open-trust-taxonomy-for-federation-operators)
    * [Abstract](#abstract)
    * [Definitions](#definitions)
    * [<a href="#endpoint-discovery">Discovery Endpoint</a>](#discovery-endpoint)
    * [federations endpoint](#federations-endpoint)
      * [Search Federations (GET)](#search-federations-get)
      * [Create (POST)](#create-post)
      * [Update (PUT)](#update-put)
      * [Delete (DELETE)](#delete-delete)
      * [Join federation (POST)](#join-federation-post)
      * [Leave federation (DELETE)](#leave-federation-delete)
    * [federation_entity endpoint](#federation_entity-endpoint)
      * [Fetch (GET)](#fetch-get)
      * [Create (POST)](#create-post-1)
      * [Update (PUT)](#update-put-1)
      * [Delete (DELETE)](#delete-delete-1)
    * [schema endpoint](#schema-endpoint)
      * [Create (POST)](#create-post-2)
      * [Update (PUT)](#update-put-2)
      * [Delete (DELETE)](#delete-delete-2)
    * [organization endpoint](#organization-endpoint)
      * [Create (POST)](#create-post-3)
      * [Update (PUT)](#update-put-3)
      * [Delete (DELETE)](#delete-delete-3)
    * [Linked Data Schema](#linked-data-schema)
      * [Properties](#properties)
      * [schema/otto/hash.jsonld](#schemaottohashjsonld)
      * [schema/otto/openid_provider.jsonld](#schemaottoopenid_providerjsonld)
      * [schema/otto/openid_relying_party.jsonld](#schemaottoopenid_relying_partyjsonld)
      * [schema/otto/uma_rs.jsonld](#schemaottouma_rsjsonld)
      * [schema/otto/uma_as.jsonld](#schemaottouma_asjsonld)
      * [schema/otto/uma_relying_party.jsonld](#schemaottouma_relying_partyjsonld)
      * [Questions](#questions)

## Abstract

The Open Trust Taxonomy for Federation Operators (OTTO) is a set of API's and a linked data
schema to enable the formation of multi-party federations--where a central authority
creates the rules for membership, enabling the participants to more efficiently
collaborate. The goal of OTTO is to support a range of trust models from very low to
very high. By providing a framework for extension, in addition to a core set of
functionality and schema, the OTTO standard provides a scalable technical
infrastructure to solve organizational challenges in a number of different
ecosystems.

![Big picture](https://raw.githubusercontent.com/KantaraInitiative/wg-otto/daf940b6d44c990a0b580dcc59d9698a1a66ccd0/docs/proposal/otto_overview.png "Big picture")

## Definitions

* Registration Authority - Service responsible for hosting federations.
* Organization - organization description. It may be referenced in any object: Federation, Entity or any
other organization related object.
* Federation - group of entities.
* Member - reference to entity or another federation.
* Entity - concrete representation of entity. Entity may have many types at the same time. For example, an
entity may act as OpenID Connect OP and UMA AS at the same time.
    * Entity type :
        * OAuth2 RP - https://ra.org/schema/otto/entity/type/oauth2_rp
        * OAuth2 OP - https://ra.org/schema/otto/entity/type/oauth2_op
        * OpenID Connect RP - https://ra.org/schema/otto/entity/type/connect_rp
        * OpenID Connect OP - https://ra.org/schema/otto/entity/type/connect_rp
        * UMA AS - https://ra.org/schema/otto/entity/type/uma_as
        * UMA RS - https://ra.org/schema/otto/entity/type/uma_rs
        * UMA RP - https://ra.org/schema/otto/entity/type/uma_rp
* Schema -
    * Schema type :
        * User claim schema
        * Authentication context reference schema
        * Authentication method reference schema
        * UMA Scope schema
        * OpenID Connect Scope schema
        * Software statement schema
        * Trust mark schema

## [Discovery Endpoint](#endpoint-discovery)

Registration Authority have metadata describing their configuration. These Registration Authority Metadata values are used by OTTO:

   * issuer - REQUIRED. URL using the https scheme with no query or fragment component that the RA asserts as its Issuer Identifier. If Issuer discovery is supported, this value MUST be identical to the issuer value returned by WebFinger. 
   * federations_endpoint - REQUIRED. federations endpoint
   * federation_entity_endpoint - REQUIRED. federation entity endpoint
   * organizations_endpoint - REQUIRED. organization endpoint
   * schema_endpoint - REQUIRED. schema endpoint

Registration Authority supporting Discovery MUST make a JSON document available at the path formed by concatenating the string `/.well-known/otto-configuration` to the Issuer. The syntax and semantics of .well-known are defined in RFC 5785 [RFC5785] and apply to the Issuer value when it contains no path component. otto-configuration MUST point to a JSON document compliant with this specification and MUST be returned using the `application/json` content type.

*Non-normative example request*
```
GET /.well-known/otto-configuration HTTP/1.1
Host: ra.com
```

The response is a set of Claims about the RA's configuration, including all necessary endpoints and public key location information. A successful response MUST use the 200 OK HTTP status code and return a JSON object using the `application/json` content type that contains a set of Claims as its members that are a subset of the RA's Metadata values. Other Claims MAY also be returned. Claims that return multiple values are represented as JSON arrays. Claims with zero elements MUST be omitted from the response. An error response uses the applicable HTTP status code value.

*Non-normative example response*
```
HTTP/1.1 200 OK
Content-Type: application/json

{
   "issuer":"https://ra.com",
   "federations_endpoint":"https://ra.com/otto/federations",
   "federation_entity_endpoint":"https://ra.com/otto/entity",
   "organizations_endpoint":"https://ra.com/otto/organizations",
   "schema_endpoint":"https://ra.com/otto/schema"
}
```


##  federations endpoint

### Search Federations (GET)

Endpoint to return federation metadata or federation IDs that are hosted by given server.

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
* filter - OPTIONAL - expression to narrow the result set based on specific criteria. Expression is represented in jspath format (https://github.com/dfilatov/jspath).
* depth - OPTIONAL - represents depth of graph resolving. By default depth is set to 0 (not following federation links).

Requests:
  - /federations - returns federation IDs available from this Registration Authority
  - /federations/_federation id_ - returns metadata of federation
  - /federations/_federation id_&entity_type=_type_ - returns metadata of federation filtered by type.
  - /federations/_federation id_&filter=_filter_ - returns filtered metadata
  - /federations/_federation id_&depth=_1_ - how many interfederations deep to search

**Federation list Request:**

```
GET https://ra.org/federations HTTP/1.1
```


**Federation list Response:**
```json
{
  "@context": "https://ra.org/schema/otto/federation_list",
  "federations": [
    "https://ra.org/federations/904ca9da-c5a6-11e5-9912-ba0be0483c18",
    "https://ra.org/federations/904cae1c-c5a6-11e5-9912-ba0be0483c18",
    "https://ra.org/federations/904cb092-c5a6-11e5-9912-ba0be0483c18"
  ]
}
```


**Federation Request:**

```
GET https://ra.org/federations/904cb092-c5a6-11e5-9912-ba0be0483c18 HTTP/1.1
```


**Federation Response:**
```json
{
  "@context": "https://ra.org/schema/otto/federation.jsonld",                      <- context of federation
  "name": "OAuth 2 Federation",                                                    <- name of federation
  "entity":"https://ra.org/federation_entity/194d8ab2-c5a7-11e5-9912-ba0be0483c18",<- reference to entity
  "entity":"https://ra.org/federations/904cb092-c5a6-11e5-9912-ba0be0483c18",      <- reference to federation
  "entity":"https://ra.org/federation_entity/394d8fbc-c5a7-11e5-9912-ba0be0483c18",
  "entity":"https://ra-uk.com/federation_entity/494d8fbc-c5a7-11e5-9912-ba0be0483c18",
  "entity":"https://ra-fr.com/federation_entity/594d8fbc-c5a7-11e5-9912-ba0be0483c18",
  "organization": "https://gluu.org/otto/organization"
}
```


### Create (POST)

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
   "id":"https://ra.org/federations/904cb092-c5a6-11e5-9912-ba0be0483c18"
}
```

### Update (PUT)

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

### Delete (DELETE)

**Request:**
```
DELETE /federations/904cb092-c5a6-11e5-9912-ba0be0483c18 HTTP/1.1
```

**Response:**
```
HTTP/1.1 200 OK
```

### Join federation (POST)

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

### Leave federation (DELETE)

Leave federation.

**Request**
```
DELETE /federations/<federation_id>/<entity id> HTTP/1.1
```

**Response**
```
HTTP/1.1 200 OK
```

## federation_entity endpoint

### Fetch (GET)

**Entity Request:**
```
GET https://ra.org/federation_entity/194d8ab2-c5a7-11e5-9912-ba0be0483c18 HTTP/1.1
```

**OpenID Connect OP Entity Response:**
```json
{
  "@context": "https://ra.org/schema/otto/entity/connect_op.jsonld",
  "name": "Gluu Server Ce-dev",
  "id":"https://ce-dev.gluu.org"           <- in OP context it is URI
  "organization":"https://gluu.org/otto/organization"
}
```

**OpenID Connect RP Entity Response:**
```json
{
  "@context": "https://ra.org/schema/otto/entity/connect_rp.jsonld",
  "name": "Gluu Server Ce-dev Client",
  "id":"https://ce-dev.gluu.org/rp",          <- in RP context it is redirect_uri
  "organization":"https://gluu.org/otto/organization"
}
```

**UMA Resource Server Entity Response:**
```json
{
  "@context": "https://ra.org/schema/otto/entity/uma_rs.jsonld",
  "name": "Gluu Resource Server",
  "id":"https://ce-dev.gluu.org/rs",          <- in RS context it is URI
  "organization":"https://gluu.org/otto/organization"
}
```

### Create (POST)

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
   "id":"https://ra.org/federation_entity/904cb092-c5a6-11e5-9912-ba0be0483c19"
}
```

### Update (PUT)

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

### Delete (DELETE)

**Request:**
```
DELETE /federation_entity/<entity id> HTTP/1.1
```

**Response:**
```
HTTP/1.1 200 OK
```

## schema endpoint

**Schema list Request:**

```
GET https://ra.org/schema/v1.1 HTTP/1.1
```

(Schema sticks to particular version which is shown directly in URL. E.g. GET https://ra.org/schema/v2.1)

**Schema list Response:**
```json
{
  "schemas": [
    "https://ra.org/schema/v1.1/hash",
    "https://ra.org/schema/v1.1/organization",
    "https://ra.org/schema/v1.1/federations",
    "https://ra.org/schema/v1.1/openid_provider",
    "https://ra.org/schema/v1.1/openid_relying_party",
    "https://ra.org/schema/v1.1/uma_rs",
    "https://ra.org/schema/v1.1/uma_as",
    "https://ra.org/schema/v1.1/uma_ro"
  ]
}
```


**Schema Request:**

```
GET https://ra.org/schema/v1.1/hash HTTP/1.1
```

**Schema hash v1.1 Response:**
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

### Create (POST)

**Request:**
```json
POST /schema
{
   "name":"myentity",
   "major_version":"1",
   "minor_version":"2"
   <other properties here>
}
```

**Response:**
```json
HTTP/1.1 201 Created
Content-Type: application/json

{
   "id":"https://ra.org/schema/1.2/myentity"
}
```

### Update (PUT)

**Request:**
```json
PUT /schema HTTP/1.1
{
   "name":"myentity",
   "major_version":"1",
   "minor_version":"2"
   <other properties here>
}
```

**Response:**
```
HTTP/1.1 200 OK
```

### Delete (DELETE)

**Request:**
```
DELETE /schema/v1.2/myentity HTTP/1.1
```

**Response:**
```
HTTP/1.1 200 OK
```

## organization endpoint

**Organizations list Request:**

```
GET https://ra.org/organization HTTP/1.1
```


**Organizations list Response:**
```json
{
  "@context": "https://ra.org/schema/otto/organization",
  "organizations": [
    "https://ra.org/organization/904ca9da-c5a6-11e5-9912-ba0be0483c18",
    "https://ra.org/organization/904cae1c-c5a6-11e5-9912-ba0be0483c18",
    "https://ra.org/organization/904cb092-c5a6-11e5-9912-ba0be0483c18"
  ]
}
```


**Organization Request:**

```
GET https://ra.org/organization/904cb092-c5a6-11e5-9912-ba0be0483c18 HTTP/1.1
```

**Organization Response:**
```json
{
  "@context": "https://ra.org/schema/otto/organization.jsonld",                      <- context of organization
   "name":"MyOrganization",
   <other properties here>
}
```

### Create (POST)

**Request:**
```json
POST /organization
{
   "name":"MyOrganization",
   <other properties here>
}
```

**Response:**
```json
HTTP/1.1 201 Created
Content-Type: application/json

{
   "id":"https://ra.org/organization/904cb092-c5a6-11e5-9912-ba0be0483c18"
}
```

### Update (PUT)

**Request:**
```json
PUT /organization/904cb092-c5a6-11e5-9912-ba0be0483c18 HTTP/1.1
{
   "name":"MyOrganization",
   <other properties here>
}
```

**Response:**
```
HTTP/1.1 200 OK
```

### Delete (DELETE)

**Request:**
```
DELETE /organization/904cb092-c5a6-11e5-9912-ba0be0483c18 HTTP/1.1
```

**Response:**
```
HTTP/1.1 200 OK
```

## Linked Data Schema

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

### schema/otto/openid_relying_party.jsonld

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

###  Questions

* How are we going version federation metadata?
* How are we going version entities ? E.g. UMA RP 1.0 vs UMA RP 1.0.1 implementation.
* Do we want to support custom entities?
