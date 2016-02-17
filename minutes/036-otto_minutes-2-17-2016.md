OTTO WG Minutes 2/17/16
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Judith Bush
 - Keith Hazelton
 - Yuriy Zabrovarnyy
 - Janusz Ulanowski

## Non-Voting Members Attending:
 - Nick Roy
 
## Minutes Approval

We approved Meeting Minutes from Dec 9 2015 - Feb 10, 2016. 

## Intro from Nick Roy

Nick has been active in EDU federation for a decade. Currently Director of Technology and Strategy, 
InCommon at Internet2. He's going to try to join as his schedule allows.

## Discussion of Draft Initial Design

Since the last meeting, Mike had been wondering about Yuriy's idea [register]
(https://ox.gluu.org/doku.php?id=otto:proposal#create_post1) entities before joining a federation. Such 
a registry service could be independent, or affiliated with the federation server. Would such entity 
information basically be self-asserted, because vetting the information is the job of the federation.

Also, what identifier would be used to identify an entity? In SAML multi-party federation metadata, 
the entityID is self-asserted, and by convention is normally a URI or URN. While the entityID can be 
any string, as long as it is unique in the federation, one of the conventions is to use the IDP's 
metadata url. One could see a similar convention for OpenID Connect Providers,
where the discovery url (https://host/.well-known/openid-configuration) could provide a stable identifier
for the entity. 

However OAuth2 clients (rougly the equivalent of SAML Service Providers) present another challenge: 
clientid's are in the context of a certain domain. Also, a client may have multiple redirect_uri's. 
For example, Mike referenced the definition of 
[sector_identifier_uri](http://openid.net/specs/openid-connect-registration-1_0.html#SectorIdentifierValidation),
which helps an OpenID Provider issue a consistent persistent non-correlatable (pairwise) identifier to 
a client under the same administrative control. What's interesting is that an OpenID Connect may have several 
redirect_uris, and just by glancing at the sample values provided in the OpenID Connect Client Registration spec,
it's unclear if that is one entity or three. A SAML SP may also have several service endpoints, but at least
there is an entityID that enables it to be referencable as a single entity.

Instead of a registry for entity data, perhaps the data should just be self-published, and referencable  
via JSON-LD @id tag. Keith, Judith and Mike liked this idea, but Yuriy still preferred to have the entity 
register. Perhaps there is a middle-ground where the entity registers its self-published metadata.

Another issue raised by Keith was that [Join](https://ox.gluu.org/doku.php?id=otto:proposal#join_federation_post)
federation should be PUT and not POST. POST is non-itempotent, and we wouldn't want any duplicate registrations.
Actually, Join federation is really more like an edit of the federation.

There was brief but inadequate discussion of API security--How to protect the endpoints, or even to allow
a certain entity to Join a federation with the use of OAuth2 software statements. This conversation will have 
to be revisited in future meetings.


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

