Feature: Login

@smoke 
  Scenario: Successful login
    Given the user is on the login page
    When the user enters valid credentials

@sanity 
  Scenario: Successful login
    Given the user is on the login page
    When the user enters valid credentials
    And the user click search flight button
    Then user navigates to flight page