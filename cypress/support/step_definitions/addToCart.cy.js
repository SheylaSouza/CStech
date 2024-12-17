import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-xpath';
   
Given('the customer is on the product page', () => {
 // Visit the product page
 cy.visit('https://www.bonprix.co.uk/');

 // Verify that the page has loaded
 cy.get('body').should('be.visible');

// Search for the product
cy.get('input.mhSearchBox.deletable')
.should('not.be.disabled') // Wait until it's enabled
.type('Longline Hoodie{enter}',{ force: true }); // Search for the product

//Opening the product 
cy.get('.pDescriptionContainer.productDescriptionContainer')
.first()
.should('be.visible')
.click();
});

When('the customer clicks the Add to Cart button', () => {
  
  cy.get('.productOptionParentContainer.option1Container.swatchesEnabled')
  .find('.productOptionItem.productSwatchItem[data-optiontext="Black"]') //Selects the Black option
  .click();  //Click on the option (e.g., selecting the color)

  cy.get('.productOptionParentContainer.option2Container')
      .find('.productOptionItem[data-optiontext="10/12"]') //Use the size text to select the element
      .click();

  const getIframeBody = () => {
    // Use XPath to locate the iframe on the page
    return cy.xpath('/html/body/div[6]/div/div[1]/div[2]/div[2]/div[6]', {timeout:180000}) //Assert that the iframe exists before proceeding with further interactions
      .should('exist'); //Access the iframe is get its body
  };

  getIframeBody()
    .find('.bagButton--container') //Find the .bagButton--container inside the iframe body
    .click() //Click the button

});

Then('the shopping site added the product to the shopping cart', () => {
  cy.get('svg#sbIcon')  //Locate the SVG element by its ID
  .should('be.visible'); //Assert that the SVG element is visible on the page

  cy.get('#xfoBagCount.mhQtyCount.bgBrandColor', { timeout: 10000 })  //Select the div using its unique ID and relevant classes
  .should('have.text', '1'); // heck that the text updates to "1"
});

Given('the customer is viewing a cart with multiple items', () => {
 // Visit the product page
 cy.visit('https://www.bonprix.co.uk/');
 
 // Verify that the page has loaded
 cy.get('body').should('be.visible');

 // Search for the product
 cy.get('input.mhSearchBox.deletable')
   .should('not.be.disabled') // Wait until it's enabled
   .type('Longline Hoodie{enter}', { force: true }); // Search for the product

 // Open the first product
 cy.get('.pDescriptionContainer.productDescriptionContainer')
   .first()
   .should('be.visible')
   .click();

const getIframeBody = () => {
  return cy
      .xpath('/html/body/div[6]/div/div[1]/div[2]/div[2]/div[6]', { timeout: 180000 }) // Locate the iframe using XPath
      .should('exist') // Ensure the iframe exists
};

 // Repeat the actions multiple times
 const repeatCount = 3;

 Cypress._.times(repeatCount, () => {
   // Select the Black color option
   cy.get('.productOptionParentContainer.option1Container.swatchesEnabled')
     .find('.productOptionItem.productSwatchItem[data-optiontext="Black"]')
     .should('be.visible')
     .click();

   // Select the 10/12 size option
   cy.get('.productOptionParentContainer.option2Container')
     .find('.productOptionItem[data-optiontext="10/12"]')
     .should('be.visible')
     .click();

   // Handle the iframe and click the "Add to Bag" button
   getIframeBody()
     .find('.bagButton--container')
     .should('be.visible') // Ensure the button is visible
     .click();

   // Optional: Confirm the action
   cy.log('Product added to the bag.', { timeout: 15000 });
 });

 cy.get('svg#sbIcon')  //Locate the SVG element by its ID
 .should('be.visible')//Assert that the SVG element is visible on the page
 .click();

 });
 
 When('the customer clicks the Remove button next to an item', () => {
   
  const getIframeBody = () => {
    return cy
    .xpath('/html/body/div[6]/div/div[2]/div[1]/form/div[2]/div[3]/div[2]', { timeout: 10000 })
    .should('be.visible');
  };

  getIframeBody()
     .find('.bagItemRemoveButton')
     .should('be.visible') // Ensure the button is visible
     .click();
   
 });
 
 Then('the shopping site should decrease the quantity of that item by 1', () => {
  const getIframeBody = () => {
    return cy
    .xpath('/html/body/div[6]/div/div[2]/div[1]/form/div[2]/div[3]/div[2]', { timeout: 10000 })
    .should('be.visible');
  };

  getIframeBody().then((iframeBody) => {
    // Retry finding the element after an update
    cy.get('.bagStatusContainer.bagStatusItemRemoved')  // Select the container with the "item removed" message
    .should('be.visible')  // Ensure the element is visible
    .contains('Item has been removed.');  // Verify the text is present
  }); 
});