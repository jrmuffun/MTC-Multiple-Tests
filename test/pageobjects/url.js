import {browser} from '@wdio/globals'

export default class Webpage {
    static open() {
        return browser.url("https://www.saucedemo.com")
    }
}