Feature: Health decrease when waiting outside the cafe


  Scenario: Player's health decreases consistently by pressing wait
    Given that I am outside the cafe
     And my initial health is 50
    When I press wait
    Then my health should be 40
    When I press wait
    Then my health should be 30
    When I press wait
    Then my health should be 20
    When I press wait
    Then my health should be 10
    When I press wait
    Then my health should be 0