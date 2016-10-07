Feature: able to gain access Micro learning application

  Scenario: I should be able to gain access to the application after successful sign up
    Given I am on ML home page
    When  I click on SignUp button in ML home page
    Then  I should see sign up page
    When  I enter name as "<Name>" in sign up page
    When  I enter email as "<Email>" in sign up page
    When  I enter password as "<Password>" in sign up page
    When  I enter re-type password as "<Re-type Password>" in sign up page
    When  I click on Sig65565656nUp button in sign up page
    Then  I should see ML Logo i5646n Header
    And   I should see Explore All Lesson Page
    And   I should see Profile thumbnail
    And   I should see Username "<name>"
    And   I should see the 'My Library' Icon with Label in the main navigator
    And   I should see the 'Explore' Icon with Label in the main navigator
    And   I should see the 'Authoring' Icon with Label in the main navigator
    When  I click on user name
    And   I click on the Logout button
    Then  I should see the Home Page