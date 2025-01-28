import { Given, Then } from "@cucumber/cucumber";
import { request } from "@playwright/test";
import dotenv from "dotenv";
import { trelloConfig } from "../helper/helper_Common";
dotenv.config(); //

Given("I make an API request to fetch Trello boards", async function () {
  this.apiContext = await request.newContext({
    extraHTTPHeaders: {
      Cookie: trelloConfig.COOKIE,
    },
  });

  this.response = await this.apiContext.get(trelloConfig.endpoints.getBoards, {
    params: {
      key: trelloConfig.API_KEY,
      token: trelloConfig.API_TOKEN,
    },
  });
});

Then("I should get a successful response", async function () {
  const response = this.response;
  if (response.status() === 200) {
    // console.log("API request is successful", await response.json());
  }
});
