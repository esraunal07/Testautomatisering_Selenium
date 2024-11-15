Feature: Switch window to full screen mode
  As a user, I want to be able to turn full screen mode on and off while playing the game.

  Scenario: Turn on full screen mode
    When I start the game at "http://localhost:3000"
    Given click on the full screen button
    Then I should switch to full screen mode