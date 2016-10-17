$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/home.feature");
formatter.feature({
  "line": 1,
  "name": "SignUP",
  "description": "As a user(teacher)\nI want to signup\nand",
  "id": "signup",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9619310127,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Teacher SignUP",
  "description": "",
  "id": "signup;teacher-signup",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "clicked on signUp link",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#    Then options to be teacher or student or adminstrator"
    }
  ],
  "line": 10,
  "name": "clicked on I am a Teacher",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "SignUp.userOnHomepage()"
});
formatter.result({
  "duration": 10887529618,
  "status": "passed"
});
formatter.match({
  "location": "SignUp.clickedOnSignUpLink()"
});
formatter.result({
  "duration": 299159933,
  "status": "passed"
});
formatter.match({
  "location": "SignUp.clickedOnIAmATeacher()"
});
formatter.result({
  "duration": 6241547306,
  "status": "passed"
});
formatter.match({
  "location": "SignUp.enterUsernameAndPassword()"
});
formatter.result({
  "duration": 954279125,
  "status": "passed"
});
formatter.after({
  "duration": 133863458,
  "status": "passed"
});
});