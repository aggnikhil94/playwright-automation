Feature: Login

@smoke 
  Scenario: Successful login
    Given the user is on the login page
    When the user enters valid credentials
    And clicks the login button
    Then the user should be redirected to the dashboard page

    @smoke
  Scenario: Successful login 2
    Given the user is on the login page
    When the user enters valid credentials
    And clicks the login button
    Then the user should be redirected to the dashboard page
