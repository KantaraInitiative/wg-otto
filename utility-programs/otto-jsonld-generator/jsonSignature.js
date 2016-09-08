{
    "@id": "https://ra.org/federations/{id}",
    "@context": "https://ra.org/schema/otto/federation.jsonld",
    "name": "OAuth 2 Federation",
    "entities": [{
        "@context": "https://ra.org/schema/otto/entity/connect_rp.jsonld",
        "@id": "https://ra.org/entity/{eId}",
        "name": "Gluu Server Ce-dev Client",
        "id": "https://ce-dev.gluu.org/rp",
        "organization": "https://gluu.org/otto/organization"
    }, {
        "@context": "https://ra.org/schema/otto/entity/connect_op.jsonld",
        "@id": "https://ra.org/entity/{oId}",
        "name": "Gluu Server Ce-dev",
        "id": "https://ce-dev.gluu.org",
        "organization": "https://gluu.org/otto/organization"
    }, {
        "@context": "https://ra.org/schema/otto/entity/uma_rs.jsonld",
        "@id": "https://ra.org/entity/{id}",
        "name": "Gluu Resource Server",
        "id": "https://ce-dev.gluu.org/rs",
        "organization": "https://gluu.org/otto/organization"
    }],
    "federations": [
        "https://ra.org/federations/{id}"
    ],
    "organization": {
        "@id": "https://ra.org/organization/{oId}",
        "@context": "https://ra.org/schema/otto/organization.jsonld",
        "name": "MyOrganization"

    }
}
