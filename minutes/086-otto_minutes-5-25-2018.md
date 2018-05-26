OTTO WG Minutes: 5/25/2018
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Keith Hazelton
 - Judith Bush

## Discussion of RA21 federated authorization requirements

Judith has been helping the library ecosystem figure out
how to move away from IP based access towards an architecture
that leverages federation standards. One of her ideas is
to use OAuth to represent authorization, perhaps an UMA
access token. An OTTO federation could provide a mechanism
to help with discovery and to publish standard schema, for
example, which scopes are used in the ecosystem. It's an
interesting use case, because the RS does not controls access,
the library does. Using UMA would protect privacy more
effectively, as even even SAML transientid (which is like a
session identifier) is good for an entire session (whereas
OAuth access tokens are good for less time, thus providing
less time to profile a user).

## Discussion of Rainer's EIC presentation

Rainer gave this presentation:
[Privacy by Design in Federated Identity Management](https://github.com/KantaraInitiative/wg-otto/blob/master/files/20180516_EIC%20PbD_in_FIM%20Hoerbe_full.pdf)

Mike asked him if he could be an OTTO special guest and present it again next Friday 6/1 at 9am ET (normal OTTO meeting time)

## Federation Operator client registrationAuthority

In the InCommon OpenID Deploy group, and there was an interesting note:

```
Fed Operator also provides endpoints that RPs can use to
register with the OPs via the Fed Operator
```

This statement raises many issues:

1. Is the FO providing endpoints for client registration, or is the FO just routing?

2. If the FO is issuing client creds, does the client try to obtain an access token at the FO? Is there some kind of proxy service here?

3. Is the FO issuing a software statement? If so, not that many OP's will support this input during client registration.

Basically, this statement raises more questions then it answers.

## Mesh versus Hub and Spoke Federations

One of the trends that we're seeing is that the federation operators is being called on to offer more dynamic services.
In the past, the FO just posted static files to a web server. This is an easy architecture to host and replicate. But it makes sense for the FO to offer services--as suggested in the section above. The ERASMUS DHS project also suggested that the FO could host a badge service. InCommon also offers a SaaS CA service--even though this is not hosted by InCommon, it's a good example of how the federation is in a good place to offer services.

We've also seen that federations that operate a proxy can deliver value to their members more rapidly (and for less money.). Judith pointed out that WAYF, the Danish federation, presented this idea at a previous IIW. Here are the [slides](https://github.com/KantaraInitiative/wg-otto/blob/master/files/2014-10-29%20IIW%20-%20WAYF%20federation%20benefit%20calculator.pdf)

## Next meeting : Friday June 1 9am ET

OTTO WG Meeting

Please join my meeting from your computer, tablet or smartphone.
https://global.gotomeeting.com/join/162399285

You can also dial in using your phone.
United States: +1 (669) 224-3319

Access Code: 162-399-285

More phone numbers
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

First GoToMeeting? Let's do a quick system check: https://link.gotomeeting.com/system-check
