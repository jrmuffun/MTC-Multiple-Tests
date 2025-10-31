import Webpage from '../pageobjects/url.js';
import {$} from '@wdio/globals'

class CartPage extends Webpage{
    get cartIcon() {
        return $('.shopping_cart_link')
    }
    get cartTitle() {
        return $('.title')
    }

    async assertCartPage(softAssertion) {
        if(softAssertion === true) {
            await expect.soft(this.cartTitle).toHaveText("Your Cart")
        }
        else{
            await expect(this.cartTitle).toHaveText("Your Cart")
        }
    }
}

export default new CartPage();