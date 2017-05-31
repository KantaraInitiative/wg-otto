OTTO WG Minutes: 5/24/2017
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Meg Joshi
 - Judith Bush
 - Keith Hazelton

Note: no minutes from last week. We just reviewed the draft SAML vocabulary,
changes will be reflected in the next github push.

## Review API doc for Search Federations

 API Spec: http://gluu.co/otto-api

Document needs parameter definitions--move from swagger-ui to XML.

For the filter, the API should return the key in the results for clarity and
to support multiple filters.

Note: Align pagination with SCIM:
  https://tools.ietf.org/html/rfc7644#section-3.4.2.4

Note on the API to "Link entity with federation"

There should at least be a check to make sure that the organization that
operates the entity should be a member of the federation.

We should clarify that a 200 means that the federation has received the
request, not necessarily that the federation has accepted it for publication
(there might be a human or other approval process to vet the entity.)

## Discussion of adding PATCH

SCIM 2.0 defines PATCH:
  https://tools.ietf.org/html/rfc7644#section-3.5.2

Leverages JSON Patch RFC 6902:
  https://tools.ietf.org/html/rfc6902

Currently the API's support PUT. This requires replacement of the entire
object. It's sort of dangerous to do this. It's also prossible that certain
properties might not be writable by the owner. For example, a registration
authority or federation might manage certain propeties for an organization.
This would make it more difficult to delegate permissions to update.




## Next Meeting 5/24 12pm US Eastern Time

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
