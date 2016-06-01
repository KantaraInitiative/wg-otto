OTTO WG Minutes 5/4/16
STATUS: Final

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Keith Hazelton 
 - Judith Bush
 - Janusz Ulanowski

## Special Guest
 - Collin Wallis

## Discussion of IIW

Mike and Judith both attended IIW. Among others, Ken Klingenstein and Roland attended the 
OTTO presentation. Mike also attended Roland's presentation on his OpenID Connect
federation proposal: https://github.com/rohe/pyoidc/blob/master/oidc_fed/oidcfed.txt
Roland wants to continue developing this standard at the OpenID Foundation, and he
is enlisting Mike Jones (Microsoft) and John Bradley (Ping) to help him. They had 
a private discussion about it, and there will be some changes to the trust model. 
Perhaps the four-key structure will be simplified. Roland did not have any ideas about
how to identify RP's. He had an idea using the signature of the private key, but then 
recanted when pushed on the topic, and said maybe he would include an entityId.

## Discussion of OAuth 2 Token-Based Federation

Mike proposed an idea for the OTTO Wg to collaborate with Igor Zboran on his idea for
OAuth2 token federation: 
https://github.com/token-7/token7-specs/blob/master/draft-token7-oauth-token-based-federation-00.txt

One problem with taking on this work is that it does not involve a federation operator. 
The parties have to manage trust 1:1. For this reason, it may not be a good fit with the
OTTO WG.

## Discussion of Schema

Yuiry started to define UMA entities, check the end of the proposal doc:
 https://github.com/KantaraInitiative/wg-otto/blob/master/docs/proposal/proposal.md

Janusz started to work on SAML entities. He proposed cross references: for example who
was the registrar, and to what federations does this entity belong. 

```
{  
   "@context":"https:\/\/edugate.heanet.ie\/rr3\/test2\/test\/contexts\/RegistrationAuthority.jsonld",
   "@id":"https:\/\/edugate.heanet.ie\/rr3\/test2\/test\/entityProvider\/aHR0cHM6Ly9pZHAuaGVhbmV0LmllL2lkcC9zaGliYm9sZXRo",
   "@type":"entityProvider",
   "entityID":"https:\/\/idp.heanet.ie\/idp\/shibboleth",
   "validUntil":"2016-05-11T16:27:39Z",
   "registrar":{  
      "@id":"https:\/\/edugate.heanet.ie\/rr3\/test2\/test\/registrationauthority",
      "name":"http:\/\/www.heanet.ie"
   },
   "organization":{  
      "@type":"Organization",
      "legalName":"HEAnet Limited.",
      "sameAs":"https:\/\/idp.heanet.ie\/support.html"
   },
   "alternativeMetadata":[  
      {  
         "url":{  
            "@type":"@id",
            "@value":"https:\/\/edugate.heanet.ie\/rr3\/metadata\/service\/aHR0cHM6Ly9pZHAuaGVhbmV0LmllL2lkcC9zaGliYm9sZXRo\/metadata.xml"
         },
         "supportedContentTypes":[  
            "application\/samlmetadata+xml",
            "application\/xml"
         ]
      }
   ],
   "protocols":[  
      "SAML"
   ],
   "roles":[  
      "IDPSSODescriptor"
   ],
   "memberOf":[  
      {  
         "@id":"https:\/\/edugate.heanet.ie\/rr3\/test2\/test\/federation\/RWR1Z2F0ZQ~~",
         "@type":"Federation",
         "name":"Edugate"
      },
      {  
         "@id":"https:\/\/edugate.heanet.ie\/rr3\/test2\/test\/federation\/SEVBbmV0",
         "@type":"Federation",
         "name":"HEAnet"
      },
      {  
         "@id":"https:\/\/edugate.heanet.ie\/rr3\/test2\/test\/federation\/ZWR1R0FJTg~~",
         "@type":"Federation",
         "name":"eduGAIN"
      },
      {  
         "@id":"https:\/\/edugate.heanet.ie\/rr3\/test2\/test\/federation\/SEVBbmV0IE1lbWJlciBJbnN0aXR1dGlvbnM~",
         "@type":"Federation",
         "name":"HEAnet Member Institutions"
      }
   ]
}

```

## Discussion on Registration Authority

We have a two-tier structure in our current working proposal, 
https://github.com/KantaraInitiative/wg-otto/blob/master/docs/proposal/proposal.md

- Tier 1: Registration Authority (RA). Organizations register services at the Registration
Authority, and an identifier is returned. No trust is implied by the RA. It simply
registers the information, and returns an identifier (in the context of the domain
controlled by the RA) for the entity.

- Tier 2: Federation Operator (FO). Organizations use the identifier issued by the RA
to register a service. At this point, the FO vets the entity. Has the organization
signed an agreement, was the fee paid, does the service meet the criteria for membership,
are the required trustmarks supported--the FO can consider this and more before 
agreeing to accept an entity in the federation. One difference is that the FO does not
need to validate the metadata, because it is not self asserted--it is supplied by the RA.
This is different from SAML, where self-asserted metadata is frequently wrong because
it is hand edited.

Discussion ensued about whether this structure makes sense. There is no equivalent of the
RA in the InCommon federation. The alternative is that the organization can self-host
the entity metadata. 

We should try to achieve consensus on this design decision, and perhaps even put it 
to a vote.

## Discussion on Scope / Use Cases

Keith expressed concern that scope was creeping at OTTO. We may want to revisit the use
cases defined here: https://github.com/KantaraInitiative/wg-otto/tree/master/docs/use-cases
and perhaps move some of the use cases that are not core to an "old" folder. And flush out
the use cases which we deem in scope. 

Mike summarized his view of what's in scope:
 - Federation Operator enhances trust offered by TLS that the keys and endpoints of the 
 entity are correct.
 - Support for common security services: OpenID Connect, UMA, SAML, PKI
 - Method to enable FO's to define new services for their industry specific API's
 - Mechanism to define schema for federation

It may help after a review of the use cases to write a clear introduction in the
spec that sets clear expectations about what problems we're addressing.

## Discussion on Scope / Use Cases

Mike also expressed concern that one of the issues we're struggling with is basically
how to identify entities--a question to which there is no right answer. All the 
answers involve compromises. SAML uses entityID, but this information is not 
resolvable. It may be a URI, but there is no expectation about what information
that URI would return (if anything). And the entityID may not even be a URI--it could
be a URN, or any other strategy to insure a unique string within the federation.

The idea that a RA would issue identifiers creates a requirement for a new 
federation operator infrastructure. However, it enables an organization to register 
entities with more than one RA, and perhaps register different information for each.
For example, Gluu is working with a large enterprise that operates in both the 
automotive and aerospace industry. They may register the same service with two 
different RA's in different ways.


## Next Meeting - Weds 5/18/2016 9am PT / 5pm GMT

  **NO MEETING 5/11 DUE TO European Identity Conference (EIC)!!!**

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

