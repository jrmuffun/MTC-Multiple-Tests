import {browser} from '@wdio/globals'

export default class Webpage {
    static open() {
        // Open to the saucedemo page (May not hardcode later)
        return browser.url("https://www.saucedemo.com")
    }
    static async assertUrl(link) {
        // Assert that the page is on a given URL
        const currentURL = await browser.url();
        await expect(currentURL).toHaveUrl(link)
    }
    static async clearLocalStorage() {
        // Execute clearing local storage in browser
        // This must be used once the page is loaded
        await browser.execute('window.localStorage.clear()');
    }
}