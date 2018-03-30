OTTO WG Minutes: 2/22/2018
STATUS: Draft

## Voting Members Attending:
 - Mike Schwartz
 - Keith Hazelton

## SAML working session

- Transposed in xml: `samlEntityDescriptor` in "SAML Entities" table
- `string` --> `Text`
- move `validUntil` to OTTO Entity ? Could be useful for OpenID too...
- dateTime --> `Date`
- Upper Case Class class names
- Remove `entity` from  samlEntityDescriptor
- `samlEntityCategory` - See [Refeds Categories page](https://wiki.refeds.org/display/ENT/Entity-Categories+Home)
- supportedSamlVersion - this is URI that specifies either 1.1 or 2 ?
So use an Enumeration ?
- samlServiceProviderEndpoint --> SamlServiceProvider
- SamlServiceProvider: "Requested Attributes"-->`supports`, might be necessary
to define SamlSchema which subclasses Schema. For example: sam2URI property?
-  Mike to send updated calendar invitation for Friday 8am starting 3/2.
