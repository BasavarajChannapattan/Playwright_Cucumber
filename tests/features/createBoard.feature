Feature: Create a new Trello board

  Scenario: Successfully create a new Trello board with a unique name
    Given I create a new Trello board
    Then I should get a successful response and the board should be created
    Then I need to update the existing board name to a new name
    Then I should get a successful response and the board name should be updated

