OTTO WG Minutes 11/4/15
STATUS: Approved

## Voting Members Attending:
 - Mike Schwartz
 - Judith Bush
 - Janusz Ulanowski
 - Jim Willeke

 
## Non-voting members
  - Rainer Hoerbe
  - Smit Joshi

## Discussion of Blockchain

Let us replace the term blockchain with "public ledger" when talking on the functionl level. The ledger provides a proof of transaction that is very fast and distributed. Whether the implementaiton layer uses a blockhain or a pure Merkle tree is a different question.

Alan asked "is the problem that we don't trust the federation--worried about a malicious
party changing the data."

Rainer pointed out that trusting the federation operator or a trusted thrid party in general is a problem, because hacking is so prevalent.

However, if the federation gets hacked, they can append invalid data on the blockchain. (Any other change than adding at the end is infeasible.) As a counter measure each owner of an assertion in the ledger is obliged to monitor his own entries on an ongoing basis. To prevent detection the attacker would have to subvert the monitoring system (which might not be internet-facing) as well, which is much harder.

Multiple authoritative parties alleviates some of the issues associated with SAML-MD or X.500-like trust models. Domain ownership is certified by a CA or a domain registry, name-key binding with some registrar, and the contact point by the entity operator. These are atomic assertions which are part of SAML metadata. Products consume aggregated metadata, such as an X509 cert and SAML entit descriptor. 

Data in the blockchain can be limited to a hash of a key and a URL pointing to the actual assertion. That assertion could be behind a paywall to support business models that charge for assertions (D&B-type business information).

Is this trust community small enough to pre-share certificates to establish trust. 
Perhaps the list of certificate could be created on the fly.

Alan pointed out that this project has a lot in common with LOCSS http://www.lockss.org
based at Stanford University Libraries, provides libraries and publishers with award-winning, 
low-cost, open source digital preservation tools to preserve and provide access to persistent 
and authoritative digital content.

Questions arose about whether OTTO would define one shared ledger, or whether federation operators
would create their own ledger. It seems like it would be efficient if federations shared a 
single ledger, which would facilitate sharing data (assertions). 

InCommon was recently discussing the challenges around IDP's who need to support SP's that
are not part of the federation. This trust model needs to be handled in a one-off manner.
Perhaps this model will accommodate non federation approved entities.

Rainer suggests a two layer structure--for example the SP would obtain the public key and context 
data. Layer two could be a service or library function that provides a single point of access to
the metadata. The system should have two layers: (1) a fundamental layer for atomic assertions, such as "Name X is-bound-to Key Y". (2) a technology-specific layer that would create SAML-MD, X509 cert stores, XML trust lists etc. from the fundamental layer.
Rainer took an AI to come up with a better description.
[Added after the meeting]
The diagram "Data Flows" shows how "atomic assertions" are published to the block chain (and external resources), and are aggregated in a layer on top of this for a technology-specific rendering. Of course this is a simplification, as for example SAML-specific endpoints wold have to go to the blockchain as well. But the fundamental assertions such as binding of keys to names should be in a technology-neutral format.
https://github.com/KantaraInitiative/wg-otto/blob/master/files/DataFlows.png

IPFS (IP File system) is also looking at using merkle trees to distribute files.

ASCIdoctor might be a good tool to develop a strawman document.  
See sample ASCIIdoc source files at
https://github.com/KantaraInitiative/SAMLprofiles/tree/master/docs/A%20WebSSO%20Implementation
Rendered output:
https://rawgit.com/KantaraInitiative/SAMLprofiles/master/rendered/WebSSOScaleFedProfile.html
Toolchain:
http://asciidoc.org
http://asciidoctor.org/ 
http://asciidocfx.com/  (GUI)


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

