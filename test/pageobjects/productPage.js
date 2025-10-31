import Webpage from '../pageobjects/url.js';
import {$,$$,expect,browser} from '@wdio/globals'

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
        if(option === undefined) {
            await this.hamburgerMenu.click();
        }
        else{
            await this.hamburgerMenu.click();
            await this.hamburgerItems[option].click();
        }
    }
    async assertProductPage() {
        await expect(this.productTitle).toExist();
    }
}

export default new ProductPage();