---
sidebar_label: 'Appendix B - Sample Execution'
hide_title: 'true'
---

## Appendix B - Sample Execution

```
SMARunJasperReportJobIII.exe  -ReportDirectory=/analysis/reports/    -ReportName=EmployeeAccounts    -OutputFileName=.\Reports\Employees.pdf        -OutputFileFormat=pdf
```

:::info Note  

The command line shown above should be a continuous line with no breaks.  It is shown as multiple lines for readability.

:::

```

--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
2019-09-12 14:57:26 - Copyright Software Management and Associates - 2019
2019-09-12 14:57:26 - Version 19.0.0.0
2019-09-12 14:57:26 - 
2019-09-12 14:57:26 - Arg[0] = [-ReportDirectory=/analysis/reports/]
2019-09-12 14:57:26 - Arg[1] = [-ReportName=EmployeeAccounts]
2019-09-12 14:57:26 - Arg[2] = [-OutputFileName=.\Reports\Employees.pdf]
2019-09-12 14:57:26 - Arg[3] = [-OutputFileFormat=pdf]
2019-09-12 14:57:26 - 
2019-09-12 14:57:26 - Configuration
2019-09-12 14:57:26 - -------------
2019-09-12 14:57:26 - 
2019-09-12 14:57:26 - [ConnectionDetails]
2019-09-12 14:57:26 - JasperServerProtocol          : http
2019-09-12 14:57:26 - JasperServerIPAddress         : 192.168.0.111
2019-09-12 14:57:26 - JasperServerPort              : 8080
2019-09-12 14:57:26 - JasperServerDomain            : jasperserver
2019-09-12 14:57:26 - JasperServerUser              : jasperadmin
2019-09-12 14:57:26 - JasperServerPassword          : ************
2019-09-12 14:57:26 - JasperServerTimeout           : 120000
2019-09-12 14:57:26 - JasperServerLogin             : /rest_v2/login
2019-09-12 14:57:26 - JasperServerResources         : /rest_v2/resources
2019-09-12 14:57:26 - JasperServerReports           : /rest_v2/reports
2019-09-12 14:57:26 - 
2019-09-12 14:57:26 - [ReportDefaults]
2019-09-12 14:57:26 - ReportDirectory               : /reports/samples/
2019-09-12 14:57:26 - OutputFileFormat              : pdf
2019-09-12 14:57:26 - 
2019-09-12 14:57:26 - Command Line Arguments
2019-09-12 14:57:26 - ----------------------
2019-09-12 14:57:26 - -ReportDirectory              : /analysis/reports/
2019-09-12 14:57:26 -                                 ***** Overrides default *****
2019-09-12 14:57:26 - -ReportName                   : EmployeeAccounts
2019-09-12 14:57:26 - -OutputFileName               : .\Reports\Employees.pdf
2019-09-12 14:57:26 - -OutputFileFormat             : pdf
2019-09-12 14:57:26 -                                 ***** Overrides default *****
2019-09-12 14:57:26 - -DumpXML                      : False
2019-09-12 14:57:26 - -Debug                        : False
2019-09-12 14:57:26 - 
2019-09-12 14:57:26 - Specified Report Parameters   --------------------
2019-09-12 14:57:26 - 
2019-09-12 14:57:26 - 
2019-09-12 14:57:26 - Fetching response from : http://192.168.0.111:8080/jasperserver/GetEncryptionKey
2019-09-12 14:57:26 - resonse.StatusCode = OK
2019-09-12 14:57:26 - Fetching Authentication token from http://192.168.0.111:8080/jasperserver/rest_v2/login
2019-09-12 14:57:26 - Authentication token = [JSESSIONID=C4FED936C7AD0636D3CCDEA74BCC380C; Path=/jasperserver; HttpOnly,userLocale=en_US;Expires=Fri, 13-Sep-2019 19:57:27 GMT;Path=/jasperserver/;HttpOnly]
2019-09-12 14:57:26 - 
2019-09-12 14:57:26 - ResourceUri = http://192.168.0.111:8080/jasperserver/rest_v2/resources/analysis/reports/EmployeeAccounts
2019-09-12 14:57:26 - 
2019-09-12 14:57:26 - Parameters defined in report  --------------------
2019-09-12 14:57:26 - 
2019-09-12 14:57:26 - Parameter Name                          Input Control Type                      Mandatory Visible   
2019-09-12 14:57:26 - --------------                          ------------------                      --------- -------   
2019-09-12 14:57:26 - 
2019-09-12 14:57:26 - ReportUri = http://192.168.0.111:8080/jasperserver/rest_v2/reports/analysis/reports/EmployeeAccounts.pdf
2019-09-12 14:57:26 - 
2019-09-12 14:57:30 - 
2019-09-12 14:57:30 - Exit value: 0
2019-09-12 14:57:30 - 

```  

:::info Note  

To help the user resolve parameter names, SMARunJasperReportJobIII displays the parameters for a report in the section headed by “Parameters defined in report” (see above).

:::
