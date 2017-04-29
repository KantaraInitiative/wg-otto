OTTO WG Minutes: 4/26/2017
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Meg Joshi
 - Judith Bush
 - Keith Hazelton

## Recent docs

Links:
 - http://gluu.co/otto-api
 - http://gluu.co/otto-vocab
 - https://github.com/KantaraInitiative/wg-otto/blob/master/context/otto-schema.jsonld
 - https://github.com/KantaraInitiative/wg-otto/blob/master/context/openid-context.jsonld

## Requirement Class --> Schema Class

Brought back the Schema class, as "required" is really just
a property of it.

## Use of sameAs to relate similar schema

Two different extensions may have a similar schema. For example,
`given_name` in OpenID Connect and `givenName` in LDAP inetOrgPerson.
The sameAs property provides a convenient way to provide this link.

## Definition of enum values for schema:Category

This solution for Enumeration was borrowed from schema.org's definition of
[DayOfWeek](https://schema.org/DayOfWeek) See example enum member [Friday](https://schema.org/Friday)

The category property is defined generically:

```
{
  "@id": "schema:category",
  "@type": "rdf:Property",
  "domainIncludes":[
    {
      "@id": "otto:Entity"
    },
    {
      "@id": "otto:Schema"
    }
  ],
  "rangeIncludes":{
      "@id": "otto:Category"
    }
}

```
Category is an Enumeration, with two types of more
specific categories:

```
{
  "@id": "otto:Category",
  "@type": "rdfs:Class",
  "rdfs:subClassOf": {
    "@id": "schema:Enumeration"
  }
}
{
  "@id": "otto:SchemaCategory",
  "@type": "rdfs:Class",
  "rdfs:subClassOf": {
    "@id": "otto:Category"
  }
},
{
  "@id": "otto:EntityCategory",
  "@type": "rdfs:Class",
  "rdfs:subClassOf": {
    "@id": "otto:Category"
  }
}

```

In Openid context:

```
{
  "@id": "openid:UserClaim",
  "@type": "otto:SchemaCategory",
},
{
  "@id": "openid:Acr",
  "@type": "otto:SchemaCategory",
},
{
  "@id": "openid:Scope",
  "@type": "otto:SchemaCategory",
}
```

So a sample schema for `given_name` might look something like this

{
  "@id": "https://erasmus.gluu.org/schema/9f90"
  "name": "given_name",
  "additionalType": "http://schema.org/Text",
  "category": "https://docs.kantarainitiative.org/otto/openid-vocab-1.0#UserClaim",
  "description": "Person's first name",
  "required": false,
  "associatedScope": ["profile", "name"],
  "oid": "2.5.4.42",
  "supportedBy": "https://erasmus.gluu.org/federation/c0aa"
  "url": "https://en.wikipedia.org/wiki/Given_name",
  "sameAs": ["https://schema.org/givenName",
              "https://erasmus.gluu.org/schema/457c"
            ]
}

## Next Meeting 5/10 12pm US Eastern Time

*** NOTE: No meeting 5/3 because of IIW! ***

1.  Please join my meeting.
https://global.gotomeeting.com/join/162399285

2.  Use your microphone and speakers (VoIP) - a headset is recommended.  Or, call in using your telephone.

United States: +1 (669) 224-3319
Australia: +61 2 8355 1034
Austria: +43 7 2088 0716
Belgium: +32 28 93 7002
Canada: +1 (647) 497-9372
Denmark: +45 69 91 84 58
Finland: +358 923 17 0556
France: +33 170 950 590
Germany: +49 692 5736 7206
Ireland: +353 19 030 053
Italy: +39 0 699 26 68 65
Netherlands: +31 208 080 759
New Zealand: +64 9 974 9579
Norway: +47 21 04 30 59
Spain: +34 931 76 1534
Sweden: +46 852 500 691
Switzerland: +41 435 0026 89
United Kingdom: +44 20 3713 5011

Access Code: 162-399-285
Meeting ID: 162-399-285
