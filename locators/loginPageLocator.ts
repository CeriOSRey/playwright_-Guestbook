import { Page } from "@playwright/test";


export default class LoginPageLocator {
    
    public page: Page

    constructor(page: Page) {
        this.page = page
    }

    public get usernameField() {
        const usernameField = this.page.locator('//input[@id="txt_username"]')
        if (usernameField !== null) {
            return usernameField
        } else throw new Error("Username text field not found.")
    }

    public get passwordField() {
        const passwordField = this.page.locator('//input[@id="txt_password"]')
        if (passwordField !== null) {
            return passwordField
        } else throw new Error("Password text field not found.")
    }

    public get loginButton() {
        const loginButton = this.page.locator('//input[@id="btn_submit"]')
        if (loginButton !== null) {
            return loginButton          
        } else throw new Error("Login button is not found.")
    }

    public get errorMessage() {
        const errorMessage = this.page.locator('//input[@id="errormsg"]')
        if (errorMessage !== null) {
            return errorMessage          
        } else throw new Error("Error Message Label is not found.")
    }

    public get usernameFromLogoutButton() {
        const username = this.page.locator('//span[@id="current_user_name"]')
        if (username !== null) {
            return username
        } else throw new Error("Cannot find username text from logout button.")
    }
}