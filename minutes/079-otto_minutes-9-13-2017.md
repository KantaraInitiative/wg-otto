OTTO WG Minutes: 9/13/2017
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Meg Joshi
 - Judith Bush

## Overview of Sovrin

In the past we had looked at blockchain technologies as a solution for
publishing federation data, but we got bogged down on the logistical details--
for example, which blockchain, what is the business model, how would we publish
claims. Sovrin maybe provides some of the answers to this question.

More information about Sovrin can be found at http://sovrin.org

Sovrin is a permissioned blockchain (i.e. entities have to be approved to write
to the ledger). It provides a mechanism where a "claim issuer" (i.e. the
federation) could issue claims to a "claim owner" (i.e. an IDP or SP), which
could be verified by a "claim verifier." See this diagram:
https://raw.githubusercontent.com/KantaraInitiative/wg-otto/master/files/sovrin-diagram1.jpg

What makes Sovrin work is a combination of three technologies: distributed
ledger, distributed identifiers, and verifiable claims:
https://raw.githubusercontent.com/KantaraInitiative/wg-otto/master/files/sovrin-diagram2.jpg

DID's are used to reference keys and endpoints. The endpoints hold the data.
Data is not written directly to the ledger. The W3C verifiable claims mechanism
is used to validate claims.

Sovrin has properties for both privacy and verification. In some cases, privacy
is not needed. For example, InCommon publishes the participants of the federation.
However, federations in other ecosystems may want to protect the privacy of
participants. For example, in the defense ecosystem, this may be important. Also,
in some federations where the participants are competitors, it may be important
that one participant may want to do business with another participant, but it
may not be desirable to advertise to the world that participants membership.

The design of OTTO so far aligns nicely with Sovrin. We are using JSON-LD
as the data format. Also, the endpoints defined are still needed to hold the
data.

What is really needed is to show how this all works together. We're hoping the
DHS ERASMUS pilot will give us the opportuntity to test it. 

## Next Meeting 9/20 12pm US Eastern Time

*** NOTE: No meeting 6/3 because of Mike's Travel ***

1.  Please join my meeting.
https://global.gotomeeting.com/join/162399285

2.  Use your microphone and speakers (VoIP) - a headset is recommended.  Or,
call in using your telephone.

United States: +1 (669) 224-3319
Australia: +61 2 8355 1034
Austria: +43 7 2088 0716
Belgium: +32 28 93 7002
Canada: +1 (647) 497-9372
Denmark: +45 69 91 84 58
Finland: +358 923 17 0556
France: +33 170 950 590
Germany: +49 692 5736 7206
Ireland: +353 19 030 053
Italy: +39 0 699 26 68 65
Netherlands: +31 208 080 759
New Zealand: +64 9 974 9579
Norway: +47 21 04 30 59
Spain: +34 931 76 1534
Sweden: +46 852 500 691
Switzerland: +41 435 0026 89
United Kingdom: +44 20 3713 5011

Access Code: 162-399-285
Meeting ID: 162-399-285
