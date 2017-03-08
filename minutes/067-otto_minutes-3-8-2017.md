OTTO WG Minutes: 3/8/2017
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Janusz Ulanowski
 - Yuriy Zabrovarnyy
 - Meg Joshi
 
## Working on schema for Participant

https://github.com/KantaraInitiative/wg-otto/blob/master/schema/otto/Participant.md
https://github.com/KantaraInitiative/wg-otto/blob/master/schema/otto/Participant.jsonld
  
There was a discussion of Participant schema. It started when we 
looked at the "federations" property, and wondered if there should 
be a list of federations. If this were the case, then 
"particpantID" is wrong. 

The problem is that Participant seems to imply a binding between
an organization and a federation. But in the flow, an organization
registers with the Registration Authority, and then joins federations.
So is "Participant" the right on registration with the RA? 

The way the API's work, the organization get's one identifier from the
RA. And this identifier is associated with federations.

On Janusz's suggestion, we had a short discussion about the 
[Protege ontology editor](http://protege.stanford.edu/)
to see if it can help expedite schema development.

We're going to keep working on the schema... it's really slow going.