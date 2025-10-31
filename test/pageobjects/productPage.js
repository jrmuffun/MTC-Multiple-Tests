import Webpage from '../pageobjects/url.js';
import {$,$$,$x} from '@wdio/globals'

class ProductPage extends Webpage{
    get productTitle() {
        // Get the "Products" title on the products page
        return $('.title')
    }
    get cartIcon() {
        return $('.shopping_cart_link')
    }
    get hamburgerMenu() {
        return $('#react-burger-menu-btn')
    }
    get hamburgerItems() {
        return $$('//nav[@class="bm-item-list"]/a')
    }

    async clickCart() {
        this.cartIcon.click();
    }
    async clickHamburgerMenu(option) {
        await this.hamburgerMenu.click();
        await this.hamburgerItems[option].click();
    }
}

export default new ProductPage();