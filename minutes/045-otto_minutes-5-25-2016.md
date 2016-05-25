OTTO WG Minutes 5/25/16
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Janusz Ulanowski


## Name Change / Charter

Next week, I'd like to vote on the name change to "Open Trust Taxonomy for Federation Operators."
If you object, or have a better idea, please post on the list.

Also, we need to update the charter because we've missed the time line, and we have a 
sharper focus now on our deliverables.

## Discussion of EIC

Mike's Prezi is [here](https://prezi.com/vbh50clio1h7/eic-kantara-otto/)

## Discussion of updated proposal

[Current Proposal](https://github.com/KantaraInitiative/wg-otto/blob/master/docs/proposal/proposal.md)

Mike suggested that we continue working on the spec in markdown format because we're pressed for time.
XML format would look more official, but format is secondary to content.

OTTO proposal basically breaks into three parts: 
1. Endpoints for the Registration Authority
2. Linked Data Model
3. How to sign the data model

One change Mike incorporated was moving to "endpoints" which would be defined in `.well-known/otto-configuration`
to give implementors more flexibility where they provide the services.

Mike also introduced a `filter` parameter to the federations endpoint. It would be nice if you could make
_ad hoc_ queries against the graph. Is there a linked data filter format we can adopt? Need to research this. 

Also up for discussion is the meaning if you link one federation to another. Perhaps from a signing perspective,
the federation could publish different signatures for portions of the graph. For example, if 
federation 2 is connected to federation 4, one signature could contain just objects connected directly
to federation 2. But another signature could sign federation 2 + federation 4.

Why should mobile applications or other non-web relying party entities should register
in the federation? Mike asserts it doesn't make a difference from a trust perspective if the entity is 
web or mobile. Also without federation metadata about RP entities, how would you discover which applications
were in the federation.

### Multiple Entities 

Long Conversation about whether entities can have multiple services. It raises questions... for example
if an entity is both an OpenID Connect Provider and an UMA Authorization Server, and you have a property
for "discoveryURL", to which discovery URL does it point?

Janusz pointed out that in SAML metadata, an entity can have both a SPSSODescriptor element and an 
IDPSSODescriptor element. In fact, there could be multiple services for the SPSSODescriptor, each with
its own AttributeConsumingService index. 

Wouldn't it be simpler if there was a 1:1 relationship between entity and service? All entities could point 
back to the same organization. SAML metadata could still be rendered properly, in fact the SAML entityID could 
be used as a key to assemble the respective entities. 

### Schema 

Mike suggested the addition of a schema endpoint which could handle user claim schema, software statement 
schema, scope schema, and acr schema in a standard way. 


## Next Meeting - Weds 6/1/2016 9am PT / 5pm GMT

  **NO MEETING 5/11 DUE TO European Identity Conference (EIC)!!!**

Screen Sharing: [https://global.gotomeeting.com/join/162399285](https://global.gotomeeting.com/join/162399285)

 - Audio: Skype: +99051000000481
 - North America Toll: +1 (805) 309-2350
 - Alternate Toll: +1 (714) 551-9842
 - International Toll: http://www.turbobridge.com/international.html

 - Conference ID: 613-2898

    Command Menu: 0 Plays menu of Keypad Commands *3 Promote to Host (if non-host) *5 Raise your hand 
    *6 Mute yourself (toggle on/off) *# Private roll call of participants *\ Mute music-on-hold (toggle on/off)

    TurboPhone (beta): https://www.turbobridge.com/join.html Works with Internet Explorer on Windows only

    SIP Access (using IP phone or soft phone) sip:bridge@turbobridge.com
    SIP URL details: https://www.turbobridge.com/help/Index.html?context=180

