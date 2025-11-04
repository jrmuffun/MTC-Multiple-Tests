import Webpage from '../pageobjects/url.js';
import LoginPage from './loginPage.js';
import {$, $$} from '@wdio/globals'

class CartPage extends Webpage{
    get cartIcon() {
        // Return shopping cart icon
        return $('.shopping_cart_link')
    }
    get cartTitle() {
        // Return title of the page
        return $('.title')
    }
    get cartQuantity() {
        // return the span of the shopping cart link (which has text)
        return $('.shopping_cart_link > span')
    }
    get itemRemoveBttn() {
        // return all remove buttons in an array
        return $$('//button[contains(@id,"remove")]')
    }
    get continueShoppingBttn() {
        return $('#continue-shopping')
    }
    get checkoutBttn() {
        return $('#checkout')
    }

    async assertCartPage(softAssertion) {
        if(softAssertion === true) {
            // Soft assert that the cart title says "Your Cart"
            await expect.soft(this.cartTitle).toHaveText("Your Cart")
        }
        else{
            // Assert that the cart title says "Your Cart"
            await expect(this.cartTitle).toHaveText("Your Cart")
        }
    }
    async assertCartQuantity(quantity,softAssertion) {
        // convert quantity to string, WDIO returns strings with toHaveText
        let cartNum = quantity.toString();
        // Check if softAssertion is true, then return a soft assertion
        if(softAssertion === true) {
            await expect.soft(this.cartQuantity).toHaveText(cartNum);
        }
        // Anything else, do a normal expect
        else{
            await expect(this.cartQuantity).toHaveText(cartNum);
        }
    }
    async removeItems(quantity) {
        // If quantity is out of range, throw error
        if(quantity > 5 || quantity < 0) {
            throw new Error("removeItems: quantity cannot be larger than 5")
        }
        // Remove one from quantity so it reflects how many items to remove
        quantity--;
        // Loop removing each item for quantity
        while(quantity < 5 && quantity >= 0) {
            await this.itemRemoveBttn[quantity].click();
            quantity--;
        }
    }
    async clickContinueShopping() {
        await this.continueShoppingBttn.click();
    }
    async clickCheckout() {
        await this.checkoutBttn.click();
    }
}

export default new CartPage();