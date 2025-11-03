import Webpage from '../pageobjects/url.js';
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
        return $('.shopping_cart_link > span')
    }
    get itemRemoveButton() {
        return $$('//button[contains(@id,"remove")]')
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
    async assertCartQuantity(quantity) {
        let cartNum = quantity.toString();
        await expect(this.cartQuantity).toHaveText(cartNum);
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
            await this.itemRemoveButton[quantity].click();
            quantity--;
        }
    }
}

export default new CartPage();