OTTO WG Minutes Combined: 8/3/2016 - 8/10/2016
STATUS: Approved

## Voting Members Attending:
 - Mike Schwartz 8/3,8/11
 - Yuriy Zabrovarnyy 8/3,8/11
 - Janusz Ulanowski 8/3
 - Keith Hazelton 8/3
 - Judith Bush, 8/3,8/11

## Approve minutes

On 8/3 minutes 6/1 - 7/27 are approved.

## Update on Node OTTO Server Progress

Swagger UI:
  http://otto-test.gluu.org/swagger/#!/OTTO

### Discovery

```
  http://otto-test.gluu.org/.well-known/otto-configuration
```

Returns:
```
  {
  "issuer":"issuer",
  "federations_endpoint":"http://otto-test.gluu.org/otto/federations",
  "federation_entity_endpoint":"http://otto-test.gluu.org/otto/entity",
  "organizations_endpoint":"http://otto-test.gluu.org/otto/organization",
  "schema_endpoint":"http://otto-test.gluu.org/.well-known/otto-configuration"
  }
```

### Organizations Endpoint

```
http://otto-test.gluu.org/otto/organization
```

Returns:
```
{
  "@context": "https://schema.org/Organization",
  "@type": "Organization",
  "organizations": [
    "http://otto-test.gluu.org/otto/organization/a582ea06-5b03-11e6-87a8-bc764e100e0a",
    "http://otto-test.gluu.org/otto/organization/0e7f5d36-5b14-11e6-87a8-bc764e100e0a",
    "http://otto-test.gluu.org/otto/organization/0b8a2cb4-5e2a-11e6-87a8-bc764e100e0a",
    "http://otto-test.gluu.org/otto/organization/c71fb4da-5e2f-11e6-87a8-bc764e100e0a"
  ]
}

```

```
http://otto-test.gluu.org/otto/organization/a582ea06-5b03-11e6-87a8-bc764e100e0a
```

Returns:

```
{
 "@context":"https://schema.org/",
 "@type":"Organization",
 "@id":"http://otto-test.gluu.org/otto/organization/a582ea06-5b03-11e6-87a8-bc764e100e0a",
 "name":"org1"
}

```



We can use the standard schema.org definition: http://schema.org/Organization
If we want to link back to the federation, we can use memberOf

For memberOf, values expected to be one of these types:
 Organization
 ProgramMembership

Does it have to be one of these, or can it be something else?

Should there be data that helps define what services are available from
this organization, that could point to the entities like OP's, IDPs, RP's
etc.

We considered "offeredBy" http://schema.org/offeredBy but Judith pointed
out that we probably shouldn't shoe-horn into something that doesn't fit.
So perhaps we should extend Organization.

We could add an attribute to Organization from our own namespace.
Using additionalType attribute, we can reference "FederationParticipant"
which could have our "federatedEntities" attribute.
Is this worth doing because the information can be queried from the federation
itself...

## Discussion / Work on Schema

Schema is static information.

{"@id": "2a9f2057-d4fc-48b8-bba2-48af07e0717b",
 "@context": "otto-federation-schema",
 "name": "eduPersonScopedAffiliation",
 "type: "ldap",
 "oid": "1.2.43.324.2.3"
 "description": "blah blah"
 "saml1URI": "https://internet2.edu/epsa"
 }



## Next Meeting - Weds 8/10/2016 9am PT / 5pm GMT

1.  Please join my meeting.
https://global.gotomeeting.com/join/162399285

2.  Use your microphone and speakers (VoIP) - a headset is recommended.  Or, call in using your telephone.

United States: +1 (669) 224-3319
Australia: +61 2 8355 1034
Austria: +43 7 2088 0716
Belgium: +32 (0) 28 93 7002
Canada: +1 (647) 497-9372
Denmark: +45 69 91 84 58
Finland: +358 (0) 923 17 0556
France: +33 (0) 170 950 590
Germany: +49 (0) 692 5736 7206
Ireland: +353 (0) 19 030 053
Italy: +39 0 699 26 68 65
Netherlands: +31 (0) 208 080 759
New Zealand: +64 9 974 9579
Norway: +47 21 04 30 59
Spain: +34 931 76 1534
Sweden: +46 (0) 852 500 691
Switzerland: +41 (0) 435 0026 89
United Kingdom: +44 (0) 20 3713 5011

Access Code: 162-399-285
Audio PIN: Shown after joining the meeting

Meeting ID: 162-399-285
