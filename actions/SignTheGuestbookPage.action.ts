import { Page } from "@playwright/test"
import * as userData from "../data/userdata.json"
import SignTheGuestbookLocator from "../locators/signTheGuestBookPageLocator"

export default class SignTheGuestbookActions {

    public page: Page
    public locator: SignTheGuestbookLocator

    constructor(page: Page) {
        this.locator = new SignTheGuestbookLocator(page)
        this.page = page
    }

    async fillNameField(name: string) {
        await this.locator.nameField.fill(name)
    }

    async fillEmailField(email:string) {
        await this.locator.emailField.fill(email)
    }

    async fillCommentArea(comment:string) {
        await this.locator.commentTextArea.fill(comment)
    }

    async checkSubscribeBox() {
        await this.locator.subscribeCheckBox.click()
    }

    async checkFemaleRadialButton() {
        await this.locator.femaleRadialButton.click()
    }

    async checkmaleRadialButton() {
        await this.locator.maleRadialButton.click()
    }

    async pickPlaywrightAutomationTool() {
        await this.locator.testToolDropDown.click()
        await this.page.waitForTimeout(5000)
        await this.locator.testToolDropDown.selectOption('Microsoft Playwright')
    }

    async clickSubmitButton() {
        await this.locator.submitButton.click()
    }
    
    async fillWholeForm() {
        await this.fillNameField(userData.signTheGuestBookFormData.name)
        await this.fillEmailField(userData.signTheGuestBookFormData.email)
        await this.fillCommentArea(userData.signTheGuestBookFormData.comment)
        await this.checkSubscribeBox()
        await this.checkFemaleRadialButton()
        await this.pickPlaywrightAutomationTool()
        await this.clickSubmitButton()
    }
}