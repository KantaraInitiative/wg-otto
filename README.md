# Open Trust Taxonomy for Federation Operators

Table of Contents
=================

 * [Abstract](#abstract)
 * [Definitions](#definitions)
 * [Schema](#schema)
 * [Discovery Endpoint](#discovery-endpoint)
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
 * [organization endpoint](#organization-endpoint)
   * [Create (POST)](#create-post-3)
   * [Update (PUT)](#update-put-3)
   * [Delete (DELETE)](#delete-delete-3)
 * [Appendix A](#appendix-a)
   * [Search federations endpoint : /federations/&lt;federation id&gt;?depth=1](#search-federations-endpoint--federationsfederation-iddepthfederations)
   * [Search federations endpoint : /federations/&lt;federation id&gt;?depth=1&filter=&lt;filter&gt;](#search-federations-endpoint--federationsfederation-iddepth1filterfilter)
 * [Questions](#questions)
 * [More Info](#more-info)
## Abstract

The Open Trust Taxonomy for Federation Operators (OTTO) is a set of API's and a linked data
schema to enable the formation of multi-party federations--where a central authority
creates the rules for membership, enabling the participants to more efficiently
collaborate. The goal of OTTO is to support a range of trust models from very low to
very high. By providing a framework for extension, in addition to a core set of
functionality and schema, the OTTO standard provides a scalable technical
infrastructure to solve organizational challenges in a number of different
ecosystems.

![Big picture](https://raw.githubusercontent.com/KantaraInitiative/wg-otto/master/docs/proposal/otto_overview.png "Big picture")

## Definitions

* Registration Authority - Service responsible for hosting federations.
* Organization - Legal entity that can sign agreements and control services.
* Federation - A group of organizations that cede some decision making rights
to a central authority to lower the legal and technical costs of collaboration.
* Federation Operator - An organization responsibile for setting the 
operating policies and procedures for an individual federation.
* Participant - An organization that has joined a federation, sometimes 
also called a "Member"
* Entity - A high level term for a service or group of services which 
partipate in the federation

## Schema

JSON-LD definitions to model the ecosystem components.

* OTTO
    * Registration Authority - https://github.com/KantaraInitiative/wg-otto/blob/master/schema/otto/ra.md
    * Federation - https://github.com/KantaraInitiative/wg-otto/blob/master/schema/otto/federation.md        
    * Entity - https://github.com/KantaraInitiative/wg-otto/blob/master/schema/otto/entity.md        
    * Organization - https://github.com/KantaraInitiative/wg-otto/blob/master/schema/otto/organization.md
    * User Claim - https://github.com/KantaraInitiative/wg-otto/blob/master/schema/otto/user_claim.md
    * Authentication Context Class Reference - https://github.com/KantaraInitiative/wg-otto/blob/master/schema/otto/acr.md
    * Authentication Method Reference - https://github.com/KantaraInitiative/wg-otto/blob/master/schema/otto/amr.md
* SAML
    * SAML IDP - https://github.com/KantaraInitiative/wg-otto/blob/master/schema/saml/idp.md
    * SAML SP - https://github.com/KantaraInitiative/wg-otto/blob/master/schema/saml/sp.md
* OpenID
    * Relying Party - https://github.com/KantaraInitiative/wg-otto/blob/master/schema/openid/rp.md
    * OpenID Provider - https://github.com/KantaraInitiative/wg-otto/blob/master/schema/openid/op.md
    * Scope - https://github.com/KantaraInitiative/wg-otto/blob/master/schema/openid/scope.md
    * Software statement - https://github.com/KantaraInitiative/wg-otto/blob/master/schema/openid/SoftwareStatement.md

## [Discovery Endpoint](#endpoint-discovery)

Registration Authority have metadata describing their configuration. 
These Registration Authority Metadata values are used by OTTO:

   * issuer - REQUIRED. URL using the https scheme with no query or 
   fragment component that the RA asserts as its Issuer Identifier.
   * federations_endpoint - REQUIRED. federations endpoint
   * federation_entity_endpoint - REQUIRED. federation entity endpoint
   * organizations_endpoint - REQUIRED. organization endpoint

Registration Authority supporting Discovery MUST make a JSON document 
available at the path formed by concatenating the string 
`/.well-known/otto-configuration` to the Issuer. The syntax and semantics 
of .well-known are defined in [RFC 5785](https://tools.ietf.org/html/rfc5785)
and apply to the Issuer value when it contains no path component. 
otto-configuration MUST point to a JSON document compliant with this 
specification and MUST be returned using the `application/json` content 
type.

*Non-normative example request*
```
GET /.well-known/otto-configuration HTTP/1.1
Host: ra.org
```

The response is a set of Claims about the RA's configuration, including 
all necessary endpoints and public key location information. A successful 
response MUST use the 200 OK HTTP status code and return a JSON object 
using the `application/json` content type that contains a set of Claims 
as its members that are a subset of the RA's Metadata values. Other 
Claims MAY also be returned. Claims that return multiple values are 
represented as JSON arrays. Claims with zero elements MUST be omitted 
from the response. An error response uses the applicable HTTP status 
code value.

*Non-normative example response*
```
HTTP/1.1 200 OK
Content-Type: application/json

{
   "issuer":"https://ra.com",
   "federations_endpoint":"https://ra.com/otto/federations",
   "federation_entity_endpoint":"https://ra.com/otto/entity",
   "organizations_endpoint":"https://ra.com/otto/organizations"
}
```


##  federations endpoint

### Search Federations (GET)

Endpoint to return federation metadata or federation IDs that are hosted 
by given server.

Request:
* federation_id - OPTIONAL - id of federation.
* entity_type - OPTIONAL - filter to return federation entities only of 
specific type. For example, an OpenID Connect OP implementation 
may only need to know about RP entities. Such an implementation is not 
interested in other OP's or SAML entities. Possible values:
    * connect_rp
    * connect_op
    * saml_idp
    * saml_rp
* filter - OPTIONAL - expression to narrow the result set based on 
specific criteria. Expression is represented in 
[jspath format](https://github.com/dfilatov/jspath).
* depth - OPTIONAL - represents depth of graph resolving.

Requests:
  - /federations - returns federation IDs available from this Registration Authority
  - /federations/_federation id_ - returns metadata of federation
  - /federations/_federation id_&entity_type=_type_ - returns metadata of federation filtered by type.
  - /federations/_federation id_&filter=_filter_ - returns filtered metadata
  - /federations/_federation id_&depth=_1_ - how many inter-federations deep to search

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
GET https://ra.org/federations/904cb092-c5a6-11e5-9912-ba0be0483c18&depth=entities HTTP/1.1
```


**Federation Response:**
```json
{
  "@id":"https://ra.org/federations/904cb092-c5a6-11e5-9912-ba0be0483c18",
  "@context": "https://ra.org/schema/otto/federation.jsonld",                      <- context of federation
  "name": "Our Federation",                                                        <- name of federation
  "entities":[
            {                                                                      <- reference to entity
                        "@context": "https://ra.org/schema/otto/entity/connect_rp.jsonld",
                        "@id": "https://ra.org/entity/664cb092-c5a6-11e5-9912-ba0be0483c18",
                        "name": "Gluu Server Ce-dev Client",
                        "id":"https://ce-dev.gluu.org/rp",          <- in RP context it is redirect_uri
                        "organization":"https://gluu.org/otto/organization"
            },
            {
                         "@context": "https://ra.org/schema/otto/entity/connect_op.jsonld",
                         "@id": "https://ra.org/entity/554cb092-c5a6-11e5-9912-ba0be0483c18",
                         "name": "Gluu Server Ce-dev",
                         "id":"https://ce-dev.gluu.org"           <- in OP context it is URI
                         "organization":"https://gluu.org/otto/organization"
            },
            {
                         "@context": "https://ra.org/schema/otto/entity/uma_rs.jsonld",
                         "@id": "https://ra.org/entity/904cb092-c5a6-11e5-9912-ba0be0483c18",
                         "name": "Gluu Resource Server",
                         "id":"https://ce-dev.gluu.org/rs",          <- in RS context it is URI
                         "organization":"https://gluu.org/otto/organization"
            }
  ]
  "federations":[                                                                  <- reference to federation
                         "https://ra.org/federations/904cb092-c5a6-11e5-9912-ba0be0483c18"
           ],
  "organization": { 
                    "@id":"https://ra.org/organization/554cb092-c5a6-11e5-9912-ba0be0483c18"
                    "@context": "https://ra.org/schema/otto/organization.jsonld",   <- organization
                     "name":"MyOrganization",
                     <other properties here>
                  }
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
   "@id":"https://ra.org/federations/904cb092-c5a6-11e5-9912-ba0be0483c18"
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

### Create and Join federation (POST)

Create entity and join to the federation.

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

### Join federation (POST)

Join the federation.

**Request**
```json
POST /federations/<federation_id>/<entity_id> HTTP/1.1
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
  "@id":"https://ra.org/federation_entity/194d8ab2-c5a7-11e5-9912-ba0be0483c18",
  "@context": "https://ra.org/schema/otto/entity/connect_op.jsonld",
  "name": "Gluu Server Ce-dev",
  "id":"https://ce-dev.gluu.org"           <- in OP context it is URI
  "organization":"https://gluu.org/otto/organization"
}
```

**OpenID Connect RP Entity Response:**
```json
{
  "@id":"https://ra.org/federation_entity/194d8ab2-c5a7-11e5-9912-ba0be0483c18",
  "@context": "https://ra.org/schema/otto/entity/connect_rp.jsonld",
  "name": "Gluu Server Ce-dev Client",
  "id":"https://ce-dev.gluu.org/rp",          <- in RP context it is redirect_uri
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
   "@id":"https://ra.org/federation_entity/904cb092-c5a6-11e5-9912-ba0be0483c19"
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

## organization endpoint

**Organizations list Request:**

```
GET https://ra.org/organization HTTP/1.1
```


**Organizations list Response:**
```json
{
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
  "@id":"https://ra.org/organization/904cb092-c5a6-11e5-9912-ba0be0483c18",
  "@context": "https://schema.org",                      <- context of organization
  "@type":"Organization",
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
   "@id":"https://ra.org/organization/904cb092-c5a6-11e5-9912-ba0be0483c18"
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


# Appendix A

## Search federations endpoint : /federations/&lt;federation id&gt;?depth=federations

All entities are resolved and federations link too with depth=federations

**Federation Request:**

```
GET https://ra.org/federations/904cb092-c5a6-11e5-9912-ba0be0483c18&depth=federations HTTP/1.1
```

**Federation Response:**
```json
{
  "@id":"https://ra.org/federations/904cb092-c5a6-11e5-9912-ba0be0483c18",
  "@context": "https://ra.org/schema/otto/federation.jsonld",                      <- context of federation
  "name": "OAuth 2 Federation",                                                    <- name of federation
  "entities": [                                                                    <- reference to entity
           {
             "@context": "https://ra.org/schema/otto/entity/connect_rp.jsonld",
             "uri": "https://ra.org/entity/664cb092-c5a6-11e5-9912-ba0be0483c18",
             "name": "Gluu Server Ce-dev Client",
             "id":"https://ce-dev.gluu.org/rp",          <- in RP context it is redirect_uri
             "organization":"https://gluu.org/otto/organization"
           },
           {
             "@context": "https://ra.org/schema/otto/entity/uma_rs.jsonld",
             "uri": "https://ra.org/entity/114cb092-c5a6-11e5-9912-ba0be0483c18",
             "name": "Gluu Resource Server",
             "id":"https://ce-dev.gluu.org/rs",          <- in RS context it is URI
             "organization":"https://gluu.org/otto/organization"
           }
  ],
  "federations":[
         {
                 "@context": "https://ra.org/schema/otto/federation.jsonld",                      <- context of sub federation
                 "name": "OAuth 2 Federation of Gluu",                                          <- name of sub federation
                 "entities":[
                          {                                                                    <- reference to entity
                            "@context": "https://ra.org/schema/otto/entity/connect_rp.jsonld",
                            "@id": "https://ra.org/entity/134cb092-c5a6-11e5-9912-ba0be0483c18",
                            "name": "Gluu Server Ce-dev2 Client",
                            "id":"https://ce-dev2.gluu.org/rp",          <- in RP context it is redirect_uri
                            "organization":"https://gluu.org/otto/organization"
                          },
                          {
                            "@context": "https://ra.org/schema/otto/entity/uma_rs.jsonld",
                            "@id": "https://ra.org/entity/344cb092-c5a6-11e5-9912-ba0be0483c18",
                            "name": "Gluu Resource Server 2",
                            "id":"https://ce-dev2.gluu.org/rs",          <- in RS context it is URI
                            "organization":"https://gluu.org/otto/organization"
                          }
                 ]
                 "federation": [                                                                 <- reference to federation
                          "https://ra.org/federations/222cb092-c5a6-11e5-9912-ba0be0483c18"
                 ]
                 "organization": "https://gluu.org/otto/organization"
        }
  ],
  "organization": {
                    "@id":"https://ra.org/organization/222cb092-c5a6-11e5-9912-ba0be0483c18".
                    "@context": "https://ra.org/schema/otto/organization.jsonld",   <- organization
                     "name":"MyOrganization",
                     <other properties here>
                  }
}
```

## Search federations endpoint : /federations/&lt;federation id&gt;?depth=federations&filter=&lt;filter&gt;

Returns only .entity.name attributes.

**Federation Request:**

```
GET https://ra.org/federations/904cb092-c5a6-11e5-9912-ba0be0483c18&filter=.entity.name HTTP/1.1
```

**Federation Response:**
```json
{
  "@id":"https://ra.org/federations/904cb092-c5a6-11e5-9912-ba0be0483c18",
  "@context": "https://ra.org/schema/otto/federation.jsonld",                      <- context of federation
  "name": "OAuth 2 Federation",                                                    <- name of federation
  "entities": [
           {                                                                       <- reference to entity
             "name": "Gluu Server Ce-dev Client"
           },
           {
             "name": "Gluu Resource Server"
           },
           {
             "name": "Gluu Resource Server 2",
           }
   ],
  "federations":[                                                                  <- reference to federation
           "https://ra.org/federations/222cb092-c5a6-11e5-9912-ba0be0483c18"
  ],
  "organization": {
                    "@context": "https://ra.org/schema/otto/organization.jsonld",   <- organization
                     "name":"MyOrganization",
                     <other properties here>
                  }
}
```


(in case of multiple attributes specify multiple filter parameters as mentioned on wiki https://en.wikipedia.org/wiki/Query_string)
`&filter=.entity.name&filter=.entity.id`


### Open Questions

* How are we going version federation metadata?
* How are we going version entities?  
* Do we want to support custom entities?

### More info

[External extensions](http://schema.org/docs/extension.html)
[JSON-LD basic concept](https://www.w3.org/TR/json-ld/#basic-concepts)
