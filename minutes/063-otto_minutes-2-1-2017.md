OTTO WG Minutes: 2/1/2017
STATUS: Approved

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Meg Joshi

## Discussion schema for Federation

```
Request URL

http://otto-test.gluu.org/otto/federations/5891f22ce599ca75f35e6d92

Response Body
{
  "@context": "http://otto-test.gluu.org/otto/federations/federation.jsonld",
  "@id": "http://otto-test.gluu.org/otto/federations/5891f22ce599ca75f35e6d92",
  "name": "Local Federation",
  "entities": [],
  "organization": {
    "@context": "http://otto-test.gluu.org/otto/federation_entity/organization.jsonld",
    "@id": "http://otto-test.gluu.org/otto/organization/5891f248e599ca75f35e6d96",
    "name": "Local Org"
  }
}
```

1. The organization referenced here should be the owner organization.

2. We need to add a key for "participants" which should be an array
of URI's for each organization. For example:
["http://otto-test.gluu.org/otto/organization/5891f248e599ca75f35e6d96",
"http://otto-test.gluu.org/otto/organization/3438095843095438958439544",
"http://otto-test.gluu.org/otto/organization/86584785743745328483284237"]

3. The organization value should also be an array, not an object.

4. For entities
```
  "entities": [
     {"@id":"http://otto-test.gluu.org/otto/federations/5891f22ce599ca75f35e6d92/12345",
      "type":"openid_provider"
     },
        {...},
        {...}
     ]
```

5. OP schema: (1) signing_jwks from OP must be stored at the federation;
 (2) Metadata Statements; (3) Metadata Statements URI;
 (4) Display Name; (5) Description; (6) Associated Organization

TODO:

1. https://github.com/KantaraInitiative/wg-otto/tree/master/schema
to be used to hold schema. We'll create two files: on .jsonld and one
.md (which will have english explanations of the fields) For next week:
federation, organization, op

2. Update the https://github.com/KantaraInitiative/wg-otto README
