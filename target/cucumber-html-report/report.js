$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/home.feature");
formatter.feature({
  "line": 1,
  "name": "Calculator",
  "description": "As a user\nI want to use a calculator\nSo that I don\u0027t need to calculate myself",
  "id": "calculator",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Add two numbers",
  "description": "",
  "id": "calculator;add-two-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I add 2 and 3",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the result should be 4",
  "keyword": "Then "
});
formatter.match({
  "location": "Home.iHaveACalculator()"
});
formatter.result({
  "duration": 144621077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 6
    },
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "Home.iAddAnd(int,int)"
});
formatter.result({
  "duration": 3154975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 21
    }
  ],
  "location": "Home.theResultShouldBe(int)"
});
formatter.result({
  "duration": 3558450,
  "error_message": "java.lang.AssertionError: expected:\u003c4\u003e but was:\u003c5\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:555)\n\tat org.junit.Assert.assertEquals(Assert.java:542)\n\tat steps.Home.theResultShouldBe(Home.java:27)\n\tat ✽.Then the result should be 4(src/test/resources/home.feature:9)\n",
  "status": "failed"
});
});