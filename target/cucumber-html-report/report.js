$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/home.feature");
formatter.feature({
  "id": "signup",
  "tags": [
    {
      "name": "@SignUP",
      "line": 1
    }
  ],
  "description": "As a user(teacher)\r\nI want to signup\r\nand",
  "name": "SignUP",
  "keyword": "Feature",
  "line": 3
});
formatter.scenarioOutline({
  "id": "signup;teacher-signup",
  "description": "",
  "name": "Teacher SignUP",
  "keyword": "Scenario Outline",
  "line": 8,
  "type": "scenario_outline"
});
formatter.step({
  "name": "User on Homepage",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "clicked on signUp link",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "clicked on I am a Teacher",
  "keyword": "When ",
  "line": 12,
  "comments": [
    {
      "value": "#    Then options to be teacher or student or adminstrator",
      "line": 11
    }
  ]
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\"  and \"\u003cpassword\u003e\"",
  "keyword": "When ",
  "line": 13
});
formatter.examples({
  "id": "signup;teacher-signup;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 14,
  "rows": [
    {
      "id": "signup;teacher-signup;;1",
      "cells": [
        "username",
        "password"
      ],
      "line": 15
    },
    {
      "id": "signup;teacher-signup;;2",
      "cells": [
        "dhdsghddd",
        "snapwiz"
      ],
      "line": 16
    }
  ]
});
formatter.before({
  "duration": 6523606983,
  "status": "passed"
});
formatter.scenario({
  "id": "signup;teacher-signup;;2",
  "tags": [
    {
      "name": "@SignUP",
      "line": 1
    }
  ],
  "description": "",
  "name": "Teacher SignUP",
  "keyword": "Scenario Outline",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "User on Homepage",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "clicked on signUp link",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "clicked on I am a Teacher",
  "keyword": "When ",
  "line": 12,
  "comments": [
    {
      "value": "#    Then options to be teacher or student or adminstrator",
      "line": 11
    }
  ]
});
formatter.step({
  "name": "user enters \"dhdsghddd\"  and \"snapwiz\"",
  "keyword": "When ",
  "line": 13,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "location": "SignUp.userOnHomepage()"
});
formatter.result({
  "duration": 640674307,
  "status": "failed",
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: unhandled inspector error: {\"code\":-32603,\"message\":\"Cannot navigate to invalid URL\"}\n  (Session info: chrome\u003d53.0.2785.143)\n  (Driver info: chromedriver\u003d2.20.353145 (343b531d31eeb933ec778dbcf7081628a1396067),platform\u003dWindows NT 10.0 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 28 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027subbareddy-swiz\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.7.0_51\u0027\nSession ID: 3d2e7a5b917244caecbb869350e41a89\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dWIN8, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\SUBBAR~1\\AppData\\Local\\Temp\\scoped_dir3788_32470}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, mobileEmulationEnabled\u003dfalse, version\u003d53.0.2785.143, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, webStorageEnabled\u003dtrue, nativeEvents\u003dtrue, hasTouchScreen\u003dfalse, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:316)\r\n\tat steps.SignUp.userOnHomepage(SignUp.java:33)\r\n\tat ✽.Given User on Homepage(src/test/resources/features/home.feature:9)\r\n"
});
formatter.match({
  "location": "SignUp.clickedOnSignUpLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignUp.clickedOnIAmATeacher()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "dhdsghddd",
      "offset": 13
    },
    {
      "val": "snapwiz",
      "offset": 30
    }
  ],
  "location": "SignUp.userEntersAnd(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2135858764,
  "status": "passed"
});
});