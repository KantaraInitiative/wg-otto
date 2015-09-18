OTTO WG Minutes 9/9/15
STATUS: Approved

## Voting Members Attending:
 - Michael Schwartz
 - Janusz Ulanowki
 - Judith Bush
 - Keith Hazelton

## Non-voting members
 - Roland Hedberg
 - Sal D'Agostino

## Topics discussed

### Voting is open for 9/2015 - 9/2016
 - co-chair : Michael Schwartz
 - co-chair : Janusz Ulanowski
 - editor: Judith Bush
 - Liaison Coordinator: Keith Hazelton

### Nominations are still open for
 - Crypto Guru:
 - Project Manager:

### Discussion of Scope

Mike proposed that the WG review the current outstanding ideas and start to finalize the scope for
the first deliverable. We have consensus on four items:

1. Federation Publication Mechanism
-----------------------------------

Mike posed the question: "Do we throw out central publication of a big signed file of metadata?"
Roland made the point that this publication mechanism has been shown not to scale--when the number of
entities reaches the thousands. Keith and Janusz also spoke in favor of moving away from the publication
of a large metadata file.

Janusz also pointed out that we can use an index or global catalog by entity id
or other federation entity attributes, and create a more efficient federation query function. We could
then ask "who are the members of service."  Roland described a similar idea, calling the capability
a discovery service of the federation.

The alternative to central publication of a large signed metadata file, as initially suggested by Rainer,
is to go to a blockchain publication mechanism. Mike asked if anyone one in the WG wanted to
speak in favor of keeping this large signed metadata distribution strategy. No one did, so the decision
to move to a blockchain is unanimous.

2. Software Statement Profile
-----------------------------

RFC 7591  OAuth 2.0 Dynamic Client Registration Protocol defines a "Software Statement" in section 2.3
https://tools.ietf.org/html/rfc7591#section-2.3
This is a signed JWT that contains claims that enable the client to register with an OpenID Provider.
OTTO could provide guidelines about how the software statement is obtained by the federation, for example
from what endpoint, what claims it contains, and other details important for interoperabilty.

Software Statement could be used to automate the release of information because the RP has
agreed to protect the assertions about the user


3. Membership Statement Profile:
--------------------------------

In previous OTTO WG meetings, we had discussed the idea of "trust marks."  However, this term was
frequently confused with trust marks issued by organizations like Kantara, to convey a certain level
of identity assurance. For this reason, we decided to come up with a new name. Keith suggested
"Membership Cards." Mike suggested "Membership Statement" to maintain a parallel with the "Software
Statement." While the name is still up for discussion, it was agreed that the idea that an entity could
provide such a trust mark indicating membership in a federation, and to provide attributes signed by
the federation, could be useful, and should be in scope.

Membership Statements could be used by the to discover information about the IDP, indicates
membership in a federation, or the LOA (etc) of authentication granted by a federation.

4. Entity Schema
----------------

The data stored in a blockchain would be a JSON object, and we need to define the schema. Keith suggested
we start with SAML federation entity metadata--figure out what we want to keep and remove. Subsequently
we'd need to add other schema to support new OpenID Connect and UMA requirements, like scopes. Also
`acr` and `amr` values, or other details that federations could use to help enable collaboration.

One suggestion previously made, and re-iterated by Judith was that the entities might cross reference one
another--How does one entity trust another entity?

This is the place to start.

### Action Items / Further discussion

 - Mike offered to cleanup some of the github files to kickstart the effort to start drafting our ideas
 in Github, which is more conducive for collaboration.

 - Judith asked about how we can format the docs. Mike suggested leveraging the templates developed in
 the UMA WG which build on the IETF RFC tool. Mike proposed that we work in github which has the
 lowest barrier for people, then move to the wiki (which has the best visibility for the WG), and
 finally move to the IETF XML format.

 - Roland and Keith have rough travel schedules the next few weeks, so we're going to proceed, but
 we may need to get their feedback offline of the meetings.


More notes from the meeting:


-------------------------------------------------------------------------------------

Next week's Meeting Details - Normal Time: Weds 8am Pacific Time

-------------------------------------------------------------------------------------

Screen Sharing: https://global.gotomeeting.com/join/162399285

Audio: Skype: +99051000000481
North America Toll: +1 (805) 309-2350
Alternate Toll: +1 (714) 551-9842
International Toll: http://www.turbobridge.com/international.html

Conference ID: 613-2898

Command Menu: 0 Plays menu of Keypad Commands *3 Promote to Host (if non-host) *5 Raise your hand *6 Mute yourself 
(toggle on/off) *# Private roll call of participants *\ Mute music-on-hold (toggle on/off)

TurboPhone (beta): https://www.turbobridge.com/join.html Works with Internet Explorer on Windows only

SIP Access (using IP phone or soft phone) sip:bridge@turbobridge.com
SIP URL details: https://www.turbobridge.com/help/Index.html?context=180
