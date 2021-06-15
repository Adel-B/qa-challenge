import { Then } from "cypress-cucumber-preprocessor/steps";
import { hiringBoard } from '../../../helpers/selectors'


Then(/^All the Crew Members are displayed$/, function () {
    const crewMembers= this.initialData.data;
    crewMembers.forEach(function(crewMember) {
        cy.get(hiringBoard.crewMember.container({ uuid: crewMember.login.uuid, column: crewMember.hiringStage })).should('be.visible');
        cy.get(hiringBoard.crewMember.photo({ uuid: crewMember.login.uuid, column: crewMember.hiringStage })).should('be.visible');
        cy.get(hiringBoard.crewMember.infoText({ uuid: crewMember.login.uuid, column: crewMember.hiringStage })).should('be.visible');
        cy.get(hiringBoard.crewMember.infoText({ uuid: crewMember.login.uuid, column: crewMember.hiringStage })).invoke("text").should('contain', crewMember.name.first);
        cy.get(hiringBoard.crewMember.infoText({ uuid: crewMember.login.uuid, column: crewMember.hiringStage })).invoke("text").should('contain', crewMember.name.last);
        cy.get(hiringBoard.crewMember.infoText({ uuid: crewMember.login.uuid, column: crewMember.hiringStage })).invoke("text").should('contain', crewMember.location.city);
});
});


Then('I see the crew member {string} in the stage {word}', (uuid, stage) => {
    cy.get(hiringBoard.crewMember.container({ uuid: uuid, column: stage })).should('be.visible');
    cy.get(hiringBoard.crewMember.photo({ uuid: uuid, column: stage })).should('be.visible');
    cy.get(hiringBoard.crewMember.infoText({ uuid: uuid, column: stage })).should('be.visible');
});
