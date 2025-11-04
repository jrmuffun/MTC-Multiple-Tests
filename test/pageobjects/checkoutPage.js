import Webpage from './url.js'
import {$,$$,expect,browser} from '@wdio/globals'

class CheckoutPage extends Webpage {
    get checkoutTitle() {
        return $('.title')
    }

    async assertCheckPg1(softAssertion) {
        // check if softAssertion is true, then run a soft assertion
        if(softAssertion === true) {
            await expect.soft(this.checkoutTitle).toExist();
        }
        // anything else, run normal expect
        else{
            await expect(this.checkoutTitle).toExist();
        }
    }
}

export default new CheckoutPage();