OTTO WG Minutes 9/16/15
STATUS: Approved

## Voting Members Attending:
 - Michael Schwartz
 - Janusz Ulanowki
 - Judith Bush
 
## Non-voting members
 - Rainer Hoerbe

## Topics discussed

### Voting is open for 9/16/2015 - 9/22/2015

Please vote. You should have received the email with the link.

### Nominations are still open for
 - Crypto Guru:
 - Project Manager:

### Discussion of SAML Metadata

The federation metadata standard for SAML is defined here:
  https://www.oasis-open.org/committees/download.php/35391/sstc-saml-metadata-errata-2.0-wd-04-diff.pdf
  
Metadata Schema is here:
 http://docs.oasis-open.org/security/saml/v2.0/saml-schema-metadata-2.0.xsd
 
We started looking at the SAML metadata for InCommon. For the first part, it provides
information about the integrity and authenticity of the document. 

In a blockchain solution, integrity is assured. Authenticity is a question we're going to 
defer to later. 

SAML : 
 - entityID : Would this be the `iss` in OpenID Connect? 
    <EntityDescriptor entityID="https://carmenwiki.osu.edu/shibboleth">
    
 - RegistrationInfo
    <mdrpi:RegistrationInfo registrationAuthority="https://incommon.org"/>
    
 - EntityAttributes
    <mdattr:EntityAttributes xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion">
      <saml:Attribute Name="http://macedir.org/entity-category" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
        <saml:AttributeValue>http://id.incommon.org/category/research-and-scholarship</saml:AttributeValue>
        <saml:AttributeValue>http://refeds.org/category/research-and-scholarship</saml:AttributeValue>
        <saml:AttributeValue>http://id.incommon.org/category/registered-by-incommon</saml:AttributeValue>
      </saml:Attribute>
    </mdattr:EntityAttributes>
    
 - Signing and Encryption Keys

 - Organization Data + Contact Data 
    <Organization>
      <OrganizationName xml:lang="en">The Ohio State University</OrganizationName>
      <OrganizationDisplayName xml:lang="en">Ohio State University</OrganizationDisplayName>
      <OrganizationURL xml:lang="en">http://www.osu.edu/</OrganizationURL>
    </Organization>
    <ContactPerson contactType="support">
      <GivenName>IT Service Desk</GivenName>
      <EmailAddress>8help@osu.edu</EmailAddress>
    </ContactPerson>
    <ContactPerson contactType="technical">
      <GivenName>Authentication Support</GivenName>
      <EmailAddress>webauth-admin@lists.service.ohio-state.edu</EmailAddress>
    </ContactPerson>
    <ContactPerson contactType="administrative">
      <GivenName>Authentication Support</GivenName>
      <EmailAddress>webauth-admin@lists.service.ohio-state.edu</EmailAddress>
    </ContactPerson>
    <ContactPerson xmlns:icmd="http://id.incommon.org/metadata" contactType="other" icmd:contactType="http://id.incommon.org/metadata/contactType/security">
      <GivenName>Security Response Team</GivenName>
      <EmailAddress>security@osu.edu</EmailAddress>
    </ContactPerson>
  
  - Endpoints: Discovery, Registration, Logout, etc.
  
  
Judith says its important to have up to date contact info. Rainer suggested that perhaps we should align
with the DNS schema for these contacts (technical / admin). Perhaps we need to add additional contact information
for security incident response. 

This whole section was inserted by the federation operator, specified as the 
registrationAuthority, and these attributes were corrorated by the federation operator.

MQP is REST format to query by entity id. 

Maybe look into linked data JSON format. But linking is not the whole problem, partially retrieving and quering
are also useful. 

Whatever graph or linked database we're using, we should be able to rebuild it from scatch from the blockchain.
But if one is just a transformation of the blockchain to enable better searchibilty its ok. The blockchain also
has the history, but the current is more optimized for memory. 