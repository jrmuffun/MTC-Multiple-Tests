import Login from '../pageobjects/loginPage.js';
import ProductPage from '../pageobjects/productPage.js';
import CartPage from '../pageobjects/cartPage.js';
import Webpage from '../pageobjects/url.js'
import {browser} from '@wdio/globals'

describe('Hamburger Menu Buttons Test', () => {
    it('should have all buttons function as intended', async () => {
        // NO EXPECTS IN THIS FILE, MUST BE IN METHODS
        // Login as a setup
        await Login.open();
        await Login.login("standard_user","secret_sauce");
        // Add items to cart (probably all of them)
        await ProductPage.addProducts(5);
        // Assert cart icon number of items
        await CartPage.assertCartQuantity(6);
        // Click cart icon
        // Remove items from cart (Probably like 4)
        // Assert cart icon quantity
    })
})