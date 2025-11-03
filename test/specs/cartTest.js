import Login from '../pageobjects/loginPage.js';
import ProductPage from '../pageobjects/productPage.js';
import CartPage from '../pageobjects/cartPage.js';
import Webpage from '../pageobjects/url.js'
import {browser} from '@wdio/globals'

describe('Cart Add and Remove Items [MTQA-3807]', () => {
    it('should be able to add and remove items from the cart', async () => {
        // NO EXPECTS IN THIS FILE, MUST BE IN METHODS
        // Login as a setup
        await Login.open();
        await Login.login("standard_user","secret_sauce");
        // Add items to cart (probably all of them)
        await ProductPage.addProducts(5);
        // Assert cart icon number of items
        await CartPage.assertCartQuantity(6);
        // Click cart icon
        await ProductPage.clickCart();
        // Remove items from cart (Probably like 4)
        await CartPage.removeItems(4);
        // Assert cart icon quantity
        await CartPage.assertCartQuantity(2);
    })
})

describe('Cart Page Button Functionality [MTQA-3809]'), () => {
    it('should have all buttons on the cart page working'), async () => {
        // NO EXPECTS IN THIS FILE, MUST BE IN METHODS
        
    }
}