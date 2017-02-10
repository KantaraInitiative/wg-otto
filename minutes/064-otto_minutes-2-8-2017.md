OTTO WG Minutes: 2/8/2017
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Meg Joshi
 - Judith Bush

## Discussion schema 

We downloaded the schema from schema.org to have a working example.
You can do this by selecting JSON-LD format:
 http://schema.org/docs/developers.html
 
We are checking the schema from schema.org into a this project
under [files/schema.jsonld](https://github.com/KantaraInitiative/wg-otto/blob/master/files/schema.jsonld)

As the final OTTO schema, we should created a new file 
`otto_complete_schema.jsonld` which will contain
all the entries. However, for development, we will write schema 
individually.

Looking at the example: http://schema.org/address
is an example of a type of Property object. Note
the use of `domainIncludes` This is a cross
reference to the objects that use this property.

```
{
      "@id": "http://schema.org/address",
      "@type": "rdf:Property",
      "http://schema.org/domainIncludes": [
        {
          "@id": "http://schema.org/Person"
        },... 
        
```

### Obect Hierarchy

After the meeting, judith emailed a follow-up note with an attached
[diagram]
(https://raw.githubusercontent.com/KantaraInitiative/wg-otto/master/files/judith_class_diagram_2_1_17.png)
which I'm including here too:

```
Federation (operator) & Participant (better name welcome) classes as 
extensions of the Organization.schema.org class. Participant.otto.org 
is the legal organization, one that may agree to a federation operator's 
terms. A participant may be a member of many federations; a federation 
may have many participants.

Define Entity class as an extension of the Thing.schema.org class. 
Extend the Entity with the specific metadata needed for each type of 
entity we may need to describe. Participants offer many Entities; each 
Entity is offered by only one Participant. Federations include many 
Entities; each Entity may be included in many Federations.

The schema will have as attributes of each class terms that show the 
relationships: Participants "offersService" which are entities; 
Entities are "offeredBy" Participants. Federations "federatesService" 
which are entitites; Entities are "federatedWith" Federations.

NOTE: this is not yet stating what is required in federation metadata. 
No particular property is required in the Organization.schema.org class. 
To be determined is whether we require that the federation MUST list all 
entities (by reference?) but MAY list all participants, whether we 
require that entity metatdata MUST list the participant or MAY. Etc.
 
The first step, I believe, is determining whether  this is sufficient 
or if we need classes for the registry operator (which registers 
participants, federations, and entities?). I assume we don't need 
another *class* for interfederation, but maybe we do? To represent the 
legal agreements of interfederation groups?
 
```