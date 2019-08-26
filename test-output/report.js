$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Eclipse_Workspace/BDD/src/main/java/Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "test Login feature",
  "description": "",
  "id": "test-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login Scenario",
  "description": "",
  "id": "test-login-feature;login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of page is freecrm",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_in_login_page()"
});
formatter.result({
  "duration": 30894681350,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.When_title_of_page_is_freecrm()"
});
formatter.result({
  "duration": 32779618,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 1533248570,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 167562069,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 12465105,
  "status": "passed"
});
});