import Webpage from '../pageobjects/url.js';
import {$} from '@wdio/globals'

class ProductPage extends Webpage{
    get productTitle() {
        // Get the "Products" title on the products page
        return $('.title')
    }
}

export default new ProductPage();