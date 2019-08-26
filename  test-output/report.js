$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Eclipse_Workspace/BDD/src/main/java/Features/Contact.feature");
formatter.feature({
  "line": 1,
  "name": "new contact adding",
  "description": "",
  "id": "new-contact-adding",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "create a new contact",
  "description": "",
  "id": "new-contact-adding;create-a-new-contact",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title is freecrm",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on  Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to new contact menu",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on New",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on save",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "new-contact-adding;create-a-new-contact;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname"
      ],
      "line": 15,
      "id": "new-contact-adding;create-a-new-contact;;1"
    },
    {
      "cells": [
        "test@getnada.com",
        "Poda@123",
        "hello",
        "world"
      ],
      "line": 16,
      "id": "new-contact-adding;create-a-new-contact;;2"
    },
    {
      "cells": [
        "user",
        "user",
        "second",
        "user"
      ],
      "line": 17,
      "id": "new-contact-adding;create-a-new-contact;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "create a new contact",
  "description": "",
  "id": "new-contact-adding;create-a-new-contact;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title is freecrm",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should enter \"test@getnada.com\" and \"Poda@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on  Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to new contact menu",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on New",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters \"hello\" and \"world\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on save",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactStepDefinition.user_is_already_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactStepDefinition.title_is_freecrm()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test@getnada.com",
      "offset": 19
    },
    {
      "val": "Poda@123",
      "offset": 42
    }
  ],
  "location": "ContactStepDefinition.user_enters_uname_and_pwd(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactStepDefinition.user_moves_to_new_contact_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactStepDefinition.user_clicks_on_New()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "hello",
      "offset": 13
    },
    {
      "val": "world",
      "offset": 25
    }
  ],
  "location": "ContactStepDefinition.user_enters_fname_and_lastname(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactStepDefinition.user_clicks_on_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "create a new contact",
  "description": "",
  "id": "new-contact-adding;create-a-new-contact;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title is freecrm",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should enter \"user\" and \"user\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on  Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to new contact menu",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on New",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters \"second\" and \"user\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on save",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactStepDefinition.user_is_already_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactStepDefinition.title_is_freecrm()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "user",
      "offset": 19
    },
    {
      "val": "user",
      "offset": 30
    }
  ],
  "location": "ContactStepDefinition.user_enters_uname_and_pwd(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactStepDefinition.user_moves_to_new_contact_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactStepDefinition.user_clicks_on_New()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "second",
      "offset": 13
    },
    {
      "val": "user",
      "offset": 26
    }
  ],
  "location": "ContactStepDefinition.user_enters_fname_and_lastname(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactStepDefinition.user_clicks_on_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});