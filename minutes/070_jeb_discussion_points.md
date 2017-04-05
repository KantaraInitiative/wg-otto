
“Metadata for the OASIS Security Assertion Markup Language (SAML) V2.0
– Errata Composite.” Errata Composite. SAML Specifications. OASIS,
December 1,
2009. https://www.oasis-open.org/committees/download.php/35391/sstc-saml-metadata-errata-2.0-wd-04-diff.pdf.

Sasaki, Felix. “Linked Data and Schema.org: Crossing the Language
Chasm with Terminological Assets.” Magazine. Tcworld, February
2017. http://www.tcworld.info/e-magazine/content-strategies/article/linked-data-and-schemaorg-crossing-the-language-chasm-with-terminological-assets/.

Discussion For a federation to define various terms, do we want to
just iterate over multiple properties (contactTypeLabel, type text)?
Or have a single property contactTypeList? If a list, is the type text
and we define that it is a JSON array of strings? Or use the
(overkill?) of [ItemList](https://schema.org/ItemList)? If we need to
have notes of required and defined types, the ItemList type might be
useful. I lean towards ease: a contactTypeList where it's stated that
it's a JSON array of strings. I think we need to define a type of JSON
array to support OpenID Connect metadata, so there's that. '/


Discussion: Re Localization: SAML specifies "md:localizedNameType". See discussion
at [Sasaki] On the other hand, the OpenID spec gives the follwoing as
an example: 

   "client_name": "My Example", 
   "client_name#ja-Jpan-JP": "ク ライアント名", 

It seems we could just have "name" and community
practice could establish the localization?




Registration Authority
----------------------

| Property | Expected Type | Description | Questions/Issues        |
|----------|---------------|-------------|-------------------------|
|<td colspan="3"> Properties from [Thing](https://schema.org/Thing)</td>
|name      |text           |1:*; 
|url       |URL            |1:*; 
|<td colspan="3"> Properties from [Organization](https://schema.org/Organization) </td>
|contactPoint|[ContactPoint](https://schema.org/ContactPoint) |1:*; 
|<td colspan="3">Properties from Registration Authority</td>
|contactType? |?           |0:?; (TBD single repeated, JSON array, object w/all) federation's terms for contact point types.
|registers | Federation, Participant, or Entity |0:*


Discussion contactTypeTBD: Can a RA require all federations &
participants to have a minimum type of contactPoint? If so, see
Discuss1.





Federation
-----------

Federation inherits from [Organization](https://schema.org/Organization) many useful values


| Property | Expected Type | Description  
|----------|---------------|--------------------------------------------|
|<td colspan="3"> Properties from [Thing](https://schema.org/Thing)</td>
|name      |text           |1:*; Compare to the SAML OrganizationDisplayName: "One or more ... names that are suitable for human consumption." |                  
|url       |URL            |1:*; Compare to the SAML OrganizationURL: "One or more ... URIs that specify a location to which to direct a user for additional information. "
|<td colspan="3"> Properties from [Organization](https://schema.org/Organization) </td>
|contactPoint|[ContactPoint](https://schema.org/ContactPoint) |1:*; Compare to 2.3.2.2 Element <ContactPerson>. ContactPoint/contactType should be used
|member    |[Organization](https://schema.org/Organization) |0:*; The participants who are members in good standing of the federation.
|<td colspan="3">Properties from Federation</td>
|claim?    | UserClaim?    |0:?; (TBD single repeated, JSON array, object w/all) federation's claims about users.
|contactType? |?           |0:?; (TBD single repeated, JSON array, object w/all) federation's terms for contact point types.
|federates |Entity         |0:*; Services the federation has accepted.
|scope?    |Scope?         |0:?; (TBD single repeated, JSON array, object w/all) federation's supported scopes


Discussion contactType?, Scope?,UserClaim?: See Discuss1.

Discussion: Should the contactType enumeration from SAML be expressed as a ground with the expectation that federations may extend the enumeration? (That is: technical, support, administrative, billing, and other.)



Participant
-----------
Metadata requirements for Participant may be compared to 2.3.2.1 Element <Organization>, 2.3.2.2 Element <ContactPerson> in ["Metadata..."]


| Property | Expected Type | Description  
|----------|---------------|--------------------------------------------|
|<td colspan="3"> Properties from [Thing](https://schema.org/Thing)</td>
|name      |text           |1:*; Compare to the SAML OrganizationDisplayName: "One or more ... names that are suitable for human consumption." |                  
|url       |URL            |1:*; Compare to the SAML OrganizationURL: "One or more ... URIs that specify a location to which to direct a user for additional information. "
|<td colspan="3"> Properties from [Organization](https://schema.org/Organization) </td>
|contactPoint|[ContactPoint](https://schema.org/ContactPoint) |1:*; Compare to 2.3.2.2 Element <ContactPerson>. ContactPoint/contactType should be used
|memberOf|[Organization](https://schema.org/Organization) |0:*; The federation organization.
|<td colspan="3">Properties from Participant</td>
|operates  | Entity        | 0:*; Services the Organization operates
|registrationAuthorityIdentifier |TBD | 0:1; identifier from registration authority
|registeredBy |RegistrationAuthority|0:1; the registrar that has registered the participant organization. 

Discussion: should url be required or left to the Federation?

Discussion: Should contact person be required or left optional to the federation?


Discussion: Is there a state for the metadata of an organization when an organization registers with a Fed Operator but hasn't joined the Federation such that memberOf absent?


Discussion: given the organization may have entities that are NOT in the federation, it seems possible that the list of entities could be all the entities for the organization, not just those federated by any federation.



| Property | Expected Type | Description  
|----------|---------------|--------------------------------------------|
|<td colspan="3"> Properties from [Thing](https://schema.org/Thing)</td>
|name      |text           |1:*; Compare to the SAML OrganizationDisplayName: "One or more ... names that are suitable for human consumption." |                  
|url       |URL            |1:*; Compare to the SAML OrganizationURL: "One or more ... URIs that specify a location to which to direct a user for additional information. "
|<td colspan="3">Properties from Entity</td>
|federatedBy |Federation   |0:*
|operatedBy | Participant  |1
|registrationAuthorityIdentifier | ?? |0:1
|registerdBy|RegistrationAuthority |0:1


Fundamental Otto Relationships
------------------------------
O.Participant  <-->  O.Federation: member/memberOf

O.Participant  <-->  O.Entity : operates/operatedBy
O.Federation <-->  O.Entity : federates/federatedBy

O.Entity --> "1" O.Metadata : additionalType

Other Otto Classes 
------------------
* abstract class O.Metadata
* Class O.AuthContextClass
* Class O.UserClaims
* Class O.Scopes
* Class O.JSONArray {
  Define per §7  https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf
}
