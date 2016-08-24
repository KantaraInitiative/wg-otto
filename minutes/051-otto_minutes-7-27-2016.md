OTTO WG Minutes 7/27/2016
STATUS: Approved

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Keith Hazelton
 - Judith Bush

## Brief discussion of OIDC federation draft

OpenID Working group has added Roland's federation proposal as a draft:
  http://openid.net/specs/openid-connect-federation-1_0.html

It would be an interesting use case to model using OTTO. It proposes adding
additional OpenID Provider and Client keys and metadata to facilitate 
dynamic client registration and other use cases. 

Comments need to be directed to the OpenID Connect mailing list.

## Search Federations to return entries

https://github.com/KantaraInitiative/wg-otto#search-federations-get

The federation endpoint was updated to return not just the URI
of matching entities but the whole entities themselves. For example

Request:

```
GET https://ra.org/federations/904cb092-c5a6-11e5-9912-ba0be0483c18 HTTP/1.1
```

Response:

```
{
  "@context": "https://ra.org/schema/otto/federation.jsonld",                      <- context of federation
  "name": "OAuth 2 Federation",                                                    <- name of federation
  "entities":[
            {                                                                      <- reference to entity
                        "@context": "https://ra.org/schema/otto/entity/connect_rp.jsonld",
                        "uri": "https://ra.org/federations/664cb092-c5a6-11e5-9912-ba0be0483c18",
                        "name": "Gluu Server Ce-dev Client",
                        "id":"https://ce-dev.gluu.org/rp",          <- in RP context it is redirect_uri
                        "organization":"https://gluu.org/otto/organization"
            },
            {
                         "@context": "https://ra.org/schema/otto/entity/connect_op.jsonld",
                         "uri": "https://ra.org/federations/554cb092-c5a6-11e5-9912-ba0be0483c18",
                         "name": "Gluu Server Ce-dev",
                         "id":"https://ce-dev.gluu.org"           <- in OP context it is URI
                         "organization":"https://gluu.org/otto/organization"
            },
            {
                         "@context": "https://ra.org/schema/otto/entity/uma_rs.jsonld",
                         "uri": "https://ra.org/federations/904cb092-c5a6-11e5-9912-ba0be0483c18",
                         "name": "Gluu Resource Server",
                         "id":"https://ce-dev.gluu.org/rs",          <- in RS context it is URI
                         "organization":"https://gluu.org/otto/organization"
            }
  ]
  "federations":[                                                                  <- reference to federation
                         "https://ra.org/federations/904cb092-c5a6-11e5-9912-ba0be0483c18"
           ],
  "organization": {
                    "@context": "https://ra.org/schema/otto/organization.jsonld",   <- organization
                     "name":"MyOrganization",
                     <other properties here>
                  }
}

```

## Use of depth parameter 

Originally, depth was added to indicate the numbers of federations 
deep to search (to account for inter-federation). However, Judith questioned
if the organization entry referenced in the example above should return
the reference or the entire object.

Yuriy suggested a possible solution is to change the use of the depth paratmeter
to enable it to specify which references should be followed. He suggested
that the level should always be one on the server side--as futher requests 
could always be made by a client to fully resolve a graph with that is more 
than one level deep. Mike mentioned that there is a similarity with LDAP
referrals, and most LDAP servers don't chase referrals more than one level 
deep.

```
&depth=entities&depth=entities.organization
```

## Search filter examples

The new appendix adds search filter examples. Search filters should probably be
broken out in a new section. Judith asked how to query for a specific values, and 
that these be added to the documentation. Yuriy provided this example:

```
.entity{name='Gluu'}.name
```

Keith also provided example from http://goessner.net/articles/JsonPath
Is this the same as JSPath? 

```
s
XPath JSONPath Result
/store/book/author $.store.book[*].author the authors of all books in the store
//author $..author all authors
/store/* $.store.* all things in store, which are some books and a red bicycle.
/store//price $.store..price the price of everything in the store.
//book[3] $..book[2] the third book
//book[last()] $..book[(@.length-1)]
$..book[-1:] the last book in order.
//book[position()<3] $..book[0,1]
$..book[:2] the first two books
//book[isbn] $..book[?(@.isbn)] filter all books with isbn number
//book[price<10] $..book[?(@.price<10)] filter all books cheapier than 10
//* $..* all Elements in XML document. All members of JSON structure.

```


## Discussion on Schema endpoint

The intended use case is to enable a federation to 
pubish not just the types of data, but the values themselves. For 
example, what attributes comprise eduPerson or inetOrgPerson.

Yuriy posits that the schema endpoint makes him question whether we should
be using JSON-LD at all. And whether schema needs to be validated when
an entry is added. 

Keith mentiond that you can always delay processing until later by just ensuring 
that your client is delivering valid JSON-LD; all you need to do that is apply 
a JSON Schema to the incoming data.

For some reason, discussion of the schema endpoint seems to be confusing 
everyone. Mike proposed perhaps using a different name for the endpoint
for this reason. He will work this week to propose a specific example.

## Next Meeting - Weds 8/3/2016 9am PT / 5pm GMT

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

