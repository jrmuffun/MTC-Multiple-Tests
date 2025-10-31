import {$} from '@wdio/globals'
import Webpage from '../pageobjects/url.js';

class Login extends Webpage {

    get usernameInput () {
        // Get username input field
        return $('#user-name');
    }
    get passwordInput() {
        // Get password input field
        return $('input#password');
    }
    get loginBttn() {
        // Get login/submit button
        return $('#login-button');
    }
    get loginError() {
        // Get Login error field
        return $('h3[data-test="error"]')
    }

    open(){
        // Calling this function in case paths become useful later
        return Webpage.open();
    }
    async login(username, password) {
        // input username (variable)
        await this.usernameInput.setValue(username);
        // input password (variable)
        await this.passwordInput.setValue(password);
        // Click login button
        await this.loginBttn.click();
    }
}

export default new Login();