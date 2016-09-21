OTTO WG Minutes: 9/21/2016
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Meg Joshi
 - Keith Hazelton
 - Janusz Ulanowski
 - Peter Davis

## Discussion of Federation Entity Data Structure


Option 1: Include links to services

```
{
    "@id": "https://ra.org/federation_entity/{eid}",
    "@context": "https://kantarainitiative.org/otto/schema/idp.json",
    "name": "Acme IDP",
    "role": "Identity Provider"
    "id": "https://ce-dev.gluu.org/oauth_op",
    "organization": "https://ra.org/organization/4753a206-b52c-4aca-b3b4-09c8a9de8830",
    "services": [http://ra.org/entity/90e4fb41-8916-4fa6-a306-30e1b904d582",
                 "http://ra.org/entity/9c2bbdaf-00ec-42f0-adf0-4d6bb785f356"
                 ]
}
```

Option 2: Include whole entries in services, keys are ids
```
{
    "@id": "https://ra.org/federation_entity/{eid}",
    "@context": "https://kantarainitiative.org/otto/schema/idp.json",
    "name": "Acme IDP",
    "role": "Identity Provider"
    "id": "https://ce-dev.gluu.org/oauth_op",
    "organization": "https://ra.org/organization/4753a206-b52c-4aca-b3b4-09c8a9de8830",
    "services": {"http://ra.org/entity/90e4fb41-8916-4fa6-a306-30e1b904d582" : {object},
                 "http://ra.org/entity/9c2bbdaf-00ec-42f0-adf0-4d6bb785f356" : {object}
                 }
    
}
```

Option 3: Include whole entries in services, service types are ids

```
{
    "@id": "https://ra.org/federation_entity/{eid}",
    "@context": "https://kantarainitiative.org/otto/schema/idp.json",
    "name": "Acme IDP",
    "role": "Identity Provider"
    "id": "https://ce-dev.gluu.org/oauth_op",
    "organization": "https://ra.org/organization/4753a206-b52c-4aca-b3b4-09c8a9de8830",
    "services": {"saml_idp" : {object},
                 "openid_connect_op" : {object}
                 }
}
```

Option 4: Add top level claim for service_types
```
{
    "@id": "https://ra.org/federation_entity/{eid}",
    "@context": "https://kantarainitiative.org/otto/schema/idp.json",
    "name": "Acme IDP",
    "role": "Identity Provider"
    "service_types" : ["SAML IDP", "OpenID Connect OP"]
    "id": "https://ce-dev.gluu.org/oauth_op",
    "organization": "https://ra.org/organization/4753a206-b52c-4aca-b3b4-09c8a9de8830",
    "services": {"saml_idp" : {object},
                 "openid_connect_op" : {object}
                 }
}
```

Option 5: Minimalistic: service types are in services object
```
{
    "@id": "https://ra.org/federation_entity/{eid}",
    "@context": "https://kantarainitiative.org/otto/schema/idp.json",
    "name": "Acme IDP",
    "id": "https://ce-dev.gluu.org/oauth_op",
    "organization": "https://ra.org/organization/4753a206-b52c-4aca-b3b4-09c8a9de8830",
    "services": [{object}, {object}]
}
```

## Discussion on OTTO schema for a SAML Entity

First draft on representing a SAML entity in JSON-LD

```
{
    "@id": "https://ra.org/federation_entity/{eid}",
    "@context": "https://kantarainitiative.org/otto/schema/saml_idp.json",
    "name": "",  <-- Display Name of the Entity ID
    "entity_asserted_metadata": "",  <--XML file with metadata for this entity
    "federation_asserted_metadata": "",  <--XML file with metadata for this entity
    "entityid": "",
    "supported_roles": "",   <-- For example IDPSSODescriptor
    "parent_entity": "https://ra.org/federation_entity/{eid}"
    "federation_claims": "https://ra.org/federation_entity/{eid}"  <--when rendered in XML, you wouldn't
                                                                      be able to tell.
}
```

## Next Meeting - Weds 10/5/2016 9am PT / 5pm GMT

!!! Warning
    No meeting next week due to Mike's Europe travel

1.  Please join my meeting.
https://global.gotomeeting.com/join/162399285

2.  Use your microphone and speakers (VoIP) - a headset is recommended.  
Or, call in using your telephone.

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

