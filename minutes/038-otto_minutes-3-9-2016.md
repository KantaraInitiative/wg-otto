OTTO WG Minutes 3/9/16
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Judith Bush
 - Keith Hazelton
 - Yuriy Zabrovarnyy

Minutes from last two weeks were approved.

## Discussion of RSA Conference
  Mike presented at RSA. Slides are [here](http://gluu.co/rsa16-slides-trust-el) 
  Last third was about the need for multi-party federation to enable trust elevation.
  Ran into [Jane Ginn](https://www.linkedin.com/in/janeginn) who participates in the
  [OASIS Cyber Threat Intelligence (CTI) TC]
  (https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=cti)
  She mentioned that JSON-LD was proposed as the data inter-exchange format for this 
  group, but that it was voted down. Subsequently, some of the members of the group
  dropped off. It may be worth contacting some of these members to see if they wanted
  to continue their work as part of OTTO.

## Discussion of CCICADA
  Project to enable emergency responder credentials to be verified. 
  [CCICADA Website](http://kantarainitiative.org/confluence/display/ccicada/Home)
  There may be a funding opportunity for us. Mike is going to work on a white paper,
  proposing a solution that would require OTTO. 

## Discussion of Schema

An OTTO federation entity base type would be [Thing](https://schema.org/Thing) and then the 
OTTO WG would define additionalType for different entity types. For example,
an additionalType could be "OpenID Provider". 

A helpful example of Additional Type can be found [here]((https://schema.org/additionalType)
--see the JSON-LD example at the bottom  of the linked page.
 
### First attempt at OpenID Provider

This is the JSON-LD that would be published by the federation:

    <script type="application/ld+json">
    {
      "@context":  "http://schema.org/",
      "@id": "#federation-issued-openid-provider-identifier",
      "@type": "Thing",
      "additionalType": "http://kantarainitiative.org/otto/OpenID_Provider",
      "discoveryURL": "https://idp.example.com/.well-known/openid-configuration",
      "discoveryJSONHash": "2fd4e1c67a2d28fced849ee1bb76e7391b93eb12",
      "jwksJSONHash": "de9f2c7fd25e1b3afad3e85a0bd17d9b100db4b3"
      "providedBy": {
           "@id": "federation-issued-organization-identifier",
      }
    }
    
We would need to define a definition page similar to https://schema.org/Thing for 
OpenID_Provider.

provided by could contain a json sub-element that provides a link to the organization + the 
minimal other information that would be convenient to have repeated in the federation metadata. 

We need to work on this more! Please give it some thought this week. We can also start
to think about the Organization entity, which is referenced by the OpenID Provider.

Also, Judith is going to ask her contact about ideas for values for @id.

## Next Meeting - Weds 3/16/2016 8am PT

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

