Feature: Hiring Process

   Background: Before each
      Given I navigate to the Home Page

   @hp01 
   Scenario: Display the Crew Members from the initial Data
      Then I see all the Crew Members displayed



   Scenario Outline: Move crew member from "initial stage" to "new stage"
      Given I set the state of the Crew Member <uuid> to  <initial stage>
      Then I see the crew member <uuid> in the stage <initial stage>
      When I set the state of the Crew Member <uuid> to  <new stage>
      Then I see the crew member <uuid> in the stage <new stage>


      Examples:
        |Scenario Id| uuid                                   | initial stage | new stage     |
        |   HP02    | "4ff7567e-d639-4a5f-b440-adefe64e33c6" | applied       | interviewing  |
        |   HP03    | "6fc9d2bb-590c-4351-b0b9-45686e61a4ed" | interviewing  | hired         |
        |   HP04    | "5ab45493-008f-4210-8479-8187da8b42ff" | hired         | interviewing  |
        |   HP05    | "5ab45493-008f-4210-8479-8187da8b42ff" | interviewing  | applied       |
        |   HP06    | "d72e58c1-ada6-4a7a-b9c5-fb9fe023d620" | applied       | applied       |
        |   HP07    | "72e629c7-04a5-42fc-a552-6cf83576b0b5" | interviewing  | interviewing  |
        |   HP08    | "4ff7567e-d639-4a5f-b440-adefe64e33c6" | hired         | hired         |
        |   HP09    | "6fc9d2bb-590c-4351-b0b9-45686e61a4ed" | applied       | hired         |
        |   HP010   | "5ab45493-008f-4210-8479-8187da8b42ff" | hired         | applied       |

   Scenario Outline: Member stage persisted after page reload
      Given I set the state of the Crew Member <uuid> to  <initial stage>
      When  I reload the page
      Then I see the crew member <uuid> in the stage <initial stage>

      Examples:
        |Scenario Id| uuid                                   | initial stage |
        |   HP11    | "4ff7567e-d639-4a5f-b440-adefe64e33c6" | applied       |
        |   HP11    | "4ff7567e-d639-4a5f-b440-adefe64e33c6" | interviewing  |
        |   HP11    | "4ff7567e-d639-4a5f-b440-adefe64e33c6" | hired         |
