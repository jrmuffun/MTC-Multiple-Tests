
 # SauceLabs Demo Multiple Tests
  

## Overview

  ### Description
Automated tests written as an example for my MTECH Software QA Course. These test the hamburger menu and cart page.

 ## Example Test Case

### Title

Adding and removing items from cart

### Description

Test functionality of adding and removing items from the cart

This also tests the functionality of quantity in the cart

### Preconditions

+ Go to the saucedemo website
+ Login with the "standard_user"
+ Starting on the product page

### Test Steps

1. Add more than 2 items to your cart
2. Click on the cart icon
3. Remove items from your cart, leaving at least one item
4. Observe the cart icons quantity number

### Expected Test Results

1. The cart icon should update to the correct number of items added
3. Items in the cart should be rmeoved as you click the remove button
4. Quantity should reflect the actual amount of items in the cart
