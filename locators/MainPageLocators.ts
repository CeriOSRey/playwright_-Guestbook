import { Page } from "@playwright/test"

export default class MainPageHeaderLocators {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    public get headerLoginButton() {
        const loginButton = this.page.locator('//a[@id="LoginMenuItem"]')
        if (loginButton !== null) {
            return loginButton
        } else throw new Error("Login button not found.")       
    }

    public get headerLogoutButton() {
        const logoutButton = this.page.locator('//a[@id="LogoutMenuItem"]')
        if (logoutButton !== null) {
            return logoutButton
        } else throw new Error("Logout button not found.")
    }

    public get headerGuestBookButton() {
        const guestBookButton = this.page.locator('//a[@id="GuestbookMenuItem"]')
        if (guestBookButton !== null) {
            return guestBookButton
        } else throw new Error("GuestBook button not found.")
    }

    public get headerSignTheGuestBookButton() {
        const signGuestBookButton = this.page.locator('//a[@id="SignTheGuestbookMenuItem"]')
        if (signGuestBookButton !== null) {
            return signGuestBookButton
        } else throw new Error("Sign the GuestBook button not found.")
    }

    public get headerAboutButton() {
        const aboutButton = this.page.locator('//a[@id="AboutMenuItem"]')
        if (aboutButton !== null) {
            return aboutButton
        } else throw new Error("About button not found.")
    }
}
