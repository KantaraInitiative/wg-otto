===== Before reading proposal =====
  * ID - just for convenience of this proposal we are using UUID however it can be any other identifier, e.g. URI, inum, long integer or whatever.
  * Federation Server - for convenience this proposal refers to "http://fs.com", which stands for federation server and must be replaced with concrete server address.

===== Discussion roadmap =====

  * FIXME

===== Big picture =====

![Big picture](https://raw.githubusercontent.com/KantaraInitiative/wg-otto/0628d4a8400e2d98ea971a26f4c28075f63056d1/docs/proposal/img/ottobigpicture.png "Big picture")

===== Concept =====

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


=====  /federations =====

==== Fetching (GET) ====

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

<code>
GET https://fs.com/federations HTTP/1.1
</code>


**Federation list Response:**
<code>
{
  "@context": "https://fs.com/schema/otto/federation_list",
  "federations": [
    "https://fs.com/federations/904ca9da-c5a6-11e5-9912-ba0be0483c18",
    "https://fs.com/federations/904cae1c-c5a6-11e5-9912-ba0be0483c18",
    "https://fs.com/federations/904cb092-c5a6-11e5-9912-ba0be0483c18"
  ]
}
</code>


**Federation Request:**

<code>
GET https://fs.com/federations/904cb092-c5a6-11e5-9912-ba0be0483c18 HTTP/1.1
</code>


**Federation Response:**
<code>
{
  "@context": "https://fs.com/schema/otto/federation.jsonld",                      <- context of federation
  "name": "OAuth 2 Federation",                                                    <- name of federation
  "entity":"https://fs.com/federation_entity/194d8ab2-c5a7-11e5-9912-ba0be0483c18",<- reference to entity
  "entity":"https://fs.com/federations/904cb092-c5a6-11e5-9912-ba0be0483c18",      <- reference to federation
  "entity":"https://fs.com/federation_entity/394d8fbc-c5a7-11e5-9912-ba0be0483c18",
  "entity":"https://fed1.com/federation_entity/494d8fbc-c5a7-11e5-9912-ba0be0483c18",
  "entity":"https://fed2.com/federation_entity/594d8fbc-c5a7-11e5-9912-ba0be0483c18"
  "organization": "https://gluu.org/otto/organization"
}
</code>


==== Create (POST) ====

**Request:**
<code>
POST /federations
{
   "name":"MyFederation",
   <other properties here>
}
</code>

**Response:**
<code>
HTTP/1.1 201 Created
Content-Type: application/json

{
   "id":"https://fs.com/federations/904cb092-c5a6-11e5-9912-ba0be0483c18"
}
</code>

==== Update (PUT) ====

**Request:**
<code>
PUT /federations/904cb092-c5a6-11e5-9912-ba0be0483c18 HTTP/1.1
{
   "name":"MyFederation",
   <other properties here>
}
</code>

**Response:**
<code>
HTTP/1.1 200 OK
</code>

==== Delete (DELETE) ====

**Request:**
<code>
DELETE /federations/904cb092-c5a6-11e5-9912-ba0be0483c18 HTTP/1.1
</code>

**Response:**
<code>
HTTP/1.1 200 OK
</code>

==== Join federation (POST) ====

It may create entity and join the federation or otherwise join already existed entity.

**Request**
<code>
POST /federations/<federation_id> HTTP/1.1
{
   "name":"MyEntity",
   <other properties here>
}
</code>

**Response**
<code>
HTTP/1.1 200 OK
</code>

==== Leave federation (DELETE) ====

Leave federation.

**Request**
<code>
DELETE /federations/<federation_id>/<entity id> HTTP/1.1
</code>

**Response**
<code>
HTTP/1.1 200 OK
</code>

===== /federation_entity =====

==== Fetch (GET) ====

**Entity Request:**
<code>
GET https://fs.com/federation_entity/194d8ab2-c5a7-11e5-9912-ba0be0483c18 HTTP/1.1
</code>

**OpenID Connect OP Entity Response:**
<code>
{
  "@context": "https://fs.com/schema/otto/entity/connect_op.jsonld",
  "name": "Gluu Server Ce-dev",
  "id":"https://ce-dev.gluu.org"           <- in OP context it is URI
  "organization":"https://gluu.org/otto/organization"
}
</code>

**OpenID Connect RP Entity Response:**
<code>
{
  "@context": "https://fs.com/schema/otto/entity/connect_rp.jsonld",
  "name": "Gluu Server Ce-dev Client",
  "id":"https://ce-dev.gluu.org/rp"          <- in RP context it is redirect_uri
  "organization":"https://gluu.org/otto/organization"
}
</code>

**UMA Resource Server Entity Response:**
<code>
{
  "@context": "https://fs.com/schema/otto/entity/uma_rs.jsonld",
  "name": "Gluu Resource Server",
  "id":"https://ce-dev.gluu.org/rs"          <- in RS context it is URI
  "organization":"https://gluu.org/otto/organization"
}
</code>

==== Create (POST) ====

**Request:**
<code>
POST /federation_entity
{
   "name":"MyFederationEntity",
   <other properties here>
}
</code>

**Response:**
<code>
HTTP/1.1 201 Created
Content-Type: application/json

{
   "id":"https://fs.com/federation_entity/904cb092-c5a6-11e5-9912-ba0be0483c19"
}
</code>

==== Update (PUT) ====

**Request:**
<code>
PUT /federation_entity/<entity id> HTTP/1.1
{
   "name":"MyEntity",
   <other properties here>
}
</code>

**Response:**
<code>
HTTP/1.1 200 OK
</code>

==== Delete (DELETE) ====

**Request:**
<code>
DELETE /federation_entity/<entity id> HTTP/1.1
</code>

**Response:**
<code>
HTTP/1.1 200 OK
</code>

===== Organization information sharing =====

Organization information can be provided by:
  * Organization public server (for example https://gluu.org/otto/organization)
  * Or otherwise it can be managed/hosted by Federation server (e.g. https://fc.com/otto/organization)

Main point is that hosted server must follow otto organization schema context. So organization information is structured according to schema and is well known.

===== Schema of metadata response =====

==== schema/otto/federation.jsonld ====

[[http://schema.org/docs/extension.html|External extensions]]

<file json openid_provider_example_com.json>
    {
      "@context": [ "http://schema.org/", {"otto":"http://kantarainitiative.org/otto/schema"}]
      "@id": "https://fs.com/federations/904cb092-c5a6-11e5-9912-ba0be0483c18",
      "@type": ["Thing", "otto:OpenID_Provider"],
      "additionalType": "http://kantarainitiative.org/otto/OpenID_Provider",
      "discoveryURL": "https://idp.example.com/.well-known/openid-configuration",
      "discoveryJSONHash":  {"hash":"sdfsdfd", "hash-alg":"rsa"}
      "jwksJSONHash": "de9f2c7fd25e1b3afad3e85a0bd17d9b100db4b3"
      "providedBy": "https://fc.com/otto/organization/988cb077-c566-1115-9912-ba0be0483c18",
      }
    }

</file>

[[https://www.w3.org/TR/json-ld/#basic-concepts|JSON-LD basic concept]]

<file json openid_provider.jsonld>
    {
      "@context": {
         "xsd": "http://www.w3.org/2001/XMLSchema#",

         "discoveryURL": {
             "@id": "http://schema.org/url",  ? This means that 'discoveryURL' is shorthand for 'http://schema.org/url'
             "@type": "@id"  ? This means that a string value associated with 'discoveryURL' should be interpreted as an identifier that is an IRI
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

</file>

====  schema/otto/organization.jsonld ====
:!: TODO

====  Questions ====

  * How are we going to support versioning of federation metadata?
  * How are we going to support versioning of entities ? E.g. UMA RP 1.0 vs UMA RP 1.0.1 implementation.
  * Do we want to support custom members?