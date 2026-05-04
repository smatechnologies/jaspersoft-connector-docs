---
sidebar_label: 'Command line options'
title: Command line options
description: "Reference for all command line options accepted by SMARunJasperReportJobIII, including required and optional parameters for running JasperServer report jobs."
tags:
  - Reference
  - Automation Engineer
  - System Administrator
---

# Command line options

## What is it?

SMARunJasperReportJobIII is the command line application that starts and monitors a JasperServer report job. When the job completes without exceptions, the application exits with a value of `0`. When errors occur, the application exits with a value of `1`.

Use this reference when configuring a Windows job in OpCon to run a JasperServer report. Each option corresponds to a setting you supply on the job's command line.

A sample execution is shown in [Sample execution](./appendix-b.md).

## SMARunJasperReportJobIII command line options

| Option | Required | Description |
| ------ | -------- | ----------- |
| `-configuration` | No | The name of the configuration file to use. If not specified, `SMARunJasperReportJob.ini` (in the same directory as `SMARunJasperReportJob.exe`) is used. |
| `-IgnorePagination` | No | Controls whether the JasperReport is paginated or delivered in one continuous data grouping. Enter `true` or `false`. |
| `-JasperServerTimeout` | No | The maximum number of milliseconds to wait for the report to be generated and for the file to be downloaded. |
| `-ReportDirectory` | No | The path in the Jasper repository of the report to run. |
| `-ReportName` | **Yes** | The name of the JasperReport to generate. |
| `-OutputFileFormat` | No | The desired report output format. Valid values: `pdf`, `csv`, `xls`, `jrprint`, `html`, `xlsx`, `rtf`, `xml`, `docx`, `odt`, `ods`. |
| `-OutputFileName` | **Yes** | The full path and filename of the report file to create. |
| `-Param1`…`-Param99` | No | User-supplied report parameters. Each parameter is two fields separated by a vertical pipe (`\|`): the parameter name and the desired value. See note below. |
| `-RawInput` | No | Bypasses character translation for all `-Param` values. See note below. |

### `-Param` note

Each `-Param` value consists of the parameter name (as shown in the Jasper report — see [Sample job setup](./appendix-c.md)) and the desired value, separated by `|`. To pass multiple values for a multi-select parameter, either supply a separate `-Param` for each value using the same parameter name, or separate the values with `|` after the parameter name.

:::tip Example

`-Param="Country_multi_select|US|Mexico"`

This sets a multi-select parameter called `Country_multi_select` to two values: `US` and `Mexico`.

:::

### `-RawInput` note

By default, the value portion of `-Param` arguments undergoes the following character translations:

| Character | Translated to |
| --------- | ------------- |
| `<` | `&lt;` |
| `>` | `&gt;` |
| `'` | `&apos;` |
| `"` | `&quot;` |
| `\r\n` | *(empty string)* |
| `\n` | *(empty string)* |

Specify `-RawInput` to bypass all translations for every `-Param` value. When `-RawInput` is not used and a parameter value contains a reserved HTML character, use the corresponding entity name:

| Character | Entity name | Description |
| --------- | ----------- | ----------- |
| `"` | `&quot;` | Quotation mark |
| `'` | `&apos;` | Apostrophe |
| `<` | `&lt;` | Less than symbol |
| `>` | `&gt;` | Greater than symbol |

## FAQs

**What is the difference between `-ReportDirectory` and `-ReportName`?**

`-ReportDirectory` is the path in the JasperServer repository where the report is stored (for example, `/Reports/Samples/`). `-ReportName` is the Resource ID of the specific report to generate (for example, `EmployeeAccounts`). Both values are found by navigating the JasperServer repository. See [Sample job setup](./appendix-c.md) for instructions.

**What output formats does the connector support?**

The supported output formats are: `pdf`, `csv`, `xls`, `jrprint`, `html`, `xlsx`, `rtf`, `xml`, `docx`, `odt`, and `ods`.

**How do I pass multiple values for a multi-select parameter?**

Use a single `-Param` setting with values separated by a vertical pipe (`|`) after the parameter name — for example, `-Param="Country_multi_select|US|Mexico"` — or supply a separate `-Param` for each value using the same parameter name.

**When should I use `-RawInput`?**

Use `-RawInput` when your parameter values contain special characters that must not be translated to HTML entity names. Without `-RawInput`, the connector automatically translates `<`, `>`, `'`, `"`, and newline characters in parameter values.

## Glossary

**Resource ID** — The unique identifier for a report or folder in the JasperServer repository. Similar to a display name but not identical. Use the Resource ID (not the display name) in the `-ReportName` and `-ReportDirectory` options.

**Input control** — A parameter defined in a JasperServer report that accepts user-supplied values at run time. Input controls are identified by name in the JasperServer report editor and referenced using `-Param` options on the command line.

**Exit code** — The numeric value returned by SMARunJasperReportJobIII when it finishes. A value of `0` indicates success. A value of `1` indicates an error occurred.
