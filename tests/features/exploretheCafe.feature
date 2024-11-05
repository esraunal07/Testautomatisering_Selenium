Feature: Explore the Cafe
 as a user that I want to explore the cafe

  Scenario: Start outside the cafe and see the cafe image
    Given that I am outside the cafe
    When I wait without taking action
    Then I should see an image of the cafe
    And I should see a descriptive text explaining the scenario

  Scenario: Enter the cafe and view the inside image
    Given that I am outside the cafe
    When I click the "Enter the cafe" button
    Then I should see an image displayed inside the cafe
    And I should see a descriptive text explaining the scenario

  Scenario: Buy an espresso and check player stats
    Given that I am outside the cafe
    When I click the "Enter the cafe" button
    And I click the "Buy an espresso" button
    Then I should see the number of espressos increase to 1
    And my money should be 5
    And my health should be 60

  Scenario: Check player's money and health status
    Given that I am outside the cafe
    When I wait without taking action
    Then my health should be 50
    And my money should be 10