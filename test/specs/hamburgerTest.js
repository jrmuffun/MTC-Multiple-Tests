import Login from '../pageobjects/loginPage.js';
import ProductPage from '../pageobjects/productPage.js';
import CartPage from '../pageobjects/cartPage.js';
import Webpage from '../pageobjects/url.js'
import {browser} from '@wdio/globals'

describe('Hamburger Menu Buttons Test', () => {
    it('should have all buttons function as intended', async () => {
        // Will need to login as a setup
        await Login.open();
        await Login.login("standard_user", "secret_sauce");
        // Click on the cart icon and soft assert the page
        await ProductPage.clickCart();
        await CartPage.assertCartPage(true);
        // Click on the hamburger menu (in method)
        // Click "All Items" and assert product page
        await ProductPage.clickHamburgerMenu(0);
        await ProductPage.assertProductPage();
        // Click Hamburger menu
        // Click "About" and assert URL is saucelabs.com
        await ProductPage.clickHamburgerMenu(1);
        await Webpage.assertUrl("https://saucelabs.com/");
        // Go back to product page
        await browser.back();
        await ProductPage.assertProductPage(true);
        // Click "Logout" in hamburger menu and assert login page (with username/password fields)
        await ProductPage.clickHamburgerMenu(2);
        await Login.assertLoginPage();
    })
})