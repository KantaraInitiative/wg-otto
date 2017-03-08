# Participant

## Properties from Participant

|Property|Expected Type|Description|
|----|----|----|
|operates|[Entity](https://OTTO/Entity)|Service provided by the Participant|
|registeredBy|[RegistrationAuthority](https://OTTO/RegistrationAuthority)|The Registration Authority which issued the Participant identifier|
|participantIdentifier|String|The id issued by the registration authority to this Participant|
|federation|[Federation](https://OTTO/Entity)|The federation to which this Participant belongs|
|organization|[Federation](https://schema.org/Organization)|The organization that signed the Participant Agreement with the federation.

## Properties from [Organization](https://schema.org/Organization)

|Property | Expected Type | Description|
|----|----|----|
|name|String|Name of the participant|
|memberOf|[Frederation](https://OTTO/Federation)|Link to Federation|