# Yext

This repository stores the configuraton and custom typescript functions for the Yext platform. It is merely a backup and not a live connection to the platform.

Code is manually merged w/ Yext via the Yext CLI and not Github.

The custom typescript functions live here:
- platform
  - plugin
    - gatewayFunctions
    - splitAndCleanAddress


##gatewayFunctions

function lookupAddress : This function is used by the Loan Officer connector to retrieve the address information for their corresponding mortgage center. It depends on a Yext API connection.

function getDate : Just returns the current system date. This is used when an entity is set to closed so that the license can be revoked later.

function checkDateDifference : returns a boolean if the closed date of an entity is past X days so that the license field can be set to false. (used to reclaim licenses by the license connector)

##splitAndCleanAddress

This is a yext function pulled from their sample repo. It normalizes addresses and splits addresses to 2 lines when an address line 1 contains suite, appt., etc.
