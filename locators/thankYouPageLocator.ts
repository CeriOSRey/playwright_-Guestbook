import { Page } from "@playwright/test";


export default class ThankYouPageLocator {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    public get entryIdLabel() {
        const entryIdLabel = this.page.locator('//div[@id="uniqueid"]')
        if (entryIdLabel !== null) {
            return entryIdLabel
        } else throw new Error("Entry Id label not found.")
    }

    public get dateLabel() {
        const dateLabel = this.page.locator('//div[@id="date"]')
        if (dateLabel !== null) {
            return dateLabel
        } else throw new Error("dateLabel not found.")
    }

    public get nameLabel() {
        const nameLabel = this.page.locator('//div[@id="name"]')
        if (nameLabel !== null) {
            return nameLabel
        } else throw new Error("nameLabel not found.")
    }

    public get emailLabel() {
        const emailLabel = this.page.locator('//div[@id="email"]')
        if (emailLabel !== null) {
            return emailLabel
        } else throw new Error("emailLabel not found.")
    }

    public get genderdLabel() {
        const genderdLabel = this.page.locator('//div[@id="gender"]')
        if (genderdLabel !== null) {
            return genderdLabel
        } else throw new Error("genderdLabel not found.")
    }

    public get subscribeLabel() {
        const subscribeLabel = this.page.locator('//div[@id="subscribe"]')
        if (subscribeLabel !== null) {
            return subscribeLabel
        } else throw new Error("subscribeLabel not found.")
    }

    public get automationToolLabel() {
        const automationToolLabel = this.page.locator('//div[@id="favtool"]')
        if (automationToolLabel !== null) {
            return automationToolLabel
        } else throw new Error("automationToolLabel not found.")
    }

    public get commentLabel() {
        const commentLabel = this.page.locator('(//div[text()="Comment"])[1]')
        if (commentLabel !== null) {
            return commentLabel
        } else throw new Error("commentLabel not found.")
    }

    public get viewEntryButton() {
        const viewEntryButton = this.page.locator('//a[contains(text(),"View your Guest Book Entry")]')
        if (viewEntryButton !== null) {
            return viewEntryButton
        } else throw new Error("viewEntryButton not found.")
    }
}