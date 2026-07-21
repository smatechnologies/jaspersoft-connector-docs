---
sidebar_label: 'Installation And Configuration Settings'
title: Installation And Configuration Settings
description: "How to install the Jaspersoft Connector and a reference for all configuration file settings used by SMARunJasperReportJobIII to connect to and interact with JasperServer."
tags:
  - Reference
  - System Administrator
  - Installation
---

# Installation And Configuration Settings

## Installation

The Jaspersoft Connector does not include an installer. To install it, extract the downloaded package into a folder on the machine where the connector runs.

Continuous recommends creating a `Jaspersoft` folder inside your existing OpCon folder and extracting the package there.

## What is the Configuration File?

The configuration file contains the parameters that control how SMARunJasperReportJobIII connects to and interacts with JasperServer. 

The file is organized into two sections:

- **`[ConnectionDetails]`** — connection and authentication settings for the JasperServer web service
- **`[ReportDefaults]`** — default values for report path and output format

## Sample configuration file

```ini
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

## Configuration settings reference

| Section | Name | Description |
| ------- | ---- | ----------- |
| ConnectionDetails | JasperServerProtocol | The protocol used to connect to JasperServer. Enter `http` or `https`. |
| ConnectionDetails | JasperServerIPAddress | The IP address of the JasperServer host. |
| ConnectionDetails | JasperServerPort | The port on which JasperServer is listening for connections. |
| ConnectionDetails | JasperServerDomain | The JasperServer context name. Enter `jasperserver` or `jasperserver-pro`. |
| ConnectionDetails | JasperServerUser | The user account used to log into JasperServer. `superuser` appears to be the only account with sufficient privileges to connect to the web service. |
| ConnectionDetails | JasperServerPassword | The password for the JasperServer user. Alternatively, enter the path and filename of an encrypted password file. See [Password file](./password-file-options.md). |
| ConnectionDetails | JasperServerTimeout *(see note)* | The maximum number of milliseconds to wait for the report to be created and for the report file to be downloaded. |
| ConnectionDetails | JasperServerLogin | A portion of the URI constructed for the login request. Do not change this value unless directed by SMA Technologies. |
| ConnectionDetails | JasperServerResources | A portion of the URI constructed for the resources request. Do not change this value unless directed by SMA Technologies. |
| ConnectionDetails | JasperServerReports | A portion of the URI constructed for the reports request. Do not change this value unless directed by SMA Technologies. |
| ConnectionDetails | UseResourceFormatForVersion7 | Controls the format used for resources (input controls). Set to `true` for JasperServer version 7 and higher. Set to `false` for versions prior to 7. |
| ReportDefaults | ReportDirectory *(see note)* | The path to the report in the JasperServer repository, not including the report name. The path must end with a forward slash. See [Sample job setup](./appendix-c.md) for how to determine the report path. |
| ReportDefaults | OutputFileFormat *(see note)* | The default output format for the report file. Supported formats: `pdf`, `csv`, `xls`, `jrprint`, `html`, `xlsx`, `rtf`, `xml`, `docx`, `odt`, `ods`. |

:::info Note

Settings marked with *(see note)* can be overridden from the command line.

:::

## FAQs

**Can I override configuration file settings from the command line?**

Yes. The settings `JasperServerTimeout`, `ReportDirectory`, and `OutputFileFormat` can be overridden by specifying the corresponding command line options. See [Command line options](./command-line-options.md) for the full list of available options.

**What should `UseResourceFormatForVersion7` be set to?**

Set `UseResourceFormatForVersion7` to `true` for JasperServer version 7 and higher. For JasperServer versions prior to version 7, set it to `false`. This setting controls how input controls (report parameters) are retrieved from the JasperServer web service.

**Can I use an encrypted password instead of a plain text password?**

Yes. Instead of entering the plain text password in the `JasperServerPassword` field, enter the full path and filename of an encrypted password file created with SMACreateCorelationPasswordFile. See [Password file](./password-file-options.md) for instructions.

## Glossary

**Domain** — The JasperServer context path used in web service URIs, typically `jasperserver` (community edition) or `jasperserver-pro` (enterprise edition).

**Input control** — A parameter defined in a JasperServer report. The `UseResourceFormatForVersion7` setting controls how the connector retrieves input control definitions from the JasperServer web service.

**REST v2** — The second version of JasperServer's REST (Representational State Transfer) web service interface, used by SMARunJasperReportJobIII to communicate with JasperServer. Requires JasperServer 5.6 or higher.
