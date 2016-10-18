$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/home.feature");
formatter.feature({
  "line": 3,
  "name": "SignUP",
  "description": "As a user(teacher)\nI want to signup\nand",
  "id": "signup",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SignUP"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Teacher SignUP",
  "description": "",
  "id": "signup;teacher-signup",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "clicked on signUp link",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#    Then options to be teacher or student or adminstrator"
    }
  ],
  "line": 12,
  "name": "clicked on I am a Teacher",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters \"\u003cusername\u003e\"  and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "signup;teacher-signup;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "signup;teacher-signup;;1"
    },
    {
      "cells": [
        "dhdsghddd",
        "snapwiz"
      ],
      "line": 16,
      "id": "signup;teacher-signup;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1492320266,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Teacher SignUP",
  "description": "",
  "id": "signup;teacher-signup;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SignUP"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "clicked on signUp link",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#    Then options to be teacher or student or adminstrator"
    }
  ],
  "line": 12,
  "name": "clicked on I am a Teacher",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters \"dhdsghddd\"  and \"snapwiz\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.match({
  "location": "SignUp.userOnHomepage()"
});
formatter.result({
  "duration": 3815064164,
  "status": "passed"
});
formatter.match({
  "location": "SignUp.clickedOnSignUpLink()"
});
formatter.result({
  "duration": 284409698,
  "status": "passed"
});
formatter.match({
  "location": "SignUp.clickedOnIAmATeacher()"
});
formatter.result({
  "duration": 928451059,
  "status": "passed"
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
  "duration": 3908535304,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"input[placeholder\u003d\u0027Enter zip code\u0027]\"}\n  (Session info: chrome\u003d53.0.2785.143)\n  (Driver info: chromedriver\u003d2.24.417424 (c5c5ea873213ee72e3d0929b47482681555340c3),platform\u003dLinux 3.13.0-87-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3.07 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Prakash-Swiz-pc\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-87-generic\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.24.417424 (c5c5ea873213ee72e3d0929b47482681555340c3), userDataDir\u003d/tmp/.org.chromium.Chromium.1BClPc}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d53.0.2785.143, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: b02ae1d092af0558eae9996b2a9f0133\n*** Element info: {Using\u003dcss selector, value\u003dinput[placeholder\u003d\u0027Enter zip code\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:492)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.isDisplayed(Unknown Source)\n\tat steps.SignUp.userEntersAnd(SignUp.java:63)\n\tat ✽.When user enters \"dhdsghddd\"  and \"snapwiz\"(src/test/resources/features/home.feature:13)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 367938529,
  "status": "passed"
});
});