Feature: Login

@smoke
  Scenario Outline: Scenario Outline name: Successful login
    Given the user is on the login page "<username>"
    Then user is on flight search page
    Examples:
        | read ('data\playwright.csv') |

# @sanity 
#   Scenario: Successful login
#     Given the user is on the login page
#     When the user enters valid credentials
#     And the user click search flight button
#     Then user navigates to flight page