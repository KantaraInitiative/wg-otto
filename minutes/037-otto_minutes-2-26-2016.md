OTTO WG Minutes 2/26/16
STATUS: Final

## Voting Members Attending:
 - Mike Schwartz
 - Judith Bush
 - Yuriy Zabrovarnyy

## Non-Voting Members Attending:
 - Nick Roy
 
## Discussion of "member" 

Current proposal is for "member" to point to an entity or another federation; entityDescriptor  
and entityID are used in SAML. The idea is to switch to "entity" instead of "member".

    {
      "@context": "https://fs.com/schema/otto/federation.jsonld",                      <- context of federation
      "name": "OAuth 2 Federation",                                                    <- name of federation
      "member":"https://fs.com/federation_entity/194d8ab2-c5a7-11e5-9912-ba0be0483c18",<- reference to entity
      "member":"https://fs.com/federations/904cb092-c5a6-11e5-9912-ba0be0483c18",      <- reference to federation
      "member":"https://fs.com/federation_entity/394d8fbc-c5a7-11e5-9912-ba0be0483c18",
      "member":"https://fed1.com/federation_entity/494d8fbc-c5a7-11e5-9912-ba0be0483c18",
      "member":"https://fed2.com/federation_entity/594d8fbc-c5a7-11e5-9912-ba0be0483c18" 
      "organization": "https://gluu.org/otto/organization"
    }

## Discussion on entity types

Administration Authority [AA]: creates multiple federation. But who can create a federation, or 
what is the workflow for creating? Perhaps an AA could issue a software statement to the Federation Operator 
to enable the creation of a federation. However, how a person is authorized to request this software
statement and what is the workflow for approval is out of scope. 

Federation Operator [FO]: Can be different than the AA. The organization that defines the rules
of the federation and manages the approval of participants.

Federation : use additionalType to specify other schema we need for other custom schema.

Participant : A member of a specific federation.

Entity : https://schema.org/Thing  Use additionalType to define custom attributes. 

InCommon is creating a "steward" model where they would help host federation.

[Rebecka Gulliksson's idea on federation](https://gist.github.com/rebeckag/f0de040f2cf26b8f2705)
Possible OTTO participant?

## Next Meeting - Weds 3/9/2016 8am PT

NO MEETING 3/2 DUE TO RSA CONFERENCE!

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

