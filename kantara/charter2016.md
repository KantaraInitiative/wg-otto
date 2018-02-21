# Kantara OTTO Charter

## WG NAME

Open Trust Taxonomy for OAuth2 (OTTO)

## PURPOSE

The OTTO working group seeks to define an interoperable technical solution that will enable the operation of federations 
within a trusted ecosystem of autonomous entities, creating a foundation of trust, and lowering the cost of 
collaboration. An underlying layer, independent from protocols, will enable the sharing of common data elements, and a 
mechanism to define relationships. The goal is to allow an entity to be part of multiple federations, which are 
supporting multiple technology stacks. 

In parallel, the working group will develop a JSON model for the creation of multi-party federations between OAuth2 
entities. The group may also define a set of APIs and related data structures enabling an OAuth entity to manage 
which entities it trusts and to discover members of the federation and details of the services.

The Work Group is seeks to bring together collaborators from existing SAML federations, PKI federations and the OAuth 
community to collaborate on a draft solution that meets their shared goals in this area and takes into account lessons 
learned from the past years.

Specifically, this Work Group is responsible for:
* Developing a set of use cases and requirements that are specific enough to guide the specification design work
* Developing a set of modular draft specifications meeting these use cases and requirements
* Overseeing the contribution of each resulting draft specification to a standards-setting organization

The group will target completion of the specifications by 12/31/16.

## SCOPE

It is anticipated that JSON-LD will be the linked data structure to define the underlying data and relationships. 
JSON-LD signing may be used to insure the integrity of the information. 

Existing SAML Federation XML structures will inform this work, but the data structures will not be expressed in XML but 
in JSON. The functions supported in existing SAML federations should be supported. Additionally, support for a more 
efficient and scalable discovery process and dynamic integration process will be considered.

The APIs and data structures will enable discovery of the members of the federation and details about their services, 
key material and technical capabilities. The final scope will be refined after consideration of the use cases. 

## DRAFT TECHNICAL SPECIFICATIONS

The following technical specifications should be produced, with modular spec boundaries subject to change.  The 
specifications will then be submitted to appropriate standards bodies for further work and completion:
 
- Open Trust Taxonomy for OAuth2 Use Cases
- Open Trust Taxonomy for OAuth2 Core Metadata and Protocol

## LEADERSHIP

- Co-Chair, Michael Schwartz
- Co-Chair, Janusz Ulanowski, HEAnet

## AUDIENCE

Existing federation operators and any group of autonomous organizations that need to establish common policies and 
procedures to establish a basis for trust and faciliate electronic collaboration.

## DURATION 

Working Group would decide whether to dissolve, or consider future enhancements, after the release of the first 
version of the standard.

## IPR POLICY 

Option Patent and Copyright Reciprocal Royalty Free with Opt-Out to (RAND)

## RELATED WORK AND LIAISONS 

There is an existing multi-party federation standard for SAML. The WG will also leverage the UMA 1.0.1 and 
OpenID Connect 1.0 standards, although no specific liaison is needed. The work of the JSON-LD W3C group will
also be incorporated. There may be some synergies with the OASIS Trust Elevation TC regarding implementation guidelines 
for authentication to enable trust elevation across federation members. 

## CONTRIBUTIONS: 

none

## PROPOSERS

- Michael Schwartz
- Keith Hazelton, Internet2
- Janusz Ulanowski, HEAnet
- Rainer Hörbe
