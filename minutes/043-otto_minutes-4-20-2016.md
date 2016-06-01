OTTO WG Minutes 4/20/16
STATUS: Final

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Keith Hazelton 

## Guest
 - Collin Wallis

## Discussion of OpenID Connect Federation Standard

Yuriy had some questions about how to figure out which federation signed the software
statement, see section 6 - Verification Process 
 https://github.com/rohe/pyoidc/blob/master/oidc_fed/oidcfed.txt

Mike suggested that maybe the software statements needs to go into some kind of 
JSON object. 

## Discussion of OpenBadge

Mike came across a specification for conveying educaitonal credentials that also uses 
JSON-LD:
  http://openbadgespec.org
  
See the schema:
  https://openbadgespec.org/v1/context.json
  
It's an interesting data point that supports our choice of JSON-LD for a non web-search 
use case.
 
## Discussion Schema

Check proposal in the next week for updates:
 https://github.com/KantaraInitiative/wg-otto/blob/master/docs/proposal/proposal.md

Mike to work on SAML IDP and SP schema

Yuriy to work on UMA AS, RS, and Client schema

## Discussion on Linked Data Signatures

https://web-payments.org/specs/source/ld-signatures/

Mike was concerned about the status. 

Below are excerpts from an email thread between Mike and Manu Sprony.
OTTO WG members should consider and send comments to the mailing list.

Mike: Can ask for yoru informal appraisal of linked data signatures?

Manu: We have the technology deployed in commercial pilot projects and have
been working on it off and on for the better part of 4+ years. That's to
say that the technology is well past the "prototype" stage.

Mike: Are there any significant risks for non-completion that I should be 
worried about?

Manu: It's an experimental draft spec right now and we haven't pushed it
forward yet because there have been multiple people from the JOSE
community that have asked us not to do so (as it could be viewed as
creating a pseudo-competitor w/ JOSE). That said, we're not thrilled with 
JOSE and have written about it at
length here: http://manu.sporny.org/2013/sm-vs-jose/
So, all that said - we have no idea if it'll ever make it to a W3C REC
or an IETF RFC. We do intend to pursue that route at some point, but are
attempting to get more commercial deployments before we head down that path.

There is precedent for standards formalizing usage, then define new patterns.
So proceeding with this strategy could provide more evidence that there is a 
use case for this type of signing.

## Next Meeting - Weds 5/4/2016 9am PT 

  **NO MEETING 4/27 DUE TO Internet Identity Workshop!!!**

 - Janusz will do a demo on some work he's been doing on Edugate 

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

