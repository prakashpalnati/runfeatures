@SignUP

Feature: SignUP
  As a user(teacher)
  I want to signup
  and

  Scenario Outline: Teacher SignUP
    Given User on Homepage
    When clicked on signUp link
#    Then options to be teacher or student or adminstrator
     When clicked on I am a Teacher
     When user enters "<username>"  and "<password>"
  Examples:
  | username   | password |
  | dhdsghddd | snapwiz |

#    Then enter the details page should appear
