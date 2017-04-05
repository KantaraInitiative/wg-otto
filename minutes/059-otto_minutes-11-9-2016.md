OTTO WG Minutes: 11/9/2016
STATUS: Approved

## Voting Members Attending:
 - Mike Schwartz
 - Yuriy Zabrovarnyy
 - Meg Joshi
 - Janusz Ulanowski
 - Judith Bush
 - Keith Hazelton

## Discussion on call tomorrow with Leif

There has been a thread on refeds about whether OTTO makes sense. Leif
agreed to schedule a call to discuss. I sent the following note to the
refeds list, which summarizes the purpose:

```
-------- Original Message --------
Subject: Reminder: Meeting tomorrow re: OTTO / federation trust mgt
Date: 2016-11-09 14:56
From: Mike Schwartz
To: Leif Johansson
Cc: refeds List

Leif and refeds community,

Just a reminder there is a call to discuss OTTO tomorrow, Thursday at the 10:00 US Central Time (my time...), which I think converts to the following:
  10:00 AM US CT
  11:00 AM US ET
  4:00  PM GMT
  5:00  PM CET

From my perspective, what I've gleaned is that there are two separate issue:
  1. Scalable trust management (distributing public keys with increased trust v. TLS)
  2. Discovery (how can applications automate retreival of information about federation entities)

I was hoping that the call tomorrow would focus on #1.

The thesis of OTTO is that linked data (JSON-LD), provides a compelling solution for the distribution of keys that is more scalable then the current approach to interfederation, which requires a lot of copying.

It seemed like Leif has doubts about this approach, or perhaps has a better idea of how to solve the challenge... that's what I'd really like to hear.

Meeting details are below. (Linux users, I think there is a Chrome Plugin, there is also and Android/IOS App). Please join the call if you would like to contribute or just listen. All are welcome... the G2M conference will take up to 25 people.

Thanks in advance to Leif and anyone who contributes!

1.  Please join my meeting.
https://global.gotomeeting.com/join/120101757

2.  Use your microphone and speakers (VoIP) - a headset is recommended.  Or, call in using your telephone.

United States: +1 (619) 550-0006
Australia: +61 2 9087 3605
Austria: +43 7 2088 1403
Belgium: +32 (0) 28 08 4294
Canada: +1 (647) 497-9351
Denmark: +45 69 91 88 64
Finland: +358 (0) 942 41 5780
France: +33 (0) 182 880 459
Germany: +49 (0) 811 8899 6902
Ireland: +353 (0) 14 845 978
Italy: +39 0 699 36 98 81
Netherlands: +31 (0) 208 080 381
New Zealand: +64 9 909 7888
Norway: +47 21 03 58 98
Spain: +34 955 32 0845
Sweden: +46 (0) 852 503 499
Switzerland: +41 (0) 435 0167 09
United Kingdom: +44 (0) 20 7151 1857

Access Code: 120-101-757
Audio PIN: Shown after joining the meeting

Meeting ID: 120-101-757

```


## Discussion of changes to the spec

Current OTTO API docs are here:
 https://github.com/GluuFederation/otto-node/blob/master/README.md

But the README (the unoffical spec document) is out of data:
 https://github.com/KantaraInitiative/wg-otto

In particular, better defintions are more examples are needed for
"depth" and "fitler"--examples that will be meaningful to federation
people, like how to identify the R&S websites.

Yuriy reminded us that we had dicussed changing the name of the depth
parameter.  Depth is used to specify which entities should be returned
in a search. The term "depth" may give the impress that it means how
many inter-federations deep the server should chase. Some other ideas to
rename this term:

* Expand - Yuriy's favorite term.
* Select (which node we select)
* Match
* Browse
* Scope (not good)
* Level
* Subtree

## NEXT MEETING 11/16

I will send notes after IIW.

1.  Please join my meeting.
https://global.gotomeeting.com/join/162399285

2.  Use your microphone and speakers (VoIP) - a headset is recommended.  
Or, call in using your telephone.
057-otto_minutes-10-12-2016.md
United States: +1 (669) 224-3319
Australia: +61 2 8355 1034
Austria: +43 7 2088 0716
Belgium: +32 (0) 28 93 7002
Canada: +1 (647) 497-9372
Denmark: +45 69 91 84 58
Finland: +358 (0) 923 17 0556
France: +33 (0) 170 950 590
Germany: +49 (0) 692 5736 7206
Ireland: +353 (0) 19 030 053
Italy: +39 0 699 26 68 65
Netherlands: +31 (0) 208 080 759
New Zealand: +64 9 974 9579
Norway: +47 21 04 30 59
Spain: +34 931 76 1534
Sweden: +46 (0) 852 500 691
Switzerland: +41 (0) 435 0026 89
United Kingdom: +44 (0) 20 3713 5011

Access Code: 162-399-285
Audio PIN: Shown after joining the meeting

Meeting ID: 162-399-285
