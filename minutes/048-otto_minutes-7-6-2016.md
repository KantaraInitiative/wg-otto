OTTO WG Minutes 7/6/2016
STATUS: Approved

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Keith Hazelton
 - Judith Bush
 - Meghna Joshi

## Discucssion of Use Cases

Keith did some [organizational work]
(https://github.com/KantaraInitiative/wg-otto/blob/98bf0966b218af5acf6f9a9051a11b1bab6c6978/docs/use-cases/use-cases.md)
on the use cases section of the documentation.

"OTTO use cases illustrate the need for trustworthy technical, organizational and legal information in multi-party 
federations. While geared towards OAuth2, the architecture should be useable for other technologies such as SAML, PKIX 
and trust status lists as well."

Some discussion on wether the schema section shouldn't be expanded to cover user claims schema, 
client metadata schema, software statements schema, acr and amr values, and trustmarks. 

It would make sense if this page were the "README.md" for the use-cases folder.

## Discussion of Search Syntax

Yuriy did some research on different options for searching JSON. I'm including the messsage
here in the minutes

```
---------- Forwarded message ----------
From: "Yuriy Zabrovarnyy" <yzabrovarniy@gmail.com>
Date: Jul 5, 2016 12:15 PM
Subject: query federations filter
To: <wg-otto@kantarainitiative.org>
Cc: 

Hi OTTO Gurus,

I've analyzed different json query languages and for me most intuitive for injecting into URL as parameter is JSPath:
https://github.com/dfilatov/jspath

Please check details of analyzed query languages below. Your feedback is welcome.

(1) CQL https://www.loc.gov/standards/sru/cql 
Feedback: CQL describes general approach, it needs formalization how to apply CQL to JSON.

(2) JSON Query Language http://jsoniq.org/ 
Feedback: Very powerful but not intuitive for injecting as URL parameter

Example of jsoniq query:
    for $x in collection("captains")
    group by $century := $x.century
    where count($x) gt 1
    return { "century" : $century, "count" : count($x) }

(3) SCIM Query Syntax https://tools.ietf.org/html/rfc7644#section-3.4.2 

Feedback: SCIM Specific which is oriented more to flat structures while we need more hierarchy-oriented filter

(4) Linked Data Query Syntax http://www.linkeddatatools.com/querying-semantic-data

Feedback: SQL for semantic data. Not intuitive for injecting as URL parameter

(5) jaql https://code.google.com/archive/p/jaql/

Feedback: same as jsoniq

(6) JsonPath : http://goessner.net/articles/JsonPath/

Feedback: Nice, it can be used.

Example: $.array[?(@.key=2)].dictionary.b

(7) JSPath: https://github.com/dfilatov/jspath

Feedback: Nice, it can be used.

Example: .array{.key === 2}.dictionary.a

Tool for playing with different json query stuff:
http://www.jsonquerytool.com/

Sample json:

{
    "key" : "value",
    "array" : [
        { "key" : 1 },
        { "key" : 2, "dictionary": {
                "a": "Apple",
                "b": "Butterfly",
                "c": "Cat",
                "d": "Dog"
            } },
        { "key" : 3 }
    ]
}

JsonPath: $.array[?(@.key=2)].dictionary.b
JSPath: .array{.key === 2}.dictionary.a

Result: [
    "Butterfly"
]

Thanks,
Yuriy Zabrovarnyy

```

The discussion ensued. JSPath does seem to be the most succinct. JSONiq also looked
expressive. Is there a performance advantage? For example, does JSONiq require that
the whole document is loaded in memory? Is it a SAX v. DOM type decision also?

## AI's for next week

- Yuriy to flush out [/schema POST endpoint](https://github.com/KantaraInitiative/wg-otto/blob/master/docs/proposal/proposal.md#create-post-2)
  Specifically: what other properties can be standardized for certain types of objects like
  user claims schema, client claims schema, Software Statements (token that allows OAuth2
  dynamic client registration), and trust marks (JSON document describing policies and procedures of OP)
- Meg to test node JSON-LD signing software 
- Kieth to continue to expand the outline of use cases

## Next Meeting - Weds 7/13/2016 9am PT / 5pm GMT

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

