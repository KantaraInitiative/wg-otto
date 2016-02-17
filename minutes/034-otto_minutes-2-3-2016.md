OTTO WG Minutes 2/3/16
STATUS: Final

## Voting Members Attending:
 - Mike Schwartz
 - Judith Bush
 - Janusz Ulanowski
 - Keith Hazelton

## Non-voting members
 - Yuriy Zabrovarnyy

## Discussion of Re-Charter

Discussion of charter located:
[github](https://github.com/KantaraInitiative/wg-otto/blob/master/kantara/charter.md)

## Discussion of Draft Initial Design

[Draft OTTO Design](http://ox.gluu.org/doku.php?id=otto:proposal)

Yuriy spent some time working on the above Wiki page to proposes a design. 

He suggested three endpoints:
  1. /federations endpoint returns a list of the federations 
  2. /federations/<id> returns information about a specific federation, such as the services and organizations
  that comprise it.
  3. /federation_entity endpoint returns information about a service (IDP, OP, RP, etc)
  
Each of these endpoints return JSON-LD, where the @context provides a link which describes the schema for the 
returned object.

The design would support linking
  1. A federation could link to a local entity, a remote entity or a remote or local federation
  2. Entities could link to organizations

Janusz mentioned that this design was compatible with his a 
[relation model](https://github.com/KantaraInitiative/wg-otto/blob/master/files/janusz_proposed_schema.pdf)
he had previously proposed. 

A conversation arouse as to whether the entity should also link back to the federation. Mike raised the issues 
that this could result in referential integrity issues. However, its not really a problem, because the federation
is authoritative for membership. 

We had a conversation as to whether the federation should link to organizations, which should link to services.
The net result was that the federation could list both services and organizations. 

The work in front of us is to flush out the schema. Another important issue that needs to be raised is how to sign 
the graph, and perhaps also how to hash the metadata for an entity if its stored elsewhere.

## Next Meeting - Weds 2/10/2016 8am PT
## Next Meeting - Weds 2/10/2016 8am PT

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

