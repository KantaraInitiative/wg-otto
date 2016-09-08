OTTO WG Minutes: 9/7/2016
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Meg Joshi
 - Janusz Ulanowski
 - Judith Bush
 - Peter Davis

## Update on Node OTTO Server Progress

Meg is working on a federation data generator, which
she will check into the otto-wg Github. Gluu will also host this
online. Basically, it will enable the generation of test JSON-LD
organizations, federations, and two entity_types, OpenID Provider
and OpenID Relying Party.

Once this is up, it will be a good opportunity for us to provide more
detail to the OP and RP entities. 

Meg has also been researching persistence strategies for OTTO 
data. One requirement is loose schema checking. Janusz pointed out
that keeping the RDBMS schema in sync has been a challenge for Jagger
software. Mike had been pushing for the same. Three options
were considered: MySQL, LDAP, and MongoDB. The leading contender 
right now is MySQL. 

MySQL 5.7 has new native data type for JSON. See:

https://dev.mysql.com/doc/refman/5.7/en/json.html#json-paths

Yuriy is concerned if the MySQL supports comparison and ordering, for a 
 query such as `$.**.b = 10`

Although not technically a consideration for the spec, an implementation 
would provide evidence that our idea to use JSPath as the query syntax 
is sound.

## Discussion / Work on Schema

We had an abbreviated discussion on schema. This needs more time and
examples.

Peter mentioned that in addition to schema, it would be helpful if 
the federation published the conformance profiles supported / preferred.

Judith provided a concise problem statement for "schemas". We should
work on expanding this. Something like: 

```
Given an RP or IDM implementation, a machine readable source that 
describes the user, client, authentication and other claims (and 
constants) available in  the federation to bootstrap joining the 
federation.

```


## Next Meeting - Weds 9/14/2016 9am PT / 5pm GMT

Mike is arriving back in Austin 90 minutes prior, so it may 
be tight.

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

