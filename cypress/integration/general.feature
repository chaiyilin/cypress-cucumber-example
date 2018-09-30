Feature: access website

  Scenario: Opening a website page
    Given I open "url" page
    Then I see "title" in the title
