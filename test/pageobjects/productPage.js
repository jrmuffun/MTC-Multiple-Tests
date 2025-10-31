import Webpage from '../pageobjects/url.js';
import {$,$$,expect,browser} from '@wdio/globals'

class ProductPage extends Webpage{
    get productTitle() {
        // Get the "Products" title on the products page
        return $('.title')
    }
    get cartIcon() {
        // Get the cart icon element
        return $('.shopping_cart_link')
    }
    get hamburgerMenu() {
        // Get the hamburger menu element
        return $('#react-burger-menu-btn')
    }
    get hamburgerItems() {
        // Get the items in the hamburger menu
        return $$('//nav[@class="bm-item-list"]/a')
    }

    async clickCart() {
        // Click the cart icon
        this.cartIcon.click();
    }
    async clickHamburgerMenu(option) {
        // Check if option is defined
        if(option === undefined) {
            // Click the hamburger menu
            await this.hamburgerMenu.click();
        }
        else{
            // Click the hamburger menu, then click the given option
            await this.hamburgerMenu.click();
            await this.hamburgerItems[option].click();
        }
    }
    async assertProductPage() {
        // Assert the product title exists
        await expect(this.productTitle).toExist();
    }
}

export default new ProductPage();