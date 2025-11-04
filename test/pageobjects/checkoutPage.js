import Webpage from './url.js'
import {$,$$,expect,browser} from '@wdio/globals'

class CheckoutPage extends Webpage {
    get checkoutTitle() {
        return $('.title')
    }

    async assertCheckPg1() {
        
    }
}