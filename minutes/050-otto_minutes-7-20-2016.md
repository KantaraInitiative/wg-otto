OTTO WG Minutes 7/20/2016
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Janusz Ulanowski
 - Meghna Joshi
 - Keith Hazelton

## Discussion of Search Federations Syntax

 * [Draft proposal](https://github.com/KantaraInitiative/wg-otto/blob/master/docs/proposal/proposal.md)

This is the section we were discussing:

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

The question is... should the response return JSON or links to the entities. 

It would be nice if the request could specify which attributes of the entity it wants back.
Getting back the list of identity uri's is still useful. Maybe if you want to just
count the entities, it could be handy. Mike proposed that the default behavior is 
that if return attributes are not specified, that full entries should be returned.  
Keith mentioned that SCIM has described how to request attributes about a person that might
translate well to our requirement. 

Yuriy offered to update the specification here for next week's meeting.

## JSON-LD / Schema

It would be desirable to use JSON-LD to extend our capabilities, but to not 
discourage developers who just treat the objects like plain JSON. 

Keith mentioned article on best practices for JSON / JSON-LD:
 * http://www.dr-chuck.com/csev-blog/2016/04/ring-fencing-json-ld-and-making-json-ld-parseable-strictly-as-json/
 
Also, there was a response from Manu:
 * http://manu.sporny.org/2016/json-ld-context-caching/
 
After the meeting, Keith followed up with Dr. Chuck:

```
On Jul 21, 2016 9:46 AM, Charles Severance <csev@umich.edu> wrote:
I would love to chat with the group.

I think that the answer is pretty simple and Manu's reply to my post summed it up nicely.  

http://manu.sporny.org/2016/json-ld-context-caching/

I don't feel that context caching solves it - locking down the JSON-LD via JSON Schema is the only option for using JSON-LD for the next 3-5 years.

/Chuck
```
Hopefully everyone will get a chance to review these articles so we can have a follow-up 
conversation next week.
 

## Discussion on Schema endpoint

Yuriy expressed some confusion about last week's discussion on schema. Also, whenever
you are talking about attributes of attributes, it's inherently confusing because it
feels dangerously circular--we don't want to re-invent JSON-LD.

Mike's idea is that we work backwards from a few common schema requirements. For example,
we know we need OTTO to define user attribute schema (i.e. inetOrgPerson), authentication 
schema (i.e. acr, amr values and their meanings), OAuth2 software statements,
and JSON trustmarks. 

Just as an example, here is a sample software statement

```
{"redirect_uris": ["https://example.com/rp/cb"],
 "signing_key": "kfdshkjsahfkjdsalkhfdsa"
 "type": "partner"
}

```

So how would you POST to the /schema endpoint to define the schema 
for such a thing? Do we need to create schema for each sub-element, 
for example a dictionary withing the value? What if the sub-element 
contains a sub-element? How do we accomplish this in a JSON-LD compatible
way? 

Maybe something like this? 

```
POST /schema

{
   "name":"MyFederation-Software-Statement",
   "major_version":"1",
   "minor_version":"0"
   "attributes": ["https://kantaraniitiative.org/schema/otto/redirect_uris", 
                  "https://kantaraniitiative.org/schema/otto/signing_key", 
                  "https://kantaraniitiative.org/schema/otto/type"]   
}

```

## Next Meeting - Weds 7/27/2016 9am PT / 5pm GMT

  ** Note New Audio Details ! ! ! ** 

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

