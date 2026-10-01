---
sidebar_label: 'Command Line Options'
title: Command Line Options
description: "Reference for all command line options accepted by SMARunJasperReportJobIII, including required and optional parameters for running JasperServer report jobs."
tags:
  - Reference
  - Automation Engineer
  - System Administrator
---

# Command Line Options

## What is it?

SMARunJasperReportJobIII is the command line application that starts and monitors a JasperServer report job. When the job completes without exceptions, the application exits with a value of `0`. When errors occur, the application exits with a value of `1`.

Use this reference when configuring a Windows job in OpCon to run a JasperServer report. Each option corresponds to a setting you supply on the job's command line.

A sample run is shown in [Sample execution](./appendix-b.md).

## SMARunJasperReportJobIII command line options

| Option | Required | Description |
| ------ | -------- | ----------- |
| `-configuration` | No | The name of the configuration file to use. If not specified, `SMARunJasperReportJob.ini` (in the same directory as `SMARunJasperReportJob.exe`) is used. |
| `-Debug` | No | Adds debug detail to the log. Use it when troubleshooting a job. |
| `-IgnorePagination` | No | Controls whether the JasperReport is paginated or delivered in one continuous data grouping. Enter `true` or `false`. |
| `-JasperServerTimeout` | No | The maximum number of milliseconds to wait for the report to be generated and for the file to be downloaded. |
| `-ReportDirectory` | No | The path in the Jasper repository of the report to run. |
| `-ReportName` | **Yes** | The name of the JasperReport to generate. |
| `-OutputFileFormat` | No | The desired report output format. Valid values: `pdf`, `csv`, `xls`, `jrprint`, `html`, `xlsx`, `rtf`, `xml`, `docx`, `odt`, `ods`. Enter the value in lowercase. |
| `-OutputFileName` | **Yes** | The full path and filename of the report file to create. |
| `-Param0`…`-Param499` | No | User-supplied report parameters, numbered from 0 to 499 (for example, `-Param1`). Each parameter is two fields separated by a vertical pipe (`\|`): the parameter name and the desired value. An unnumbered `-Param` is not read. See note below. |
| `-RawInput` | No | Bypasses character translation for all `-Param` values. See note below. |

### `-Param` note

Each `-Param` option carries a number from 0 to 499, such as `-Param1` or `-Param2`. An option written as `-Param` with no number is not read and raises no error, so the report runs without that parameter.

Each `-Param` value consists of the parameter name (as shown in the Jasper report — see [Sample job setup](./appendix-c.md)) and the desired value, separated by `|`. To pass multiple values for a multi-select parameter, either supply a separately numbered `-Param` for each value using the same parameter name (for example, `-Param1` and `-Param2`), or separate the values with `|` after the parameter name.

The parameter name must match a report parameter exactly. If it does not, the job stops with the message `Parameter on command line [name] does not match any of the report parameters`. A `-Param` value with no `|` separator, or with an empty parameter name, also stops the job.

:::tip Example

`-Param1="Country_multi_select|US|Mexico"`

This sets a multi-select parameter called `Country_multi_select` to two values: `US` and `Mexico`.

:::

### `-RawInput` note

Parameter values are sent to JasperServer in the report request URL. By default, before a value is sent, the following characters are replaced:

| Character | Translated to |
| --------- | ------------- |
| `<` | `&lt;` |
| `>` | `&gt;` |
| `'` | `&apos;` |
| `"` | `&quot;` |
| `\r\n` | *(empty string)* |
| `\n` | *(empty string)* |

The report receives the replaced text. For example, without `-RawInput` the value `O'Brien` arrives as `O&apos;Brien`. A value that already contains one of the entity names (`&amp;`, `&lt;`, `&gt;`, `&apos;`, or `&quot;`) is sent unchanged.

Specify `-RawInput` to send every `-Param` value exactly as entered. Use it when a parameter value contains any of the characters in the table above.

## FAQs

**What is the difference between `-ReportDirectory` and `-ReportName`?**

`-ReportDirectory` is the path in the JasperServer repository where the report is stored (for example, `/Reports/Samples/`). `-ReportName` is the Resource ID of the specific report to generate (for example, `EmployeeAccounts`). Both values are found by navigating the JasperServer repository. See [Sample job setup](./appendix-c.md) for instructions.

**What output formats does the connector support?**

The supported output formats are: `pdf`, `csv`, `xls`, `jrprint`, `html`, `xlsx`, `rtf`, `xml`, `docx`, `odt`, and `ods`.

**How do I pass multiple values for a multi-select parameter?**

Use a single numbered `-Param` option with values separated by a vertical pipe (`|`) after the parameter name — for example, `-Param1="Country_multi_select|US|Mexico"` — or supply a separately numbered `-Param` for each value using the same parameter name.

**When should I use `-RawInput`?**

Use `-RawInput` when your parameter values contain `<`, `>`, `'`, `"`, or line breaks that the report must receive as entered. Without `-RawInput`, the connector replaces those characters with entity names or removes the line breaks, and the report receives the replaced text.

## Glossary

**Resource ID** — The unique identifier for a report or folder in the JasperServer repository. Similar to a display name but not identical. Use the Resource ID (not the display name) in the `-ReportName` and `-ReportDirectory` options.

**Input control** — A parameter defined in a JasperServer report that accepts user-supplied values at run time. Input controls are identified by name in the JasperServer report editor and referenced using `-Param` options on the command line.

**Exit code** — The numeric value returned by SMARunJasperReportJobIII when it finishes. A value of `0` indicates success. A value of `1` indicates an error occurred.
