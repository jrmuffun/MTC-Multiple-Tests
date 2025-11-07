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
    get productList() {
        return $$('//div[@class="pricebar"]/button')
    }
    get itemTitle() {
        return $('div[data-test="inventory-item-name"]')
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
    async addProducts(productNum) {
        // Check if productNum is higher than 6, if true, throw an error
        if(productNum > 6) {
            throw new Error("addProducts parameter (productNum) cannot be higher than 6");
        }
        // Subtract 1 from productNum since indexing starts at 0
        productNum--;
        // Loop for each product, adding everything below it
        while(productNum <= 5 && productNum >= 0) {
            // Click the add to cart button for productNum (up to 6)
            await this.productList[productNum].click();
            // incriment productNum down 1
            productNum--;
        }
    }
}

export default new ProductPage();