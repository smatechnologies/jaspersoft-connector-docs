---
sidebar_label: 'Command Line Options'
hide_title: 'true'
---

## Command Line Options

## SMARunJasperReportJobIII

This application starts and monitors a report job that has been defined in the JasperServer database.  If the job is initiated and finishes with no exceptions, this application exits with a value of 0.  If there are any errors, this applications exits with a value of 1.

A sample execution is shown in “Appendix B – SMARunJasperReportJobIII Sample Execution”. 

## SMARunJasperReportJobIII Command Line Options 

#### Options and Descriptions

### `-configuration`

*(optional)* 

This is the name of the configuration file to use.  It is an optional parameter.  If no configuration file is specified, SMARunJasperReportJob.ini (in the same directory as SMARunJasperReportJob.exe) is assumed.

### `-IgnorePagination` 

*(optional)* 

This must be either true or false.  If it is specified, it will control whether the JasperReport is paginated or delivered in one continuous data grouping.

### `-JasperServerTimeout` 

*(optional)* 

This is the maximum number of milliseconds to wait for the report to be generated and to wait for the file to be downloaded.

### `-ReportDirectory` 

*(optional)* 

This is the path in the Jasper repository of the report to execute. 

### `-ReportName` 

*(required)* 

This is the name of the JasperReport to generate. 

### `-OutputFileFormat`

*(optional)* 

This option specifies the desired report formats.  The valid choices are `pdf`, `csv`, `xls`, `jrprint`, `html`, `xlsx`, `rtf`, `xml`, `docx`, `odt`, and `ods`. 

### `-OutputFileName`

*(required)* 

This is the full path and filename of the report file to create. 

### `-Param1…-Param99` 

*(optional)* 

These are user supplied report parameters.  Each parameter consists of two fields separated by a vertical pipe symbol (`|`).  

1 - The first field is the name of the parameter as shown in the Jasper report.  *(See “Appendix C – Jasper Screen Shots” to see how to determine the report parameter name.)*  

2 - The second field is the desired value. 

### `-RawInput`

*(optional)* 

By default, the ‘value’ part of `-Param` arguments have a translation done.  This looks like:

`<` to `&lt;`

`>` to `&gt;`

` to `&apos;`

` to `&quot;`

`\r\n` to `empty string`

`\n` to `empty string`

In some instances, no translation is desired.  The `-RawInput` command line parameter specifies that the translation is to be bypassed for all `-Param` values. |

If the desired value contains one of the reserved HTML characters, you must use the Entity Name for it.

| Character | Entity Name | Description |
| --------- | ----------- | ----------- |
| `“`	| `&quot;` | Quotation mark | 
| `‘`	| `&apos;` | Apostrophe | 
| `<`	| `&lt;` | Less than symbol | 
| `>`	| `&gt;` | Greater than symbol | 

If the parameter is a multiple selection parameter, simply supply a `–Param` setting for each desired selection (with the same parameter name) or supply a single `-Param` setting and separate the desired choices by a vertical pipe (`|`) after the parameter name

:::tip Example

`-Param=”Country_multi_select|US|Mexico”`

This would set a multi-select parameter called “Country_multi_select” to two choices (“US” and “Mexico”). 

:::

