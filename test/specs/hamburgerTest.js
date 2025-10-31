import Login from '../pageobjects/loginPage.js';
import ProductPage from '../pageobjects/productPage.js';
import CartPage from '../pageobjects/cartPage.js';

describe('Hamburger Menu Buttons Test', () => {
    it('should have all buttons function as intended', async () => {
        // NO EXPECTS HERE, MUST BE IN METHODS
        // Will need to login as a setup
        await Login.open();
        await Login.login("standard_user", "secret_sauce");
        
        // Click on the cart icon and soft assert the page
        await ProductPage.clickCart();
        await CartPage.assertCartPage();
        // Click on the hamburger menu (in method)
        // Click "All Items" and assert product page
        // Click Hamburger menu
        // Click "About" and assert URL is saucelabs.com
        // Go back to product page
        // Click "Logout" in hamburger menu and assert login page (with username/password fields)
    })
})