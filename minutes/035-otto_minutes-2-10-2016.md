OTTO WG Minutes 2/10/16
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Judith Bush
 - Keith Hazelton
 - Rainer Hörbe
 - Yuriy Zabrovarnyy

## Discussion of Draft Initial Design

Janusz created two diagrams and posted a 
[message](http://kantarainitiative.org/pipermail/wg-otto/2016-February/000191.html) raising some 
questions about the issues that are raised by interfederation trust: 
[diagram1]
(https://raw.githubusercontent.com/KantaraInitiative/wg-otto/master/files/janusz_intefederation-diagram-question1.png_

[diagram2]
(https://raw.githubusercontent.com/KantaraInitiative/wg-otto/master/files/janusz_intefederation-diagram-question2.png)

For example, how could software figure out which entities to trust based on a complex federation mesh! 

Rainer: calculating trust based on distance vectors is a very particular method that does not reflect risk factors
in most federations. The long-running discussion around LoA and vectors of trust has show clearly that there are many
factors on legal, organizational, techical levels that are hard to reduce properly onto a single scale. It can work
reasonably well within a specific federation, but it does not scale to interfederation, cross-border etc. Therefore
risk calculations (like an LoA) need to be deferred to the point in time when a federation generates its metadata from 
the general layer (the shared ledger), using their local rule set. This allows federations to come to different conclusions whether to 
include an entity, or rate its eligibility for attribute release, or assertion levels based on the same data.

While this issue needs more discussion, our effort is to provide the tools for federation, not the rules.
Each federation could have its own requirements for membership, and in many cases, where agreement exists
about the level of assurance, protection or control of data, it would not be complete. Perhaps the OTTO WG
could provide schema to help federation operators express the areas where interoperability exists. Or OTTO
could at least a pattern which could be followed to express certain business relationships which could be
provide software tools with a path towards automation. We should re-raise this issue next week when Janusz is available.

Reviewed the wiki OTTO Design: [http://www.gluu.co/otto-proposal](http://www.gluu.co/otto-proposal)

Discussion continued on REST endpoints to enable entities to join a federation. YuriyZ explained that the path 
he envisioned was that a service (for example an OpenID Connect Provider) would register with a federation operator, 
and obtain an identifier, by calling POST [/federation_entity]
(https://ox.gluu.org/doku.php?id=otto:proposal#federation_entity) The entity would then use this identifier to register 
with individual federations, using POST [/federations/<federation_id>]
(https://ox.gluu.org/doku.php?id=otto:proposal#join_federation_post) Does this approach make sense? Is the entity
registration just the equivalent of the entity's metadata, and perhaps the entity should just host this information
on an endpoint such as `https://<entity_hostname>/.well-known/otto-configuration` ? 

Mike also raised the issue of whether these endpoint should be protected? For example, how would a client
be authorized to unjoin a federation? Rainer suggested that this should be accomplished using a blockchain 
signature verification mechanism. Mike wondered if this should be accomplished by requiring an UMA RPT token. 
The conclusion was that perhaps, like SCIM, the security mechanism to protect the endpoints should be left 
up to the federation operator, so left out of scope of OTTO.

Another possibility is that we could use software statements (or something equivalent) to allow an entity
to join a federation.


## Next Meeting - Weds 2/17/2016 8am PT

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

