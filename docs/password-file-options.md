---
sidebar_label: 'Password file'
title: Password file
description: "How to use SMACreateCorelationPasswordFile to encrypt a JasperServer password and store it securely instead of storing it in plain text in the configuration file."
tags:
  - Reference
  - System Administrator
---

# Password file

## What is it?

SMACreateCorelationPasswordFile is a utility that encrypts a JasperServer password and stores it in a file. Use this utility to avoid storing passwords in plain text in the configuration file.

Once you create the encrypted password file, enter the path and filename of that file as the value of `JasperServerPassword` in the configuration file instead of the plain text password.

## SMACreateCorelationPasswordFile command line options

| Option | Description |
| ------ | ----------- |
| `-file` | The name of the file to create that will contain the encrypted password. |
| `-password` | The JasperServer user password to encrypt. |

## FAQs

**Why should I use an encrypted password file instead of storing the password in the configuration file?**

Storing passwords in plain text in configuration files is a security risk, particularly in environments where configuration files may be accessed by multiple users or stored in source control. The encrypted password file protects your credentials by storing them in an encrypted format that the connector can read at run time.

**How do I reference the encrypted password file in the configuration file?**

In the `[ConnectionDetails]` section of the configuration file, set `JasperServerPassword` to the full path and filename of the encrypted file instead of the plain text password. The connector reads and decrypts the file automatically when it runs.

## Glossary

**Encrypted password file** — A file produced by SMACreateCorelationPasswordFile that contains a JasperServer password in encrypted form. The connector reads this file at run time to authenticate with JasperServer without requiring the password to be stored in plain text.

**JasperServerPassword** — The configuration file setting that specifies either a plain text password or the path to an encrypted password file for authenticating with JasperServer.
