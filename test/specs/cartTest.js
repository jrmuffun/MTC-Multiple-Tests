import Login from '../pageobjects/loginPage.js';
import ProductPage from '../pageobjects/productPage.js';
import CartPage from '../pageobjects/cartPage.js';
import CheckoutPage from '../pageobjects/checkoutPage.js';
import {browser} from '@wdio/globals'

describe('Cart Add and Remove Items [MTQA-3807]', () => {
    it('should be able to add and remove items from the cart', async () => {
        // Login as a setup
        await Login.open();
        await Login.login("standard_user","secret_sauce");
        // Add items to cart (probably all of them)
        await ProductPage.addProducts(6);
        // Assert cart icon number of items
        await CartPage.assertCartQuantity(6);
        // Click cart icon
        await ProductPage.clickCart();
        // Remove items from cart (Probably like 4)
        await CartPage.removeItems(4);
        // Assert cart icon quantity
        await CartPage.assertCartQuantity(2);
        // Reload browser session for next test
        await browser.reloadSession();
    })
})

describe('Cart Page Button Functionality [MTQA-3809]', () => {
    it('should have all buttons on the cart page working', async () => {
        // Login as setup
        await Login.open();
        await Login.login("standard_user","secret_sauce");
        // Go to cart page
        await ProductPage.clickCart();
        // Click "Continue shopping" button
        await CartPage.clickContinueShopping();
        await ProductPage.assertProductPage();
        // Add an item to cart (To test checkout)
        await ProductPage.addProducts(2);
        // Soft assert the cart quantity
        await CartPage.assertCartQuantity(2,true);
        // Click the cart icon
        await ProductPage.clickCart();
        // Click the checkout button
        await CartPage.clickCheckout();
        // Assert checkout page
        await CheckoutPage.assertCheckPg1();
    })
})