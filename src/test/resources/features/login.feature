@Login

Feature: Login
  As a user(teacher)
  I want to login


  Scenario Outline: Teacher Login
    Given User on LoginPage
    When user enters "<username>"  and "<password>" for  login
    Examples:
      | username   | password |
      | testda@snapwiz.com | snapwiz |
  Then  Click on Signin Button

#    Then enter the details page should appear
