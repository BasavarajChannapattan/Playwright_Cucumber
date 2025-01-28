Feature: Trello API - Fetch Boards

  Scenario: Fetch Trello boards using valid API credentials
    Given I make an API request to fetch Trello boards
    Then I should get a successful response
