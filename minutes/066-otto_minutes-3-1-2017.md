OTTO WG Minutes: 3/1/2017
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Judith Bush
 - Meg Joshi
 
## Working on schema for participant

* [Best practices for JSON-LD](http://json-ld.org/spec/latest/json-ld-api-best-practices/)
* [Google JSON-LD Schema Validator](https://developers.google.com/schemas/testing#schema_validator)
  
We spent the hour staring at the json-ld schema file for schema.org

We changed the name of "Organization" to "Participant"

In JSON-LD, you define the object... then you define the property.
And then in the property you specify which object uses it.

For example:

```
{
    "@id": "https://[OTTO]/Participant",
    "@type": "rdfs:Class",
    "rdfs:comment": "A legal entity that can assent to federation policies.",
    "rdfs:label": "Participant",
    "rdfs:subClassOf":
        {
            "@id": "http://schema.org/Organization"
        }
},

{
  "@id": "http://schema.org/operates",
  "@type": "rdf:Property",
  "http://schema.org/domainIncludes": [
    {
      "@id": "https://[OTTO]/Participant"
    }
  ],
  "http://schema.org/rangeIncludes": {"@id": "http://[OTTO]/Entity"},
  "rdfs:comment": "Service provided by the Participant",
  "rdfs:label": "operates"
},
```

Some questions are raised:

Should be perhaps just move to one big schema file for OTTO? 

At what URL should we publish the OTTO schema? Should we ask for a nice 
Kantara URL?


