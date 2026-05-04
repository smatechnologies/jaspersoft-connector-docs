---
sidebar_label: 'Overview'
title: Jaspersoft Connector
description: "Overview of the Jaspersoft Connector (SMARunJasperReportJobIII), which enables JasperServer report jobs to run from the command line and from OpCon."
tags:
  - Conceptual
  - Automation Engineer
  - System Administrator
---

# Jaspersoft Connector

## What is it?

The Jaspersoft Connector (SMARunJasperReportJobIII) enables JasperServer report jobs to run from the command line and from OpCon. It communicates with JasperServer using the REST Version 2 interface, which requires JasperServer 5.6 or higher.

Use this connector when you need to:

- Run JasperServer report jobs on a schedule from OpCon
- Automate report generation without manual intervention in the Jasper web application
- Pass report parameters (such as date ranges or filter values) from OpCon to JasperServer at run time

## SMARunJasperReportJobIII

Version 21.00.00

To set up a Jasper report in OpCon, you must first gather information about the report from the Jasper web application. The following items are required to run a report:

- Path to the report file (ReportDirectory)
- The Resource ID of the report (similar to the report name, but not the same)
- Information about any report parameters, including:
  - Parameter name (as shown in the Jasper report)
  - Parameter value(s)

[Appendix C — Sample Job Setup](./appendix-c.md) walks you through a complete setup of a Jasper report from beginning to end.

:::info Note

This connector uses the REST Version 2 interface to the JasperServer web services. Only JasperServer 5.6 and higher are supported.

:::

**Related topics:**

- [Command line options](./command-line-options.md)
- [Password file](./password-file-options.md)
- [Configuration settings](./appendix-a.md)
- [Sample execution](./appendix-b.md)
- [Sample job setup](./appendix-c.md)
