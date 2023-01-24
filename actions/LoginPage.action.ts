import { Page } from "@playwright/test";
import LoginPageLocator from "../locators/loginPageLocator";
import * as userData from "../data/userdata.json"
import MainPageHeaderLocator from "../locators/mainPageLocator";

export default class LoginPageActions {
    public locator: LoginPageLocator
    public headerLocator: MainPageHeaderLocator
    public page: Page

    constructor(page: Page) {
        this.page = page
        this.locator = new LoginPageLocator(page)
        this.headerLocator = new MainPageHeaderLocator(page)
    }
    
    public async clickHeaderLoginButton() {
        await this.headerLocator.headerLoginButton.click()
    }

    public async fillUserName(username: string) {   
        await this.locator.usernameField.fill(userData.credentials.username)
        await this.locator.usernameField.press("Enter")
    }

    public async fillPassword(password: string) {
        await this.locator.passwordField.fill(userData.credentials.password)
    }

    public async clickLoginButton() {
        await this.locator.loginButton.click()
    }

    public async loginUser() {
        await this.clickHeaderLoginButton()
        await this.page.waitForTimeout(3000)
        await this.fillUserName(userData.credentials.username),
        await this.fillPassword(userData.credentials.password),
        await this.clickLoginButton()
    }

    public async enterWrongCredentials() {
        await this.clickHeaderLoginButton()
        await this.page.waitForTimeout(3000)
        await this.fillUserName(userData.credentials.wrongUsername)
        await this.fillPassword(userData.credentials.wrongPassword)
        await this.clickLoginButton()
    }

    public async checkErrorMessage() {
        return await this.locator.errorMessage.isVisible
    }

    public async checkForLogoutButton() {
        return await this.locator.usernameFromLogoutButton
    }

}