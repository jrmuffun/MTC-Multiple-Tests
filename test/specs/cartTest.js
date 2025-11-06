import Login from '../pageobjects/loginPage.js';
import ProductPage from '../pageobjects/productPage.js';
import CartPage from '../pageobjects/cartPage.js';
import CheckoutPage from '../pageobjects/checkoutPage.js';
import Webpage from '../pageobjects/url.js'
// import {browser} from '@wdio/globals'

// describe('Cart Add and Remove Items [MTQA-3807]', () => {
//     it('should be able to add and remove items from the cart', async () => {
//         // Login as a setup
//         await Login.open();
//         await Login.login("standard_user","secret_sauce");
//         // Add items to cart (probably all of them)
//         await ProductPage.addProducts(6);
//         // Assert cart icon number of items
//         await CartPage.assertCartQuantity(6);
//         // Click cart icon
//         await ProductPage.clickCart();
//         // Remove items from cart (Probably like 4)
//         await CartPage.removeItems(4);
//         // Assert cart icon quantity
//         await CartPage.assertCartQuantity(2);
//         // Reload browser session for next test
//         await browser.reloadSession();
//     })
// })

// describe('Cart Page Button Functionality [MTQA-3809]', () => {
//     it('should have all buttons on the cart page working', async () => {
//         // Login as setup
//         await Login.open();
//         await Login.login("standard_user","secret_sauce");
//         // Go to cart page
//         await ProductPage.clickCart();
//         // Click "Continue shopping" button
//         await CartPage.clickContinueShopping();
//         await ProductPage.assertProductPage();
//         // Add an item to cart (To test checkout)
//         await ProductPage.addProducts(2);
//         // Soft assert the cart quantity
//         await CartPage.assertCartQuantity(2,true);
//         // Click the cart icon
//         await ProductPage.clickCart();
//         // Click the checkout button
//         await CartPage.clickCheckout();
//         // Assert checkout page
//         await CheckoutPage.assertCheckPg1();
//     })
// })

describe('Cart Add and Remove Items [MTQA-3807]', () => {
    beforeEach("Login as a setup", async () => {
        await Login.open();
        await Login.login("standard_user", "secret_sauce");
    })
    it("should be able to add items to cart", async () => {
        // Add items to cart
        await ProductPage.addProducts(6);
        // Assert cart icon number of items
        await CartPage.assertCartQuantity(6);
        // Clear local stoage for next tests
        await Webpage.clearLocalStorage();
    })
    it("should be able to remove items from cart", async () => {
        // Add items to cart to be able to remove them
        await ProductPage.addProducts(6);
        // Soft assert cart icon number of items
        await CartPage.assertCartQuantity(6,true);
        // Click cart icon
        await ProductPage.clickCart();
        // Remove items from cart
        await CartPage.removeItems(4);
        // Assert cart icon quantity
        await CartPage.assertCartQuantity(2);
    })
})

describe("Cart Page Button Functionality [MTQA-3809]", () => {
    beforeEach("Login as a setup", async () => {
        await Login.open();
        await Login.login("standard_user", "secret_sauce");
    })
    it("should have the 'Continue Shopping' button functioning", async () => {
        await ProductPage.clickCart();
        await CartPage.assertCartPage(true);
        await CartPage.clickContinueShopping();
        await ProductPage.assertProductPage();
    })
    it("should have the 'Checkout' button functioning", async () => {
        await ProductPage.addProducts(1);
        await CartPage.assertCartQuantity(1,true);
        await ProductPage.clickCart();
        await CartPage.clickCheckout();
        await CheckoutPage.assertCheckPg1();
    })
})