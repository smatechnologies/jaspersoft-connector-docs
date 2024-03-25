---
sidebar_label: 'Appendix A - Configuration Settings'
hide_title: 'true'
---

## Appendix A - Configuration Settings

```

#-------------------------------------------------------------------------------------
#	This file contains the configuration parameters to execute a JasperServer job.
#-------------------------------------------------------------------------------------

[ConnectionDetails]
JasperServerProtocol=http
JasperServerIPAddress=192.168.68.128
JasperServerPort=8080
JasperServerDomain=jasperserver
JasperServerUser=jasperadmin
JasperServerPassword=jasperadmin
JasperServerTimeout=120000
JasperServerLogin=/rest_v2/login
JasperServerResources=/rest_v2/resources
JasperServerReports=/rest_v2/reports
UseResourceFormatForVersion7=true

[ReportDefaults]
ReportDirectory=/reports/samples/
OutputFileFormat=pdf

```

### Configuration Table

| Section | Name | Description |
| ------- | ---- | ----------- |
| ConnectionDetails	| JasperServerProtocol | This must be `http` or `https`. |
| ConnectionDetails	| JasperServerIPAddress	| This is the I.P. address to connect to the Corelation server. |
| ConnectionDetails	| JasperServerPort | This is the port (socket) on which  JasperServer is listening for connections. |
| ConnectionDetails	| JasperServerDomain | This must be either `jasperserver` or `jasperserver-pro`. |
| ConnectionDetails	| JasperServerUser | This is user credentials to use to log into the Jasper Report server.  `superuser` appears to be the only user that has sufficient privileges to connect to the web service. |
| ConnectionDetails	| JasperServerPassword | This is the password of the Jasper User specified above.  Alternately, this can be the path and filename to an encrypted file (See SMACreateCorelationPassword) |
| ConnectionDetails	| JasperServerTimeout *(see note)*| This is the maximum number of milliseconds to wait for the report creation and to wait for the download of the report file. | 
| ConnectionDetails | JasperServerLogin	| This is a portion of the URI that will be constructed for the login request.  It should not be changed unless directed by SMA. |
| ConnectionDetails	| JasperServerResources | This is a portion of the URI that will be constructed for the resources request.  It should not be changed unless directed by SMA. |
| ConnectionDetails | JasperServerReports | This is a portion of the URI that will be constructed for the reports request.  It should not be changed unless directed by SMA. |
| ConnectionDetails | UseResourceFormatForVersion7 | Versions of JasperServer prior to version 7 used a different format for resources (input controls). |
| ReportDefaults | ReportDirectory *(see note)* | This is the path to the report (not including the name of the report.)  It must be terminated by a forward slash. *(See “**Appendix C** – Jasper Screen Shots” to see how to determine the report path.)* |
| ReportDefaults | OutputFileFormat *(see note)* | This is the format used to create the output file.  The supported formats are pdf, csv, xls, jrprint, html, xlsx, rtf, xml, docx, odt, ods. |

:::info Note

This configuration file parameter can be overridden from the command line.

:::