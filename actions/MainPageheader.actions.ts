import { expect, Page } from "@playwright/test"
import MainPageHeaderLocators from "../locators/MainPageLocators"

export default class MainHeaderActions {
    private page: Page

    constructor(page:Page) {
        this.page = page
    }

    public async clickLogin() {
        const locator = new MainPageHeaderLocators(this.page)
        const button = locator.headerLoginButton
        await button.click()
    }

    public async clickLogout() {
        const locator = new MainPageHeaderLocators(this.page)
        const button = locator.headerLogoutButton
        await button.click()
    }

    public async clickGuestBook() {
        const locator = new MainPageHeaderLocators(this.page)
        const button = locator.headerGuestBookButton
        await button.click()
    }

    public async clickSignTheGuestBook() {
        const locator = new MainPageHeaderLocators(this.page)
        const button = locator.headerSignTheGuestBookButton
        await button.click()
    }

    public async clickAbout() {
        const locator = new MainPageHeaderLocators(this.page)
        const button = locator.headerAboutButton
        await button.click()
    }

}