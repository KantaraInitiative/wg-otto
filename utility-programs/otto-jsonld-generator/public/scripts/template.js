var federationTemplate = {
	"@id": "https://ra.org/federations/{fid}",
	"@context": "https://ra.org/schema/otto/federation.jsonld",
	"name": "OAuth 2 Federation",
	"entities": [
		{
			"@context": "https://ra.org/schema/otto/entity/connect_rp.jsonld",
			"@id": "https://ra.org/entity/{eid1}",
			"name": "Gluu Server Ce-dev Client",
			"id": "https://ce-dev.gluu.org/rp",
			"organization": "https://gluu.org/otto/organization"
		},
		{
			"@context": "https://ra.org/schema/otto/entity/connect_op.jsonld",
			"@id": "https://ra.org/entity/{eid2}",
			"name": "Gluu Server Ce-dev",
			"id": "https://ce-dev.gluu.org",
			"organization": "https://gluu.org/otto/organization"
		},
		{
			"@context": "https://ra.org/schema/otto/entity/uma_rs.jsonld",
			"@id": "https://ra.org/entity/{eid3}",
			"name": "Gluu Resource Server",
			"id": "https://ce-dev.gluu.org/rs",
			"organization": "https://gluu.org/otto/organization"
		}
	],
	"federations": [
		"https://ra.org/federations/{fid}"
	],
	"organization": {
		"@id": "https://ra.org/organization/{oid}",
		"@context": "https://ra.org/schema/otto/organization.jsonld",
		"name": "MyOrganization"
	}
};


var organizationTemplate ={
  "@id":"https://ra.org/organization/{oid}",
  "@context": "https://schema.org",
  "@type":"Organization",
   "name":"MyOrganization",
};

var openIDConnectOPTemplate ={
  "@id":"https://ra.org/federation_entity/{eid}",
  "@context": "https://ra.org/schema/otto/entity/connect_op.jsonld",
  "name": "Gluu Server Ce-dev",
  "id":"https://ce-dev.gluu.org",
  "organization":"https://gluu.org/otto/organization"
};

var openIDConnectRPTemplate ={
  "@id":"https://ra.org/federation_entity/{eid}",
  "@context": "https://ra.org/schema/otto/entity/connect_rp.jsonld",
  "name": "Gluu Server Ce-dev Client",
  "id":"https://ce-dev.gluu.org/rp",
  "organization":"https://gluu.org/otto/organization"
};

var umaRSTemplate ={
  "@id":"https://ra.org/federation_entity/{eid}",
  "@context": "https://ra.org/schema/otto/entity/uma_rs.jsonld",
  "name": "Gluu Resource Server",
  "id":"https://ce-dev.gluu.org/rs",
  "organization":"https://gluu.org/otto/organization"
};

var umaASTemplate={
  "@id":"https://ra.org/federation_entity/{eid}",
  "@context": "https://ra.org/schema/otto/entity/uma_as.jsonld",
  "name": "Gluu AS",
  "id":"https://ce-dev.gluu.org/as",
  "organization":"https://gluu.org/otto/organization"
};

var umaROTemplate = {
  "@id":"https://ra.org/federation_entity/{eid}",
  "@context": "https://ra.org/schema/otto/entity/uma_ro.jsonld",
  "name": "Gluu RO",
  "id":"https://ce-dev.gluu.org/ro",
  "organization":"https://gluu.org/otto/organization"
};

var oauth2OPTemplate ={
  "@id":"https://ra.org/federation_entity/{eid}",
  "@context": "https://ra.org/schema/otto/entity/oauth_op.jsonld",
  "name": "Gluu oauth provider",
  "id":"https://ce-dev.gluu.org/oauth_op",
  "organization":"https://gluu.org/otto/organization"
};

var oauth2RPTemplate={
  "@id":"https://ra.org/federation_entity/{eid}",
  "@context": "https://ra.org/schema/otto/entity/oauth_rp.jsonld",
  "name": "Gluu oauth rp",
  "id":"https://ce-dev.gluu.org/oauth_rp",
  "organization":"https://gluu.org/otto/organization"
};
