import dotenv from "dotenv";
import { request } from "@playwright/test";
dotenv.config();

export const trelloConfig = {
  API_KEY: process.env.TRELLO_API_KEY || "default_api_key",
  API_TOKEN: process.env.TRELLO_API_TOKEN || "default_api_token",
  COOKIE: process.env.TRELLO_COOKIE || "",
  endpoints: {
    getBoards: "https://api.trello.com/1/members/me/boards",
    createBoard: "https://api.trello.com/1/boards/",
    updateBoard: "https://api.trello.com/1/boards/",
  },
};

export function getUniqueBoardName() {
  const uniqueBoardNames = [
    "Project Apollo",
    "Website Redesign",
    "Marketing Campaign",
    "Product Roadmap",
    "Team Collaboration",
    "Client Onboarding",
    "Content Strategy",
    "Event Planning",
    "Design Sprint",
    "Sales Pipeline",
    "Bug Tracking",
    "Feature Requests",
    "Customer Support",
    "Release Planning",
    "Developer Tools",
    "Tech Stack Upgrades",
    "Product Backlog",
    "Roadmap 2025",
    "Business Growth",
    "UI/UX Improvements",
  ];

  return uniqueBoardNames[Math.floor(Math.random() * uniqueBoardNames.length)];
}
