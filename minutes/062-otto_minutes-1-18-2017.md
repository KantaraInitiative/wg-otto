OTTO WG Minutes: 1/18/2017
STATUS: Approved

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Meg Joshi

## Discussion of FIDES development to support OpenID Connect federation

As mentioned previously, Gluu has started development on a
Kantara/Rutgers/DHS project to develop a federation for the
emergency responder community. Meg has been working on this
project. The goal is that it will provide a concrete use case against
which we can test our ideas. FIDES project is MIT license and hosted on
[Github](https://github.com/GluuFederation/fides)

We are proceeding with adoption of the OIDC federation draft.

Because we need an OpenID Provider (OP) to test against, we added some
feature requests to Gluu's oxAuth project:

 - [Add signing_keys_uri](https://github.com/GluuFederation/oxAuth/issues/445)
 - [Add signed_jwks_uri](https://github.com/GluuFederation/oxAuth/issues/446)
 - [Publish federation metadata_statement_uris](https://github.com/GluuFederation/oxAuth/issues/447)

We will have to mock these capabilities until the features are
available in oxAuth.

We talked about the workflow for registration of an organizational
administrator.

 1. Person at organization provides configuration URL of their OP,
    for example, https://example.com/.well-known/openid-configuration
 2. FIDES performs dynamic client registration, sends person for
    authn, stores pairwise subject identifier and issuer in session.
 3. FIDES presents a form that asks for person's name, email,
    mobile number. Creates a record in FIDES OP via SCIM with
    sub and issuer from previous step. This information can be used
    for subsequent authn at the home OP.
 4. FIDES presents a form for organizational registration.
 5. FIDES admin reviews and approves the registration, specifying
    to which federations the organization and OP should be added.
 6. FIDES app sends email notification of URI where metadata statement
    is published.

Side note: person can be authenticated via a two-step flow. Step 1:
request email; Step 2: lookup email, redirect to home OP, verify sub
identifier.

What we'll hopefully be able to show soon is how using FIDES an
organization can register it's signing_keys, and how the federation
operator can return signed metadata_statements.
