import {browser} from '@wdio/globals'

export default class Webpage {
    static open() {
        return browser.url("https://www.saucedemo.com")
    }
    static async assertUrl(link) {
        await expect(browser).toHaveUrl(link)
    }
}