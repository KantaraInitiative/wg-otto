# Participant

## Properties from Participant

|Property|Expected Type|Description|
|----|----|----|
|operates|https://[OTTO]/Entity|Service provided by the Participant|
|registeredBy|http://[OTTO]/ra|The Registration Authority which issued the Participant identifier|
|participantIdentifier|String|The id issued by the registration authority to this Participant|

## Properties from [Organization](https://schema.org/Organization)

|Property | Expected Type | Description|
|----|----|----|
|name|String|Name of the participant|
|memberOf|http://[OTTO]/federation|Link to Federation|
|federations|http://[OTTO]/federation|It represents list of the federations who's owner is the organization|