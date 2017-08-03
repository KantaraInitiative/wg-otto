OTTO WG Minutes: 5/31/2017
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Meg Joshi
 - Judith Bush
 - Keith Hazelton

## Notes on review of API spec

1. For the Federations endpoint: Remove `@context` from response to because the
result in not really JSON-LD. We can't really think of a use case for this API,
but it enables us to maintain some consistency with regard to how your browser
the data.

2. Add text to the API definitions that includes the list of parameters
and a note that the examples are non-normative.

3. Add section called "Search Syntax" in the Introduction section that has
subsections for `depth` and `filter` to explain these concepts and give
examples.

4. Add a filter example to /federations that shows how to return just the
RP entities of the federations.
`/otto/federations/58f7200bcf5e0a0f09cf2c3c?depth=entities?filter=.entities{.category===RP}`

5. Added EntityCategories for "OP", "RP" to OpenID Vocab

6. We need a stable url to publish the context for the OTTO vocab. openbadges
and others are using this service hosted by the W3C community group:
https://w3id.org  What should we do? Mike to pester Colin again on this topic.

7. In error message, change key to `error` from `Error(s)`

8. Still need to update pagination per comments from last week

9. Need to add PATCH syntax. See SCIM 2.0 for a good example of how to
handle add, edit, delete of specific values in a Class. See Discussion
from last weeks minutes.

## Next Meeting 6/10 12pm US Eastern Time

*** NOTE: No meeting 6/3 because of Mike's Travel ***

1.  Please join my meeting.
https://global.gotomeeting.com/join/162399285

2.  Use your microphone and speakers (VoIP) - a headset is recommended.  Or,
call in using your telephone.

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
