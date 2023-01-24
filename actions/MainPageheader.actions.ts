import { Page } from "@playwright/test"
import MainPageHeaderLocator from "../locators/mainPageLocator"

export default class MainHeaderActions {
    private locator: MainPageHeaderLocator

    constructor(page: Page) {
        this.locator = new MainPageHeaderLocator(page)
    }

    public async clickLogin() {
        const button = this.locator.headerLoginButton
        await button.click()
    }

    public async clickLogout() {
        const button = this.locator.headerLogoutButton
        await button.click()
    }

    public async clickGuestBook() {
        const button = this.locator.headerGuestBookButton
        await button.click()
    }

    public async clickSignTheGuestBook() {
        const button = this.locator.headerSignTheGuestBookButton
        await button.click()
    }

    public async clickAbout() {
        const button = this.locator.headerAboutButton
        await button.click()
    }

}