import {browser} from '@wdio/globals'

export default class Webpage {
    static open() {
        // Open to the saucedemo page (May not hardcode later)
        return browser.url("https://www.saucedemo.com")
    }
    static async assertUrl(link) {
        // Assert that the page is on a given URL
        await expect(browser).toHaveUrl(link)
    }
    static async clearLocalStorage() {
        await browser.execute('window.localStorage.clear()');
    }
}