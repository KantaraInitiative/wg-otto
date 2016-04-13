OTTO WG Minutes 4/13/16
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Janusz Ulanowski 
 - Yuriy Zabrovarnyy
 - Keith Hazelton 

## Discussion of Web site to publish OTTO Schema 

Github Repo for the software used to publish http://schema.org:
  [https://github.com/schemaorg/schemaorg/wiki/AppEngine]
  ([https://github.com/schemaorg/schemaorg/wiki/AppEngine])

The software takes input in [rdfa](https://www.w3.org/TR/rdfa-lite/)

For example, here is schema.org's [schema]
(https://github.com/schemaorg/schemaorg/blob/sdo-deimos/data/schema.rdfa)

We have a little problem: the conversion web tool from N3-->RDF-Lite is
throwing errors. But there is a python tool we could maybe use to generate 
it.

## Discussion of OpenID Connect Federation Standard

Roland and Rebecka have put forward a draft federation standard for OpenID Connect:
 https://github.com/rohe/pyoidc/blob/master/oidc_fed/oidcfed.txt

Mike completed a more detailed read of the document, and presented an overview.

One of the more interesting ideas Roland puts forward is that OP and RP would create 
a new long lived private-public key pair called the "primary key." This would be 
registered with the federation, and used to sign the OpenID Connect JSON Web Key Set 
(JWKS) provided either during client registration or published at a URI. Likewise,
the OP would also sign its JWKS_URI with the primary key registered with the federation.

When an RP registers with a federation, it would be provided with a "Software Statement"
that contains a JSON Web Token (JWT) that contains the redirect_uris for the entity,
the primary key used by the RP, claims for "scopes_allowed" and "claims_allowed", 
and perhaps other claims defined by the federation. The RP could then present this JWT as 
part of client registration, and the OP could decrypt it with the public key of the federation.
How would the OP know which federation key is used to decrypt the software statement: that
seems to be out of scope of the document.

Keith mentioned that this idea of a primary key used to issue shorter lived keys
is used by [NCSA](http://grid.ncsa.illinois.edu/myproxy/ncsa.html) for server login.

One question raised by Mike was whether this solution created the problem key rotation 
solved in the first place: that it was important to know quickly that each party could 
handle key rotation.

Although some of the details around key exchange are detailed, how the entities would interact 
with Federation Operator is out-of-scope of the document (i.e. no federation endpoints are 
defined)

The goal of this draft seems to be to add functionality to OpenID Connect. It is suggested
that the OP adds these additional parameters to its discovery endpoint, and that the
RP can register these params as additional client metadata:

       signed_jwks_uri
          OPTIONAL.  Location of the entity's signed JWKS, SHOULD return the
          Content-Type "application/jose" to indicate that the JWKS is in
          the form of a JWS using the JWS Compact Serialization.
    
       signing_key
          OPTIONAL.  A JWS containing the entity's intermediate public key.
    
       signing_keys_uri
          OPTIONAL.  Location of the JWKS containing the intermediate key
          that the entity, signed by the primary key.
    
       signed_metadata
          OPTIONAL.  A JWS containing all published metadata, except the
          "signed_metadata" itself.
    
       signed_metadata_uri
          OPTIONAL.  Location of the signed metadata.
    
       software_statements
          OPTIONAL.  A list of software statements from all federations the
          entity is part of.
    
       software_statements_uri
          OPTIONAL.  A JSON object where the member names are the issuer
          identifiers of the federation that has signed a software statement
          and the values are URLs pointing to the corresponding software
          statements.

Mike questioned if extending OpenID Connect Discovery and Registration was really necessary. 
For example, instead of providing the information at the OpenID Connect discovery endpoint, 
perhaps the OP could provide an additional discovery endpoint that describes its 
federation capabilities, such as `http://example.com/.well-known/otto-configuration`
At this endpoint, the OP could also advertise support for this metadata during
client registration. Mike also questioned if the feedback from the OpenID community
would be sufficient to vet this federation approach--the main sponsors of OpenID Connect
don't really need this trust model, so consideration of these features may be a low
priority. And participation in the OpenID Foundation from the higher ed community, which 
is one of the main users of this trust model, is low. Finally, would a rush to implement this 
draft, despite the gaps in the solution, lead implementers to advance in different directions.

## Next Meeting - Weds 4/20/2016 9am PT

 - Janusz will do a demo on some work he's been doing on Edugate 
 - Follow-up discussion on the OpenID Federation proposal
 - Follow-up on schema discussion

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

