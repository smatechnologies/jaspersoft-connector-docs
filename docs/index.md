---
slug: '/'
sidebar_label: 'Jaspersoft Connector'
hide_title: 'true'
---

## Jaspersoft Connector

### SMARunJasperReportJobIII

Version 21.00.00

These applications enable JasperServer report jobs to be executed from the command line (thus from OpCon).  

In order to set up a Jasper report in OpCon, some research on the report must be done (from the Jasper Web application).  There are several items that must be supplied to run the report:

* Path to report file
* The Resource ID (similar to the report name, but not the same)
* Information on the parameters
    * Resource ID (similar to the report name, but not the same)

“Appendix C – Sample Job Set-up” walks the user through a complete set-up of a Jasper report from beginning to end.

:::info Note

This application uses the REST Version 2 interface to the JasperServer web services.  This means that only versions of JasperServer 5.6 and higher are supported.

:::