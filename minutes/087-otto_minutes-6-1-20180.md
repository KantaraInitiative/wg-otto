OTTO WG Minutes: 6/1/2018
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Judith Bush
 - Meg Joshi

## Discuss Andreas Solberg's article on OAuth federation

Andres Solberg's blog "The Future of Identity Federations"

* [Linkedin](https://www.linkedin.com/pulse/future-identity-federations-andreas-solberg/)
* [pdf](https://github.com/KantaraInitiative/wg-otto/raw/master/files/solberg_andreas_The%20future%20of%20Identity%20Federations%20_%20LinkedIn.pdf)

### Comments

```
{
  "kty": "RSA",
  "kid": "https://serviceprovider.org/application-1",
  "n": "l7r...W9w",
  "e": "AQAB"
}
```

* I like the idea of using the `kid` as the stable identifier for the entity. Like SAML entityID, it's just a string.


* `All entities must have a unique globally unique persistent identifier.` *i.e.* an entityID--agreed! But it's not clear what URI to use as the entityID for a client. OTTO proposes that we register entities at a Registration Authority--and this issues the unique URI. Self-asserted SAML entityID's are working fine, and organizations use either URI's or URN's depending on their preference. However, self-asserted identifiers are not always resolvable.  

*  Mike disagrees with the idea of federation "models"--i.e. the discussion of a meshed federation versus a hub and spoke federation. It's simply that  different services may be offered by the federation, depending on how much the federation is trusted and cost.

* Short on details about inter-federation trust. Also what if an entity is registered with more then one federations--what's the root of trust? And what about operators that need automation? For example, an IT services company that operates IDP's for many institutions. 

* Using entityID as client_id is not going to work because you
can't request client_id in the [client metadata](http://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata) during OpenID Connect client registration. Even if you define an extension client metadata claim ("requested_client_id" ?) This is very likely too big of a change for existing implementations (i.e. changing the primary key of the client).

* The idea that an entity just pre-configures the trust root is a little vague. Is this the federation keys? By `cacerts`, I think he means a bundle of trusted certificates (e.g. `cacerts` in java keystore format). So perhaps he means there could be a bunch of trusted keys (i.e. all the federations that you trust)

* Discovery services of the federation are a little vague--exactly how would one query the federation? OTTO addresses this by specifying a search syntax at the /federation endpoint.

```
Then obtain trust information, typically a signed statement from a third party, but obtained as part of the configuration. And then validate the trust against the locally configured trust root.
```

* Judith pointed out that `obtain trust information` uses "trust" perhaps in a different way. Mike suggested maybe replace trust with "configuration", "metadata".

* Using OpenID Connect discovery based on e-mail, while good for consumer IDPs where they release a public identifier anyway, it release too much PII for many transactions. (Even us Americans don't like that idea!)

* Andreas points to need for federated authorization (not just authentication).

### Mike's initial comments on refeds mailing List

Andreas,

Just read your blog "The future of Identity Federations":
  https://www.linkedin.com/pulse/future-identity-federations-andreas-solberg/

I think you're on the right track. I'd encourage you to join the Kantara OTTO WG: https://kantarainitiative.org/confluence/display/OTTO

I have some questions about the design:

1. A stable client identifier is basically like the entityID in SAML.  For the OP, the configuration endpoint (i.e. https://hostname/optional-path/.well-known/openid-configuration) is a natural entityID.  For a web site client, a stable URL is no problem. But mobile and javascript client-side applications use localhost as the redirect_uri. And a client can have multiple redirect_uri's. There is no natural URI identifier for the client.

2. How do you know no other domain has registered a certain entityID? You're a little vague on what you see as the role of the federation, and what API's (and consequently data structures) would be needed to achieve your goal.

3. I'm not ready to throw AS issued client_id's under the bus yet. The goal is to have a small impact on the OP's. Personally, I think if we introduce more options for client registration, that is a better way to go. I think we need a more specific OpenID Connect  profile that deals with how an OP should handle a client registration request with an OAuth software statement, which could contain metadata statements.

4. Your solution does not address inter-federation, or how federations would become more searchable. For example, what if you want to find out all the R&S websites in Sweden in multiple federations?

I have a few more objections to your proposal, but I'm running out of steam!  We'd be willing to talk through your ideas in the OTTO WG if you want to present them.

- Mike Schwartz

## Next Meeting Friday 6/8 9am US Eastern Time

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
`
