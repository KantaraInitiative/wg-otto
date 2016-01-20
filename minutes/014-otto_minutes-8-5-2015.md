OTTO WG Minutes 8/5/15
STATUS: Draft

## Voting Members Attending:
- Mike Schwartz
- Judith Bush

## Non-voting members
- 
- Keith Hazelton

## Special Guest
- Jane Celusak

## Topics discussed

We will open nominations for roles the week of 9/2 - 9/8, hold voting the week of 9/9-9/15.
Roles will be two co-chairs and specification editor.

Discussion of Vectors of Trust IETF Draft by Justin Richer which is an effort to offer a
more detailed alternative to NIST LOA 1-4
  https://tools.ietf.org/html/draft-richer-vectors-of-trust-00#section-7
It raises the issue of over-use of the "trustmark" term. Judith pointed out that there are 69
definitions of trust mark.

Rainer is suggesting a blockchain solution to publishing metadata, or a data structure
where you cannot change without breaking the chain.

The IETF has an RFC for certificate transparency--a public ledger for CA certificate to enable
verification of root CA's.
  https://tools.ietf.org/html/rfc6962
Because metadata is a very similar use case to PKI, a similar approach could be used.

Entity operator would submit data to federation operator, which is opaque to outsiders, and then it
would be published. With an append only data structure, once the federation operator has
verified that what has been publish is posted, it cannot be changed in the future--which
can prevent a man-in-the-middle attack. Just provides a different distribution and
verification mechanism that is more secure and reliable.

---------------------------------------------

Here are the references that were discussed in today's meeting.
Links are also in the minutes, which provide context.
GTRI NSTIC Trustmark Pilot: Operational Pilot Artifacts

Type	Web Page
URL	https://trustmark.gtri.gatech.edu/operational-pilot/
Accessed	8/4/2015, 5:00:00 PM
Abstract	A Trustmark Definition specifies the normative conformance criteria that a Trustmark Recipient must meet, as well as the formal assessment process that a Trustmark Provider must perform to assess whether the Trustmark Recipient qualifies for the trustmark. There can be many different types of trustmarks, and each type of trustmark has its own Trustmark Definition. Formally, a Trustmark Definition exists as an eXtensible Markup Language (XML) object that conforms to the normative structure and rules for Trustmark Definitions as defined by the Trustmark Framework Technical Specification, which is located at https://trustmark.gtri.gatech.edu/specifications/trustmark-framework. In addition, a Trustmark Definition may be represented in other formats, e.g., HTML, for greater human readability. Use the link below to visit the index page for all Trustmark Definitions developed under this project. Each Trustmark Definition is provided in both XML and HTML format.
Website Title	GTRI NSTIC Trustmark Pilot
Date Added	8/5/2015, 8:24:42 AM
Modified	8/5/2015, 8:32:27 AM
Tags:

IDM.trust
OTTO.20150805
iGov WG Draft Charter | OpenID

Type	Web Page
Author	Troy Rhonda
Author	Nat Sakimura
Author	John Bradley
Author	Michael B. Jones
Author	Rolando Martínez González
Author	Venkat Maddali
Author	Alvaro Cuno Parari
Author	Juan Ignacio Fiorentino
Author	Roland Hedberg
Author	Paul Grassi
URL	http://openid.net/igov-wg-draft-charter/
Accessed	8/5/2015, 8:12:23 AM
Abstract	Working Group Name: International Government Assurance Profile (iGov) The purpose of this working group is to develop a security and privacy profile of the OpenID Connect specifications that allow users to authenticate and share consented attribute information with public sector services across the globe. The resulting profile will enable standardized integration with public sector relying parties in multiple jurisdictions. The profile will be applicable to, but not exclusively targeted at, identity broker-based implementations.
Website Title	Open ID Foundation
Date Added	8/5/2015, 8:12:23 AM
Modified	8/5/2015, 8:16:02 AM
Tags:

OpenID
OTTO.20150805
PEER: Public Endpoint Entities Registry

