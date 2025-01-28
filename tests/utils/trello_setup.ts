import { request } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

import { trelloConfig } from "../helper/helper_Common";

export async function createBoard(boardName: string) {
  const apiContext = await request.newContext({
    extraHTTPHeaders: {
      Cookie: trelloConfig.COOKIE,
    },
  });

  const response = await apiContext.post(trelloConfig.endpoints.createBoard, {
    params: {
      name: boardName,
      key: trelloConfig.API_KEY,
      token: trelloConfig.API_TOKEN,
    },
  });

  if (response.status() !== 200) {
    const responseText = await response.text();
    console.error("Failed to create board:", responseText);
    throw new Error(`Failed to create board. Status: ${response.status()}`);
  }

  const responseData = await response.json();
  return responseData;
}
