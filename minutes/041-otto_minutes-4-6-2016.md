OTTO WG Minutes 4/6/16
STATUS: Final

## Voting Members Attending:
 - Mike Schwartz
 - Keith Hazelton
 - Yuriy Zabrovarnyy
 - Judith Bush
 

## Discussion of OpenID Connect Federation Standard

Roland and Rebecka have put forward a draft federation standard for OpenID Connect:
 https://github.com/rohe/pyoidc/blob/master/oidc_fed/oidcfed.txt

Keith is going to reach out to Roland and Rebecka to encourage them to bring that to the 
OTTO WG. It's a subset of what we're trying to accomplish, but it could be synergistic 
with our overall mission. 

Mike has submitted some suggested revisions to the abstract, and will continue to review the
spec this week for a more detailed presentation at next week's OTTO meeting.

## Discussion of Linked Data Format

Janusz suggested we should define and formalize OTTO ontology using owl/rdfs. "Using OWL we will be 
able to create very strict schema (classes, properties, etc) which it will be very good for validators."

I think we agree, but what about Turtle N3 format? Last week, Jeff was using Turtle.
Yuriy switched to it this week because its more concise than the JSON-LD format:
    Turtle (Terse RDF Triple Language) is a syntax and grammar for RDF serialization written 
    by David Beckett and Tim Berners-Lee in 2008, created as an alternative syntax to RDF/XML. 
    It allows RDF graphs to be written out (‘serialized’) in a compact and natural text form 
    that easier for humans to read than RDF/XML.

Here is a [Rough guide to Turtle Guide]
(https://semanticpublishing.wordpress.com/2013/03/01/lld2-rough-guide-to-turtle/)

## Discussion of OpenID_Relying Party

We started to discuss schema for OpenID Connect Relying Parties:

```N3
    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
    @prefix schema: <http://schema.org/> .
    @prefix otto: <http://kantarainitiative.org/otto/schema/> .

    # Ontology

    otto:OpenID_Relying_Party a rdfs:Class .

    otto:redirect_uris a rdf:Property ;
     rdfs:range xsd:anyURI;
     .

    otto:jwks_uri a rdf:Property ;
     rdfs:range xsd:anyURI;
     .

    otto:sector_identifier_uri a rdf:Property ;
     rdfs:range xsd:anyURI;
     .

    otto:initiate_login_uri a rdf:Property ;
     rdfs:range xsd:anyURI;
     .

    otto:logout_uri a rdf:Property ;
     rdfs:range xsd:anyURI;
     .

    otto:entity_category a rdf:Property ;
     rdfs:range xsd:anyURI;
     .
```

The question is what would the federation operator publish about OpenID Connect relying parties. 
Mike proposed that the URI's are interesting, because even though an RP can register these with
the OP, trust can be enhanced by the federation publishing (and sign) this information. 

There is also precedent in SAML federations for asserting a category for the relying party,
such as "Research and Scholarship" in the higher education federations.

Mike was concerned that unlike in SAML federations where "entityID" uniquely identifies 
an SP, OpenID Connect has no equivalent single identifier. The closest thing is "redirect_uris".
Perhaps we need to introduce the equivalent of an "entityID"?

## Deliverables for next week

Yuriy is going to look at exporting our schema to a website like http://schema.org 
Jeff mentioned last week that there was a script to accomplish this. 

Mike is going to work on a first draft of moving some of the content to rfc-xml format
so we have something that looks like a spec by IIW.

## Next Meeting - Weds 4/13/2016 9am PT

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

