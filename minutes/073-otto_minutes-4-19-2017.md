OTTO WG Minutes: 4/19/2017
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Meg Joshi
 - Judith Bush

## Recent doc changes

Links:
 - http://gluu.co/otto-api
 - http://gluu.co/otto-vocab
 - https://github.com/KantaraInitiative/wg-otto/tree/master/context

 ## Discussion on operates versus federates

`operates` could be redudant. It is meant to distinguish the entities that
are provided directly by the federation. If the federation were also a
Participant, then the services it operated would be specified by the
`federates` property. However, it seemed useful to distinguish the
services provided by the federation directly, as opposed to the services
provided by the members of the federation. So we're leaving `operates` for now.

Added properties for the support of Badges and Trustmarks. See the Federation
and Participant classes in the latest vocabulary.

## Discussion on Requirements for Federation

How should the federation specify how it supports schema. We came up with a
new solution that should work for both SAML and OpenID Connect.

In the OTTO schema we defined a class called Requirements and a property
that points at the requirement.

```
{ "@id": "otto:requirement",
  "@type": "rdf:Property",
  "domainIncludes": {
      "@id": "otto:Federation"
    },
  "rangeIncludes":{
      "@id": "trust:Requirement"
    }
}
```

Then in the OpenID schema, we specified that properties that could be
defined as requirements could be a property of the Requirement class.
For example, for the `acr` parameter:

```
{
  "@id": "openid:acr",
  "@type": "rdf:Property",
  "domainIncludes": [
    {
      "@id": "openid:OpenIDProvider"
    },
    {
      "@id": "openid:OpenIDRelyingParty"
    },
    {
      "@id": "otto:Requirement"
    }
  ],
    "rangeIncludes":{
      "@id": "openid:Acr"
    }
}
```

## Discussion on Metadata Statements

The OpenID Connect Federation draft says the following:

```
metadata_statement_uris
    OPTIONAL. JSON object where the names are the federation identifiers and the
    values are URLs pointing to metadata statements connected to each federation.
```

This drove the design of [Metadata Statement] (https://rawgit.com/KantaraInitiative/wg-otto/master/html/otto-openid-1.0.html#metadata-statement)
where the federation and metadataStatements properties are single value, but
the `metadataStatement` property of the Entity can be an array.

Mike raised questions about the `@id` value for MetadataStatements. How would
these be generated? By the RA... but through what process? The other challenge
here is that OP's do not yet support this federation draft, even the Gluu
Server.

## Next Meeting 4/26 12pm US Eastern Time

Same time, same place!

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
