#!/bin/sh

xsltproc rfc2629.xslt otto-vocab-01.xml > ../html/otto-core-1.0.html

xsltproc rfc2629.xslt otto-api-01.xml > ../html/otto-api-1.0.html

xsltproc rfc2629.xslt otto-openid-1.0.xml > ../html/otto-openid-1.0.html

# xsltproc rfc2629.xslt otto-saml-1.0.xml > ../html/otto-saml-1.0.html
