@Login

Feature: Login
  As a user(teacher)
  I want to login


  Scenario Outline: DA Login
    Given User on LoginPage
    When user enters "<username>"  and "<password>" for  login

    Then  Click on Signin Button

        Examples:
      | username   | password |
      | testda@snapwiz.com | snapwiz |



  Scenario Outline: SA Login
    Given User on LoginPage
    When user enters "<username>"  and "<password>" for  login

    Then  Click on Signin Button

    Examples:
      | username   | password |
      | testsa@snapwiz.com | snapwiz |


  Scenario Outline: Teacher Login
    Given User on LoginPage
    When user enters "<username>"  and "<password>" for  login

    Then  Click on Signin Button

    Examples:
      | username   | password |
      | teacher14@snapwiz.com | snapwiz |


  Scenario Outline: student Login
    Given User on LoginPage
    When user enters "<username>"  and "<password>" and "<classcode>" for  login

    Then  Click on Signin Button

    Examples:
      | username   | password |  classcode |
      | testda@snapwiz.com | snapwiz | adewq |


  Scenario Outline: EA Login
    Given User on LoginPage
    When user enters "<username>"  and "<password>" for  login

    Then  Click on Signin Button

    Examples:
      | username   | password |
      | edulastic-admin@snapwiz.com | snapwiz |

  Scenario Outline: curator Login
    Given User on LoginPage
    When user enters "<username>"  and "<password>" for  login

    Then  Click on Signin Button

    Examples:
      | username   | password |
      | curator@snapwiz.com | snapwiz |

#    Then enter the details page should appear
