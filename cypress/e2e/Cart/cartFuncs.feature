Feature: Cart functionality

  Feature: The user is able to add products on the shopping cart

Scenario: The customer add a product to the cart  
  Given the customer is on the product page
  When the customer clicks the Add to Cart button
  Then the shopping site added the product to the shopping cart

Scenario: The customer clicks the Remove button to update the cart
  Given the customer is viewing a cart with multiple items
  When the customer clicks the Remove button next to an item
  Then the shopping site should decrease the quantity of that item by 1

