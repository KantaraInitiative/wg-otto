OTTO WG Minutes 7/13/2016
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Judith Bush
 - Meghna Joshi

## Discussion of Search Syntax

Need to update Proposal Page with JSPath query syntax information for the federation_entity and federation 
endpoints. 

## Discussion of Schema Version strategy

Discussion on whether version of schema should be in the URL path, or provided as a query parameter.
For example

```
GET https://ra.org/schema/v1.1/organization HTTP/1.1
```

Should maybe be:

```
GET https://ra.org/schema/organization?version=1.1 HTTP/1.1
```

One issue is that different schemas may have different versions. For example, organization might
be 1.2, and OP might be 1.0. Although it may be useful to group a number of different schema
entities under one bundle.

Mike likes option 2 because its shorter--you get back the current version, and only if you
specify, you can get old versions.

## Discussion of Create Schema

Just for an example, we're going to look at how we would use our schema approach to define 
`eduPerson` a nice summary of which can be found [here]
(https://www.incommon.org/federation/attributesummary.html)

Just as an example, let's take `givenName` and `sn`, which has the following metadata:

 - Friendly Name: sn
 - SAML1 URI: urn:mace:dir:attribute-def:sn 
 - SAML2 URI: urn:oid:2.5.4.4
 - Data Type: String
 - Multivalue: Yes
 - Description: "Multiple string values containing components of the users's "family" name or surname."
 - SCIM attribute: Yes
 - Nice Name: Family Name

 - Friendly Name: givenName
 - SAML1 URI: urn:mace:dir:attribute-def:givenName
 - SAML2 URI: urn:oid:2.5.4.42
 - Data Type: String
 - Multivalue: Yes
 - Description: Multiple string values containing the part of the user's name that is not their surname or middle name.
 - SCIM attribute: Yes
 - Nice Name: First Name

So let's say we want to define this schema called, `eduPerson`... how do we do it?

We currently have this:

```
POST /schema
{
   "name":"myentity",
   "major_version":"1",
   "minor_version":"2"
   <other properties here>
}
```

Is that missing a type? How do we specify that this is a user schema? Maybe we should have something 
like this:

```
POST /schema
{
   "name":"eduPerson",
   "major_version":"1",
   "minor_version":"0",
   "type": "user claims",
   <other properties here>
}
```

For example, type could be: 

1. user claims
2. authentication
3. oauth2 scopes
4. client metadata
5. oauth2 software statements
6. trustmarks

The above are collections of distinct schema objects, each of whic have their own metadata
(for example, like metadata about `sn` or `givenName` above.)

Another example to consider, are software statements. Consider this sample from Roland's 
OpenID federation draft:

```
{"contacts": ["dev_admin@example.com"],
 "policy_uri": "https://example.com/policy.html",
 "tos_uri": "https://example.com/tos.html",
 "logo_uri": "https://example.com/logo.jpg",
 "signing_key": "dsflkjhalkfhdkads"
}
```

In this case, the software statement might have some standard keys, and some optional
keys that are specific to a federation.

Should OTTO reserve certain keys, for example if they are profiled in a specific protocol... ? 

## Next Meeting - Weds 7/20/2016 9am PT / 5pm GMT

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

