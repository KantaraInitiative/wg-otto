OTTO WG Minutes: 3/30/2018
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Keith Hazelton
 - Judith Bush
 - Meg Joshi

## Review Charter

https://github.com/KantaraInitiative/wg-otto/blob/master/kantara/charter2018.md

See Github changes:
https://github.com/KantaraInitiative/wg-otto/commit/f774752d134edf4d818a0da9f5da6fbef34ed631

## Crypto

The purpose section of the charter mentions "Mechanisms to cryptographically verify the integrity of federation data and messages."

How much signing does OTTO need to define? The current plan is
define low assurance federations, and then add another profile that extends OTTO to define higher assurance (more signing / mutual TLS).  

## Discuss potential candidates for adoption

We need to identify an ecosystem that wants to be the first
to implement OTTO. Higher Ed is less likely because they
already have SAML. It may be easier to start with an ecosystem
that is only using OpenID.

## IIW strategy

Run one session on OTTO to review:
  1. Overview of requirements
  2. Overview of four draft specs: API, Core, OpenID, SAML
  3. Answer any questions
  4. Query for implementation opportunities

  ## Note from Paul Caskey from I2

  On the [MDQ-Appliance](https://github.internet2.edu/internet2/mdq-appliance) page, there is some guidance on what needs to be signed, as referenced
  in the email thread below.

```  
  On 2018-03-19, 4:18 PM, Paul Caskey wrote:

      I'm responding to a very old thread, I know...

      It took me a bit to get it into a public repo, but if any of you want to try out an MDQ server with InCommon global metadata, it's as easy as: "docker run -d -p 443:443 tier/mdq-appliance"    :)

      It's an centos-based apache server that serves up InCommon metadata processed with the Metadata Aggregator and signed with a key generated when you first run the container.

      Source files are here:
      https://github.internet2.edu/i2/mdq-appliance

      Comments are welcome/desired.

```

## Next Meeting Friday 4/13 9am US Eastern Time

1.  Please join my meeting.
https://global.gotomeeting.com/join/162399285

2.  Use your microphone and speakers (VoIP) - a headset is recommended.  Or, call in using your telephone.

Meeting ID: 162-399-285

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
