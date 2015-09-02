OTTO WG Minutes 8/26/15
STATUS: Final

## Voting Members Attending:
Judith Bush
Keith Hazelton
Janusz Ulanowki

## Non-voting members
Nate Klingenstein

## Topics discussed


NOMINATIONS / VOTING
We will open nominations for roles the week of 9/2 - 9/8, hold voting the week of 9/9-9/15.
Roles will be two co-chairs and specification editor.

1) Scope / Schedule

Entity discovery is the most important use case:

1) Discussion of metadata data structure

 - "Attribute requirements are notoriously difficult to express, making out of band communication
 necessary anyway"

NK: No good way to signal which attributes the RP wants to receive--for example which are required, which
are optional. The goal of the federation was to reduce out-of-band communication, why doesn't
metadata solve this? Attributes, trusted authorities still require manual communication. How
also to facilitate comprehensible consent messages.

KH: If we move this information to metadata, the question becomes who maintains the metadata?
Someone still has complicated work to do. Is it asking a lot of the federation operators?
And does it add complexity to the design of the metadata?

NK: Less complicated when information is static, but more interactive endpoints have more
trust considerations. Out of band gives us a lot of flexibility.

NK: What about metadata about attributes? Is EPPN non-re-assignable? Maybe an IDP can share this,
and it would be meaningful to an RP.

MS: SAML metadata can enable SP's to request attributes. For example, from InCommon's metadata
for Educause:
      <RequestedAttribute FriendlyName="mail" Name="urn:mace:dir:attribute-def:mail" NameFormat="urn:mace:shibboleth:1.0:attributeNamespace:uri"/>

Doesn't which are required for what functionality: more detail is needed. What is the policies
at the SP for this attribute? What happens if the attr is not provided?

Judith asked if Name Identifier is considered an attribute. Nate mentioned that he wondered
if SAML2's use of NameID has problems. How about using nameID's across RP's? Having a unique
name for users, and a human understandable name for users present different challenges.
Perhaps an implementation can use attribute in a way that make name id's not needed.

Judith does think that name or sub should have special status, because it so important to
present a consistent user experience. The pointer to the record is a special attribute,
that has considerations by the IDP (i.e. non-reassignability).

IDP's aren't providing enough information to Service Providers, for example how to de-provision.

Nate's document doesn't mention specific federation protocols by design. Both connect and SAML
have gaps.

Tradeoff of optionality versus cost of operation and interoperability. Identity data could change
completely, because we're not relying on it to point to a person.

- "Dynamic metadata has been difficult to get done, and that’s because we’re trying to build DNSSEC +
IPsec rather than TLS... Every entity name must be a URL that is resolveable into a description of the
entity and how to talk with it."

DNSSEC has trouble answering in the negative: how could InCommon say the Polish federation does not have
 this provider? It is too hard to come up with an exhaustive list? Give people the ability to post
 information about themselves. You're not trying to capture all identies--but verify a particular entity
 that you're taking to.

 Move to a standard way to get directly to the Provider, and learn how to validate their metadata.
 Centralized models have trouble with "chaining"--a distributed model provides a more decentralized,
 alternative trust model.

 If you start at the Provider rather than the Federation--all sorts of trust models become unlocked.

 Trust models don't have to be centralized, but could be reputation based. Could providers vouch for
 each other? By being able to "chase" references, you can discover more data to enable trust.

 Keith pointed out that the federation does provide an extra layer of trust in some circumstance.
 Rely on TSL for "I'm communicating with this entity." Perhaps the trust model provided by the
 federation could supplement the domain asserted information--for example this is the key that you
 should using.

2) OpenID Connect Thread on "claims" in the Client Registration Spec?
  http://lists.openid.net/pipermail/openid-specs-ab/Week-of-Mon-20150810/005680.html







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
