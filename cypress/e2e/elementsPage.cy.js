import { ElementsPage } from "../support/pageObjectModel/elementsPage";
describe('Elements Page Testing', () => {
  beforeEach(function () {
    cy.openDemoQaSite();
    cy.openPage("Elements");
    cy.isVisable(ElementsPage.mainHeader);
  });
  it("Open Text Box page", () => {
    cy.clickNavigatorElement('Text Box');
    cy.hasText(ElementsPage.mainHeader, "Text Box");
  })
  it("Click Submit button without populating any field", () => {
    cy.clickNavigatorElement('Text Box');
    cy.populateTextBoxForm('', '', '', '');
    cy.assertElementTextEquals("#output", "")
  })
});