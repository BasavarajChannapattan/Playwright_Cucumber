import { Given, Then } from "@cucumber/cucumber";
import { request, expect } from "@playwright/test";
import { trelloConfig, getUniqueBoardName } from "../helper/helper_Common";
import dotenv from "dotenv";
dotenv.config();

let boardId: string;

Given("I create a new Trello board", async function () {
  this.currentBoardName = getUniqueBoardName();
  this.apiContext = await request.newContext({
    extraHTTPHeaders: {
      Cookie: trelloConfig.COOKIE,
    },
  });

  this.response = await this.apiContext.post(
    trelloConfig.endpoints.createBoard,
    {
      params: {
        name: this.currentBoardName,
        key: trelloConfig.API_KEY,
        token: trelloConfig.API_TOKEN,
      },
    }
  );
});

Then(
  "I should get a successful response and the board should be created",
  async function () {
    const response = this.response;
    if (response.status() === 200) {
      const jsonResponse = await response.json();
      expect(jsonResponse.name).toBe(this.currentBoardName);
      boardId = jsonResponse.id;
    }
  }
);

Then(
  "I need to update the existing board name to a new name",
  async function () {
    const boardName = getUniqueBoardName();
    this.boardName = boardName;
    this.apiContext = await request.newContext({
      extraHTTPHeaders: {
        Cookie: trelloConfig.COOKIE,
      },
    });

    this.response = await this.apiContext.post(
      trelloConfig.endpoints.updateBoard + boardId,
      {
        params: {
          key: trelloConfig.API_KEY,
          token: trelloConfig.API_TOKEN,
        },
        body: {
          name: this.boardName,
        },
      }
    );
  }
);

Then(
  "I should get a successful response and the board name should be updated",
  async function () {
    const response = this.response;
    if (response.status() === 200) {
      const jsonResponse = await response.json();
      expect(jsonResponse.name).toBe(this.boardName);
    }
  }
);
