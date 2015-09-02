OTTO WG Minutes 9/2/15
STATUS: Draft

## Voting Members Attending:
 - Michael Schwartz
 - Keith Hazelton
 - Janusz Ulanowki

## Non-voting members
 - George Fletcher
 - Roland Hedberg

## Topics discussed

### Role Nominations for 9/2015 - 9/2016

 - co-chair : Michael Schwartz
 - co-chair : Janusz Ulanowski
 - editor: Judith Bush
 - Liaison Coordinator: Keith Hazelton

#### Description of new proposed roles:

 - Project Manager : this person would have the duty to follow-up with people who have promised deliverables,
 to interrupt any conversations that are tangential to the core mission, and to keep us focused on the
 schedule so we ship version 1.0 of the standard in a reasonable time. Perhaps someone from Kantara?

 - Crypto-Guru : this person would review and approve our crypto designs, or find others who are qualified
 to validate the sufficiency or mechanisms we propose as part of the standard.

 - Liaison Coordinator : this person would be OTTO's ambassador to other groups who have an interest in
 an OAuth2 multi-party federation standard.

### Discussion on OpenID Connect Thread on "claims" in the Client Registration Spec:
  http://lists.openid.net/pipermail/openid-specs-ab/Week-of-Mon-20150810/005680.html

During a client registration, how can an OP pre-authorize release of claims to a client that orginated
from another source?

How can a client be pre-authorized for claims in a way that OP will honor that pre-authorization at
dynamic registration time?

Can the client register at all? And then how do we know if its authorized to get certain scopes or claims?

Software statements allow the client to register. Software statements can be found in one of the
dynamic client registration specs: https://tools.ietf.org/html/draft-ietf-oauth-dyn-reg-30
The software statement is an authorization token to allow dynamic client registration.

A software statement, which is a signed JWT, might be issued by a federation to define which components.
Right now there is no defined structure for software statements. Maybe 'allowed_claims' that are
signed by different entities.

We might need to write a profile of a software statement.

RP conformance testing requires support for dynamic configuration and updating.

### Continuing Discussion of Nate's Dogma

  - "The content of metadata needs to be replaced or amended to be both more informative
  (provisioning, attribute, and consent stuff) and less informative(deprecate lightly used data fields). It
  also needs the right primary index (probably domain, because that’s the more common bootstrap for discovery)
  and secondary indices."

  MS: Maybe we should analysis of fields in SAML for which are used and not used--now that we have
  more data we should factor it in. We might want to take a look at the Netflix falcor library
  https://auth0.com/blog/2015/08/28/getting-started-with-falcor/ -- Its borderline in that its
  an implementation, but it may impact our design of the json data structure. Would this tree structure
  be compatiable with an append only crypto datastore? Keith suspects that the blockchain should
  ok because the content is just a blob.

  - "Rather than trying to solve the distributed signature problem, I want the replacement for metadata to
  include pointers to attesting authorities. A provider could proceed to query a mutually trusted authority
  to verify the good standing of a recipient. This also allows a single entity to point to multiple authorities,
  something that is a challenge with signatures over files. I also don't have to magically know your trusted
  authorities: you tell me who they are. Mutual TLS authentication to both the recipient and the authority
  gives cryptographic security to this chain of relays. This is a provider-centric alternative to the
  federation-centric being pursued today."

  This sort of sounds like trust-marks... which we've discussed, which also sounds close to the software
  statement. Perhaps mutual TLS is good enough for lower assurance trust frameworks. Roland says
  you should not base any cryptographic security on TLS authentication only.









-------------------------------------------------------------------------------------

Next week's Meeting Details - same time / same place!

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
