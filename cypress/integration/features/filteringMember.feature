Feature: Filtering Crew Members

   Background: Before each
      Given I navigate to the Home Page


   Scenario Outline: Filter Crew Member by name and/or City
      Given I cleared the filter
      Then I see the filter is cleared
      And All the Crew Members are displayed
      When I filter by <name> and <city>
      Then I see the filtered members


      Examples:
        |Scenario Id| name          | city          |
        |   FC01    | lloyd gonzalez| hereford      |
        |   FC02    | emma stewart  |               |
        |   FC03    |               | hereford      |
        |   FC04    | emma          |               |
        |   FC05    | gonzalez      |               |
        |   FC06    | Emma          |               |
        |   FC07    |    e          |               |
        |   FC08    |               |      ford     |        