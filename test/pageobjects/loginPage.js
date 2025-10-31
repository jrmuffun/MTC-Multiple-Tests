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

    async open(){
        // Calling this method in case paths become useful later
        await Webpage.open();
    }
    async login(username, password) {
        // input username (variable)
        await this.usernameInput.setValue(username);
        // input password (variable)
        await this.passwordInput.setValue(password);
        // Click login button
        await this.loginBttn.click();
    }
    async assertLoginPage(softAssertion) {
        if(softAssertion === true) {
            // Assert both username and password input fields
            await expect.soft(this.usernameInput).toExist();
            await expect.soft(this.passwordInput).toExist();
        }
        else {
            // Assert both username and password input fields
            await expect(this.usernameInput).toExist();
            await expect(this.passwordInput).toExist();
        }

    }
}

export default new Login();