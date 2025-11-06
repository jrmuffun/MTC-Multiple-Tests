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
        await ProductPage.clickCart();
        await CartPage.assertCartPage(true);
        await ProductPage.clickHamburgerMenu(0);
        await ProductPage.assertProductPage();
    })
    it("should have the 'About' button functioning", async () => {
        await ProductPage.clickHamburgerMenu(1);
        await Webpage.assertUrl("https://saucelabs.com/")
    })
    it("should have the 'Logout' button functioning", async () => {
        await ProductPage.clickHamburgerMenu(2);
        await Login.assertLoginPage();
    })
    it("should have the 'Reset App State' button functioning", async () => {
        await ProductPage.addProducts(2);
        await CartPage.assertCartQuantity(2,true);
        await ProductPage.clickHamburgerMenu(3);
        await browser.refresh();
        await CartPage.assertCartQuantity(0);
    })
})