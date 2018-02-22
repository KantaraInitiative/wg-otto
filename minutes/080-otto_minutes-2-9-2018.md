OTTO WG Minutes: 2/9/2019
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Keith Hazelton

## Discussion of SAML Vocabulary

 Keith's new draft for the SAML Vocab is here:
  https://cdn.rawgit.com/KantaraInitiative/wg-otto/695db686/html/otto-saml-1.0.html

 Mike's Comments on "SAML Identity Provider Endpoint"

 1. Make property names camelCase with no spaces

 2. Should "Expected Type" generally map to an XML element?

 3. The Expected Type for the "UI metadata" property of the SAML Identity Provider Endpoint would be UIInfo, with reference in the description to
 http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-metadata-ui/v1.0/cs01/sstc-saml-metadata-ui-v1.0-cs01.html#__RefHeading__10385_1021935550

 4. Keys: I think we should just bite the bullet, and use the XML here. We can't assume SAML people will publish JWKS_URI or provide a JWKS. Should this be instance or array of SAML metadata KeyDescriptor ?

 5. Protocols: Is this saml version 1 or 2? "Protocols" could be misleading. Could it be "samlVersion" ?

 6. Registrar: delete / derivable from Entity

 7. "Identity Provider Binding". The equivalent SAML element would be "SingleSignOnService", for example:
 <SingleSignOnService
   Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST"
   Location="https://idp.acme.edu/SAML2/POST/SSO"/>

 What about something like this:
   "samlSsoHttpPost":"https://idp.acme.edu/SAML2/POST/SSO"
   "samlSsoPostSimpleSign": "https://idp.acme.edu/SAML2/POST-SimpleSign/SSO"
   "samlSsoRedirect":  "https://idp.acme.edu/SAML2/Redirect/SSO"

 The SingleSignOnService "binding" attribute allows you to reference some pretty esoteric stuff, like who needs the "urn:mace:shibboleth:1.0:profiles:AuthnRequest" anymore? We should focus on the common use cases first anyway.

 8. Missing NameIDFormat?

 TODO:

 * We need to check if we can represent an actual SAML metadata file in OTTO, and then convert it back.
 * Need to create context schema files and check into https://github.com/KantaraInitiative/wg-otto/tree/master/context
