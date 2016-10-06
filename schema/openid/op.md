# OpenID Provider

## Non-normative JSON

{
    "@id": "https://ra.org/federation_entity/d8e89c32-325f-40c5-ab79-eabd6b27b4ae",
    "@context": "https://kantarainitiative.org/otto/schema/saml_idp.json",
}

{
     "redirect_uris": ["https://example.com/rp1"],
     "metadata_statements": 
     [
       {"scope": "openid eduperson",
         "response_types": ["code"],
         "metadata_statements" : 
         [
           { "contacts": ["dev_admin@example.com"],
             "logo_uri": "https://example.com/logo.jpg",
             "policy_uri": "https://example.com/policy.html",
             "tos_uri": "https://example.com/tos.html"
           }
         ]
       }
     ]
   }
