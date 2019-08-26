Feature: test Login feature

#Scenario: Login Scenario

#Given user is in login page
#When title of page is freecrm
#Then user enters "test@getnada.com" and "Poda@123"
#Then user clicks on login button
#And user is on home page
Scenario Outline: Login Scenario
Given user is in login page
When title of page is freecrm
Then user enters "<username>" and "<password>"
Then user clicks on login button
And user is on home page
Examples:
| username | password |
|test@getnada.com | Poda@123 |
| abc | test |