Type	Web Page
URL	https://reep.refeds.org/
Accessed	8/4/2015, 5:00:00 PM
Abstract	PEER is envisioned as a lightweight, global registrar for SAML Metadata representing both SAML and non-SAML endpoints (e.g., OpenID, IMI). It is intended as a focused activity to catalyze international use of federated identity. The service is not intended to be a replacement for federation or inter-federation, but is intended to be a tool supporting such activities. The service is intended to be operational by July 2011. It will be operated by an interim operator as a proof-of-concept and move to a permanent home if the service is seen as useful. Part of the PEER project will include an analysis of sustainability for PEER. -- https://spaces.internet2.edu/display/PEER/Home
Date Added	8/5/2015, 8:45:56 AM
Modified	8/5/2015, 8:47:56 AM
Tags:

IDM.federation
IDM.trust
OTTO.20150805
RFC 6962: Certificate Transparency

Type	Report
Author	Adam Langley
Author	Emilia Kasper
Author	Ben Laurie
URL	https://tools.ietf.org/html/rfc6962
Accessed	8/5/2015, 8:35:25 AM
Institution	IETF
Report Type	Request for Comments - Category: Experimental
Abstract	This document describes an experimental protocol for publicly logging the existence of Transport Layer Security (TLS) certificates as they are issued or observed, in a manner that allows anyone to audit certificate authority (CA) activity and notice the issuance of suspect certificates as well as to audit the certificate logs themselves. The intent is that eventually clients would refuse to honor certificates that do not appear in a log, effectively forcing CAs to add all issued certificates to the logs. Logs are network services that implement the protocol operations for submissions and queries that are defined in this document.
Report Number	RFC 6962
Date Added	8/5/2015, 8:35:25 AM
Modified	8/5/2015, 8:41:29 AM
Tags:

IDM.encryption
IDM.HTTPS
IDM.trust
OTTO.20150805
Notes:

20150805 discussion

Rainer Hoerbe (to All): Append-only Data Structures .. this is similar to CBC in block ciphers (e.g. AES-CBC
Rainer Hoerbe (to All): Difference to block chain is the anonymity property

Trustmark Framework Technical Specification 1.0

Type	Report
URL	https://trustmark.gtri.gatech.edu/specifications/trustmark-framework/1.0/tfts-1.0.pdf
Pages	63
Date	October 3, 2014
Accessed	8/4/2015, 5:00:00 PM
Institution	Georgia Tech Research Institute
Report Type	Spec
Abstract	A Trustmark is a machine-readable, cryptographically signed digital artifact, issued by a Trustmark Provider to a Trustmark Recipient, and relied upon by one or more Trustmark Relying Parties. A Trustmark represents an official attestation by the Trustmark Provider of conformance by the Trustmark Recipient to a well-defined set of requirements pertaining to trust and/or interoperability for the purpose of interaction with and use of digital information resources and services. A Trustmark Relying Party may rely upon a Trustmark as the basis for third-party trust in the Trustmark Recipient with respect to the set of requirements represented by the Trustmark. A Trustmark Definition expresses the specific set of requirements represented by a Trustmark. A Trustmark Provider cryptographically signs and publishes various Trustmarks for organizations (Trustmark Recipients) that wish to obtain and use those Trustmarks as a mechanism for establishing trust with other entities (Trustmark Relying Parties), including partner organizations and individuals. These concepts and others together comprise the Trustmark Framework.
Date Added	8/5/2015, 8:28:59 AM
Modified	8/5/2015, 8:33:15 AM
Tags:

IDM.trust
OTTO.20150805
Vectors of Trust

Type	Report
Author	Leif Johansson
Author	Justin Richer
URL	https://tools.ietf.org/html/draft-richer-vectors-of-trust-00
Date	June 26, 2015
Accessed	8/5/2015, 8:20:29 AM
Institution	IETF
Report Type	Internet-Draft
Abstract	This document defines a mechanism for describing and signaling several aspects that go into a determination of trust placed in a digital identity transaction.
Date Added	8/5/2015, 8:20:29 AM
Modified	8/5/2015, 8:37:52 AM
Tags:

IDM.trust
OTTO.20150805



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
