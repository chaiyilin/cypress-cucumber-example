Feature: access website

  Scenario: Opening a website page
    Given I open "url" page
    When I type "searchInput" into search box
    And I click the search button
    Then I can see "searchOutput" in the seach output
