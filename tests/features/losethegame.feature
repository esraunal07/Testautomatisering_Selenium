Feature: Lose the game
  As a user I want to lose the game by spam-click wait-button so my health points goes to 0.

  Scenario: At the right place with the right starting values
    Given that I have started the game by navigating to ""http://localhost:3000"
    Then the value of my "Health" should be 50
    And the value of my "Money" should be 10
    And the value of my "Espressos" should be 0
    And my hipster bag should contain "nothing cool"
    And I should be at the location "outside the Cloud Forest Cafe"

  Scenario: Spam-click wait-button to lose the game
    Given that I click on "Wait"
    Then the value of my "Health" should decrease
    When the value of my "Health" turns to 0
    Then I should see an infomessage telling me I lost the game
    And I should see a "Play again" button