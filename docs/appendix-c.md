---
sidebar_label: 'Sample Job Setup'
title: Sample Job Setup
description: "A step-by-step walkthrough for gathering the information needed to configure a JasperServer report job in OpCon, including the report path, Resource ID, and parameter names."
tags:
  - Procedural
  - Automation Engineer
---

# Sample Job Setup

## What is it?

Before you can run a JasperServer report from OpCon, you must gather information about the report from the Jasper web application. This walkthrough shows how to collect the report path, Resource ID, and parameter names needed to build the OpCon command line.

## Gather report information from JasperServer

To collect the information needed to configure an OpCon job for a JasperServer report, complete the following steps:

1. Log into the Jasper application. The URL format is:

   `http://<IP address>:8080/jasperserver-pro/login.html`

   This may be different at your site. The example in this walkthrough uses the community version (JasperServer instead of JasperServer-Pro).

   ![JasperServer login screen](../static/img/Picture1.png)

   The superuser account for the community version is `jasperadmin`.

   ![JasperServer dashboard after login](../static/img/Picture2.png)

2. Right-click **View** and select **Repository** from the menu.

   ![Repository menu option](../static/img/Picture3.png)

3. Open the items in the menu on the left until you see the report you want to run.

   ![Repository navigation showing report folders](../static/img/Picture4.png)

   Right-click each level in the menu on the left and select **Properties** to find the Resource ID for each level. For example, right-clicking **Reports** and selecting **Properties** shows:

   ![Properties dialog showing Resource ID for Reports folder](../static/img/Picture5.png)

   Note the **Resource ID**. Select **Cancel** to close the dialog.

   Right-clicking **Samples** and selecting **Properties** shows:

   ![Properties dialog showing Resource ID for Samples folder](../static/img/Picture6.png)

   Note the **Resource ID**. Select **Cancel** to close the dialog.

   Construct the report path by appending these Resource IDs together. This value is used with the `-ReportDirectory` command line option or in the configuration file. In this example, the path is `/Reports/Samples/`.

   :::caution

   The letter case in the report path is important. Use the exact capitalization shown in the Resource ID.

   :::

4. Select the report you want to run to highlight it, then select the **Edit** button.

   ![Repository list with a report selected and the Edit button highlighted](../static/img/Picture7.png)

5. Review the report details.

   ![Report details page](../static/img/Picture8.png)

   Note the **Resource ID** for this report. This value is used with the `-ReportName` command line option.

6. Select **Controls & Resources**.

   ![Controls and Resources tab](../static/img/Picture9.png)

7. Review the input controls listed. Select the first input control (**Country multi select**).

   ![Input controls list](../static/img/Picture10.png)

8. The input control details are displayed.

   ![Input control details page](../static/img/Picture11.png)

   Select **Next**.

9. Note the **Parameter Name (read-only)** field. This is the name to use in a `-Param` command line option.

   ![Parameter name field](../static/img/Picture12.png)

   Select **Cancel** to return to the input controls list. Repeat steps 8 and 9 for each input control listed.

At this point you have collected all the information needed to build the command line: the report name, the report directory, and all parameter names.

**Related topics:**

- [Command line options](./command-line-options.md)
- [Configuration settings](./appendix-a.md)
- [Sample execution](./appendix-b.md)
