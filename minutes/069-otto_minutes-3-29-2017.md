OTTO WG Minutes: 3/29/2017
STATUS: Approved

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Meg Joshi
 - Judith Bush

## Schema

Very long discussion of Open Badges as an example of a recent JSON-LD spec:
  https://www.imsglobal.org/sites/default/files/Badges/OBv2p0/v2/context.json
  https://www.imsglobal.org/sites/default/files/Badges/OBv2p0/index.html

and Manu Sporny's advice:

```
-------- Original Message --------
Subject: Re: JSON-LD question
Date: 2017-03-27 17:02
From: Manu Sporny
To: Mike Schwartz

> I'm working on the JSON-LD context for OTTO.
> What I noticed is that the Open Badges context seems to be much less
> detailed then schema.org. Do you have an opinion if OTTO should strive
> to be more like Schema.org or Open Badges?

A JSON-LD Context document can not only contain the term mappings (the
thing the JSON-LD Processor uses), but it can also contain metadata
about all the Vocabuary (a human-readable description of the terms, how
the terms relate to other super classes, the allowable values of the
terms, etc.). A JSON-LD Processor will throw away all of the Vocabulary
metadata in practice.

So, I suggest you start simple, like what the Open Badges context does,
and then include the Vocabulary metadata, like what schema.org does, if
people start asking for it.

Does that answer your question?

-- manu
```

What's really interesting is that the Badges schema references documents
that are not machine readable, and in the case of XSD, not even JSON-LD.

While we still see utility in specifying super-classes (for example
Organization for Participant, Federation and Registration Authority),
we perhaps don't have to go into such great detail like linking back
which properties are used by which classes. Also, the OpenBadges spec
dispenses with including any type of human readable metadata, like
"comment" or "label". Instead, all human readable descriptions are
included in the specification.

In addition to the content of the json-ld context, the format of the
Badge spec, along with the XML format of UMA resource registration
may provide a stylistic template for the OTTO spec. While Judith pointed
out that the content is more important then the format, Mike posited that
the a more well formatted spec matters. It's hard to circulate and
discuss a draft spec if it's not in the right format.

With regard to the content, we look at Judith's class diagram again.
There is an undisputed list of initial classes:
  - Federation
  - Participant
  - RegistrationAuthority
  - Entity

Additional classes may be necessary, especially where values are complex.
For example, does "Scope" require a class? Or "AuthnContext". It's not
clear yet.

With regard to Trustmarks, perhaps we can just reference the spec
as it exists:
https://github.com/KantaraInitiative/wg-otto/blob/master/files/trustmark-1.1.pdf
This question is also pertinent with regard to SAML and OpenID Connect.
Although even if we reference properties from other specs, we'd still
have to define their presence in OTTO's json context.

## To-do

Judith is going to try to move forward with a draft of the OTTO context.
There is sort of a rush to get to the finish line because of the Kantara
CCICADA pilot, which has a fast approaching first deliverable date.
