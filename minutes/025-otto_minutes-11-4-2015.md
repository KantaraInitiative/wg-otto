OTTO WG Minutes 11/4/15
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Judith Bush
 - Janusz Ulanowski
 - Jim Willeke
 = Rainer Hoerber
 
## Non-voting members

Smit Joshi

## Discussion of Blockchain

Replace blockchain with "public ledger", proof of transaction that is very fast. 

Alan asked "is the problem that we don't trust the federation--worried about a malicious
party changing the data."

Rainer pointed out that trusting the federation operator is a problem, because hacking 
is so prevalent.

However, if the federation gets hacked, they can put invalid data on the blockchain. 

However, with a signed ledger, the federation asserts an affiliation, but cannot change 
the underlying data. The hacker would have to append a new record, and then link it.
This would be easier to detect than in a conventional database. 

Multiple authoritative parties alleviates some of the issues associated with X.500-like
trust models. Domain ownership is certified by a CA or a domain registry--these are fundamental
assertions which are part of SAML metadata. A distributed ledger offers a less hierachical 
data model, which could alleviate interdomain trust.

Is this trust community small enough to pre-share certificates to establish trust. 
Perhaps the ledger could be created on the fly.

Alan pointed out that this project has a lot in common with LOCSS http://www.lockss.org
based at Stanford University Libraries, provides libraries and publishers with award-winning, 
low-cost, open source digital preservation tools to preserve and provide access to persistent 
and authoritative digital content.

Questions arose about whether OTTO would define one shared ledger, or whether federation operators
would create their own ledger. It seems like it would be efficient if federations shared a 
single ledger, which would facilitate sharing data. 

InCommon was recently discussing the challenges around IDP's who need to support SP's that
are not part of the federation. This trust model needs to be handled in a one-off manner.
Perhaps this model will accommodate non federation approved entities.

Rainer suggests a two layer structure--for example the SP would obtain the public key and context 
data. Layer two could be a service or library function that provides a single point of access to
the metadata. 

IPFS (IP File system) is also looking at using merkle trees to distribute files.

ASCIdoctor might be a good tool to develop a strawman document.  


## Still many questions remain:

- Would the federation operators run the software that would copy the blockchain?

- What data would we store in the blockchain? 

- What would be the schema for the entities in the federation?

- What would be the schema for the federation operator? 

- How would the FO reference entities?

- How would we version / evolve schema?

- What would manage the atomic view of the data, authoritative data (triples). For example, Rainer's 
[email](http://kantarainitiative.org/pipermail/wg-otto/2015-October/000121.html) 

- How to render the protocol specific view (for example SAML metadata).

- How would we index and publish data in the blockhain?

- Who would do the mining in a private blockain (the federation operators?)

- What would be the business model if we use a public blockchain like bitcoin or ethereum?

## Next week's Meeting Details - Weds 11/11 8am PT

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

