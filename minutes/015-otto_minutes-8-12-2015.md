OTTO WG Minutes 8/12/15
STATUS: Draft

## Voting Members Attending:
- Mike Schwartz
- Judith Bush
- Keith Hazelton
- Janusz Ulanowski

## Non-voting members
- Rainer Hoerbe


## Topics discussed

NOMINATIONS / VOTING
We will open nominations for roles the week of 9/2 - 9/8, hold voting the week of 9/9-9/15.
Roles will be two co-chairs and specification editor.

DISCUSSION of RFC 6962 - Certificate Transparency https://tools.ietf.org/html/rfc6962
This RFC enables PKI CA's to publish their root certificates into a public ledger, so a
certificate holder can verify the integrity of the root certificate. The technology could be
applied to non-certificate data.

Judith thinks that the ability to query the metadata is important. Would we lose the ability to query
the metadata, so organizations wouldn't have to download the whole metadata. Rainer mentioned that the
key-value data structure is ok for obtaining an individual entity's metadata, but not for SQL-like
queries, like "give me all the entities with a certain attribute."

George is wondering if the complexity--is it necessary for the concern of signed metadata. Its cool
and more secure, but does it outweigh the cost?

Rainer says its appropriate for high assurance identity management, and not so for low assurance
trust frameworks. Rainer is working on a small-scale implemenation for the Austrian government.
Also, how distributed?

Mike posed the question: Is it the goal of OTTO for very centralized management? If so, it might
not be worth the trouble.

Not being a crypto-mathemetician, Mike asked if RFC 6962 has been validated. Google has code
available in several languages: https://github.com/google/certificate-transparency
Rainer also mentioned that there is an open source Erlang implementation available. In the IETF,
for an RFC to advance to Internet Standard there have to be two separate implementations, widespread use.
But indications are that it looks good.

Example of InCommon Federation Metadata aggregate:
 https://spaces.internet2.edu/display/InCFederation/Metadata+Aggregates

Example of CACert Root Cert Publication:
   http://www.cacert.org/index.php?id=3

Here's some beginner's-guide-style info from one of them:
  http://www.certificate-transparency.org/what-is-ct

There was a discussion of trustmarks--a mechanism to enable the federation to issue a signed JSON token
that would indicate membership in a federation. Mike was concerned that by addressing trust marks, it
would just delay the delivery of the solution for entity metadata publication and discovery.


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
