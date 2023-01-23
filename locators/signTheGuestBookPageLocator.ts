import { Page } from "@playwright/test";


export default class SignTheGuestbookLocator {
    public page: Page

    constructor(page: Page) {
        this.page = page
    }

    public get nameField() {
        const nameField = this.page.locator('//input[@id="txt_name"]')
        if (nameField !== null) {
            return nameField
        } else throw new Error("Name field not found.")
    }

    public get emailField() {
        const emailField = this.page.locator('//input[@id="txt_email"]')
        if (emailField !== null) {
            return emailField
        } else throw new Error("Name field not found.")
    }

    public get subscribeCheckBox() {
        const subscribeCheckBox = this.page.locator('//input[@id="chk_subscribe"]')
        if (subscribeCheckBox !== null) {
            return subscribeCheckBox
        } else throw new Error("Name field not found.")
    }

    public get maleRadialButton() {
        const maleRadialButton = this.page.locator('//input[@id="rdb_genderMale"]')
        if (maleRadialButton !== null) {
            return maleRadialButton
        } else throw new Error("Name field not found.")
    }

    public get femaleRadialButton() {
        const femaleRadialButton = this.page.locator('//input[@id="rdb_genderFemale"]')
        if (femaleRadialButton !== null) {
            return femaleRadialButton
        } else throw new Error("Name field not found.")
    }

    public get testToolDropDown() {
        const testToolDropDown = this.page.locator('//select[@id="cmb_favtool"]')
        if (testToolDropDown !== null) {
            return testToolDropDown
        } else throw new Error("Name field not found.")
    }

    public get playwrightOption() {
        const playwrightOption = this.page.locator('//option[@id="optn_favtool_pw"]')
        if (playwrightOption !== null) {
            return playwrightOption
        } else throw new Error("Name field not found.")
    }

    public get commentTextArea() {
        const commentTextArea = this.page.locator('//textarea[@id="txt_comment"]')
        if (commentTextArea !== null) {
            return commentTextArea
        } else throw new Error("Name field not found.")
    }

    public get countLabel() {
        const countLabel = this.page.locator('//span[@id="count"]')
        if (countLabel !== null) {
            return countLabel
        } else throw new Error("Name field not found.")
    }

    public get submitButton() {
        const submitButton = this.page.locator('//input[@id="btn_submit"]')
        if (submitButton !== null) {
            return submitButton
        } else throw new Error("Name field not found.")
    }
}