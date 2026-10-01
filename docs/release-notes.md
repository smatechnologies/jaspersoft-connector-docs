---
sidebar_label: 'Release Notes'
title: Jaspersoft Connector Release Notes
description: "Version history and change details for the Jaspersoft Connector (SMARunJasperReportJobIII), including new features, improvements, and bug fixes."
tags:
  - Reference
  - System Administrator
  - Automation Engineer
---

# Jaspersoft Connector Release Notes

## 26

### 26.0.0

*05/2026*

This release updates the bundled Newtonsoft.Json library to address a high-severity denial-of-service vulnerability.

#### Bug fixes

**Updated the bundled Newtonsoft.Json library to version 13.0.3 to address [CVE-2024-21907](https://nvd.nist.gov/vuln/detail/CVE-2024-21907).** The previous version contained a high-severity denial-of-service vulnerability. This update brings the dependency to a patched release.

## 21

### 21.00.00

*05/2021*

#### New features

**Added the `-RawInput` command line option (CONNUTIL-499).** Sends `-Param` values exactly as entered instead of replacing reserved characters. See [Command line options](./command-line-options.md).

## 19

### 19.05.00

*01/2020*

**Added TLS support to the initial request for the encryption key.**

### 19.04.00

*12/2019*

**Added debug logging.**

### 19.03.00

*11/2019*

**Completed TLS support.** Added TLS to a connection that the 19.02.00 change had missed.

### 19.02.00

*11/2019*

**Added TLS support.** Previously only SSL was supported by default.

### 19.01.00

*09/2019*

**Added support for the resource format used by JasperServer 7.0 and later.** See `UseResourceFormatForVersion7` in [Installation And Configuration Settings](./appendix-a.md).

### 19.00.00

*09/2019*

**Added support for JasperServer 7.1, which deprecated REST version 1.**

## 17

### 17.00.02

*04/2017*

**Added the `-IgnorePagination` command line option.**

### 17.00.01

*03/2017*

**First release of SMARunJasperReportJobIII,** rewritten to use the REST Version 2 interface. Requires JasperServer 5.6 or higher.
