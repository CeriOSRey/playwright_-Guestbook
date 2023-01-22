import { Page } from "@playwright/test"

export default class LoginHeader {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    public get headerLoginButton() {
        return this.page.locator('//a[@id="LoginMenuItem"]')
    }

    public get headerLogoutButton() {
        return this.page.locator('//a[@id="LogoutMenuItem"]')
    }

    public get headerGuestBookButton() {
        return this.page.locator('//a[@id="GuestbookMenuItem"]')
    }

    public get headerSignTheGuestBookButton() {
        return this.page.locator('//a[@id="SignTheGuestbookMenuItem"]')
    }

    public get headerAboutButton() {
        return this.page.locator('//a[@id="AboutMenuItem"]')
    }
}
