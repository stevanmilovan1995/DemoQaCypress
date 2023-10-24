import { HomePage } from "./pageObjectModel/homePage"
import { ElementsPage } from "./pageObjectModel/elementsPage"
import { PageNavigator } from "./pageObjectModel/pageNavigator"
/**
 * @memberOf cy
 * @method openDemoQa
 * @description Navigates to the DemoQA website (https://demoqa.com/).
 */
Cypress.Commands.add('openDemoQaSite', () => {
  cy.visit("https://demoqa.com/")
})

/**
 * @memberOf cy
 * @method openPage
 * @param textValue - The text value to search for within a page element.
 * @description Searches for an element on the page containing the specified textValue,
 * and then clicks on it to open the associated page or perform an action.
 */
Cypress.Commands.add('openPage', (textValue) => {
  cy.get(HomePage.cardBodyText).contains(textValue).click();
})

/**
 * @memberOf cy
 * @method isVisible
 * @param element - An element to check for visibility.
 * @description Checks if the specified element is visible on the page.
 */
Cypress.Commands.add('isVisable', (element) => {
  cy.get(element).should('be.visible');
})

/**
 * @memberOf cy
 * @method hasText
 * @param element - An element to check for text content.
 * @param text - The expected text content.
 * @description Asserts that the specified element has the expected text content.
 */
Cypress.Commands.add('hasText', (element, text) => {
  cy.get(element).should('have.text', text);
})

// NAVIGATOR COMMANDS
/**
 * @memberOf cy
 * @method expandNavigatorGroup
 * @param  navGroupText - The text of the navigation group to expand.
 * @description Expands a navigation group by clicking on its header.
 */
Cypress.Commands.add('expandNavigatorGroup', (navGroupText) => {
  cy.get(PageNavigator.parentNavigatorHeader).contains(navGroupText).click();
})

/**
 * @memberOf cy
 * @method clickNavigatorElement
 * @param  navElementText - The text of the navigation element to click.
 * @description Clicks on a navigation element with the specified text.
 */
Cypress.Commands.add('clickNavigatorElement', (navElementText) => {
  cy.get(PageNavigator.childNavigatorElement).contains(navElementText).click();
})

//ELEMENTS PAGE COMMANDS
/**
 * @memberOf cy
 * @method populateTextBoxForm
 * @param fullName - The full name to populate in the text box.
 * @param mail - The email to populate in the text box.
 * @param currentAddress - The current address to populate in the text box.
 * @param permanentAddress - The permanent address to populate in the text box.
 * @description Populates text boxes in a form.
 */
Cypress.Commands.add('populateTextBoxForm', (fullName, mail, currentAddress, permanentAddress) => {
  if (fullName !== '') {
    cy.get(ElementsPage.textBox.userFullName).clear().type(fullName);
  }
  if (mail !== '') {
    cy.get(ElementsPage.textBox.userFullMail).clear().type(mail);
  }
  if (currentAddress !== '') {
    cy.get(ElementsPage.textBox.userCurrentAddress).clear().type(currentAddress);
  }
  if (permanentAddress !== '') {
    cy.get(ElementsPage.textBox.userPermanentAddress).clear().type(permanentAddress);
  }
  cy.get(ElementsPage.textBox.submitBtn).click();
});

/**
 * @memberOf cy
 * @method assertElementTextEquals
 * @param element - The element to assert text content for.
 * @param expectedText - The expected text content.
 * @description Asserts that the entire text content of the specified element is equal to the expected text.
 */
Cypress.Commands.add('assertElementTextEquals', (element, expectedText) => {
  cy.get(element).invoke('text').should('eq', expectedText);
});
