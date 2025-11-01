import Webpage from '../pageobjects/url.js';
import {$} from '@wdio/globals'

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
        return $('.shopping_cart_link')
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
        await expect(this.cartQuantity).toHaveText(quantity);
    }
}

export default new CartPage();