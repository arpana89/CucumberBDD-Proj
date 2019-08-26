Feature: new contact adding

Scenario Outline: create a new contact
Given user is already on home page
When title is freecrm
Then user should enter "<username>" and "<password>"
Then user clicks on  Login button
Then user is on home page
Then user moves to new contact menu
Then user clicks on New 
Then user enters "<firstname>" and "<lastname>"
Then user clicks on save
Then close the browser
Examples:
|username        |password|firstname|lastname|
|test@getnada.com|Poda@123|hello    |world   |
| user           | user   | second  | user|