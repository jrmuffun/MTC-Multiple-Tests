import Login from '../pageobjects/loginPage.js';
import ProductPage from '../pageobjects/productPage.js';
import CartPage from '../pageobjects/cartPage.js';
import Webpage from '../pageobjects/url.js'
import {browser} from '@wdio/globals'

describe('Hamburger Menu Buttons Test [MTQA-3804]', async () => {
    beforeEach("Login as a setup", async () => {
        await Login.open();
        await Login.login("standard_user", "secret_sauce");
    })
    it('should have the "All Items" button functioning', async () => {
        // Click the cart icon
        await ProductPage.clickCart();
        // Soft assert we are on the cart page
        await CartPage.assertCartPage(true);
        // Click "All Items" on the hamburger menu
        await ProductPage.clickHamburgerMenu(0);
        // Assert we are back on the products page
        await ProductPage.assertProductPage();
    })
    it("should have the 'About' button functioning", async () => {
        // Click the "About" button in the hamburger menu
        await ProductPage.clickHamburgerMenu(1);
        // Assert we are on the correct page
        await Webpage.assertUrl("https://saucelabs.com/")
    })
    it("should have the 'Logout' button functioning", async () => {
        // Click the "Logout" button in the hamburger menu
        await ProductPage.clickHamburgerMenu(2);
        // Assert we are on the login page
        await Login.assertLoginPage();
    })
    it("should have the 'Reset App State' button functioning", async () => {
        // Add products to the cart
        await ProductPage.addProducts(2);
        // Soft assert there are 2 products in cart
        await CartPage.assertCartQuantity(2,true);
        // Click the "Reset app state" button in the hamburger menu
        await ProductPage.clickHamburgerMenu(3);
        // Refresh the page just in case
        await browser.refresh();
        // Ensure there are no items in the cart
        await CartPage.assertCartQuantity(0);
    })
})