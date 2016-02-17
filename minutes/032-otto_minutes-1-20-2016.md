OTTO WG Minutes 1/20/16
STATUS: Final

## Voting Members Attending:
 - Mike Schwartz
 - Keith Hazelton
 - Judith Bush
 - Rainer Hoerbe
 - Janusz Ulanowski

## Non-voting members
 - Yuriy Zabrovarnyy

## Discussion of Re-Charter

Charter is located in 
[github](https://github.com/KantaraInitiative/wg-otto/blob/master/kantara/charter.md)

## Discussion of Schema

[diagram]:(https://raw.githubusercontent.com/KantaraInitiative/wg-otto/master/files/OTTOschemaNoodling_002.png)

For FederatedService, the sameAs can be used to define the federated service. It should point to the canonical
location for the information. For example, for OpenID Connect, perhaps the sameAs attribute should point
to the OP Discovery URL. For an OpenID Connect RP, there is no metadata, so the sameAs would be empty.

additionalType points to what defines this federated service, for example the schema. It can be either a link or it 
could contain the data describing the service.

Mike raised an issue about how to identify OAuth2 clients. The client id is different for each AS. OAuth2
clients have no metadata url. And the redirect uri may be multivalue, and may change. Possible solutions
include the federation operator issuing an identifier to the client, or perhaps defining an OAuth2 client
discovery endpoint and schema. As Yuriy pointed out, the federation would define what fields are mandatory.

## Other notes:

Judith raised the issue that using schema.org schema for federation metadata might make it easier
for web crawlers to discover the information.

Janusz mentioned Hydra as an example of JSON-LD
  http://www.markus-lanthaler.com/hydra

## Next Meeting - Weds 1/27/2016 8am PT

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

