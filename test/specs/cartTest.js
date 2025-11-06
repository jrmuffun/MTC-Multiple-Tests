import Login from '../pageobjects/loginPage.js';
import ProductPage from '../pageobjects/productPage.js';
import CartPage from '../pageobjects/cartPage.js';
import CheckoutPage from '../pageobjects/checkoutPage.js';
import Webpage from '../pageobjects/url.js'
// import {browser} from '@wdio/globals'

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
        // Click the cart icon
        await ProductPage.clickCart();
        // Soft assert we are on the cart page
        await CartPage.assertCartPage(true);
        // click continue shopping and assert we are on the product page
        await CartPage.clickContinueShopping();
        await ProductPage.assertProductPage();
    })
    it("should have the 'Checkout' button functioning", async () => {
        // Add a product so we can click the checkout button
        await ProductPage.addProducts(1);
        // soft assert the product got added
        await CartPage.assertCartQuantity(1,true);
        // click the cart icon and click checkout
        await ProductPage.clickCart();
        await CartPage.clickCheckout();
        // assert we are on the first checkout page
        await CheckoutPage.assertCheckPg1();
    })
})