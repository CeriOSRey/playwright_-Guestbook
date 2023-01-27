import { Browser, BrowserContext, Page } from "@playwright/test";
import * as userData from "../data/userdata.json"
import GuestBookEntryLocators from "../locators/guestbookEntryLocators";

export default class GuestbookEntryActions {
    public locator: GuestBookEntryLocators

    constructor(page: Page) {
        this.locator = new GuestBookEntryLocators(page)
    }
    
    async getNameText() {
        return await this.locator.getNameLink.textContent()
    }

    async clickName() {
        await this.locator.getNameLink.click()
    }

    async getToolText() {
        await this.locator.getToolLabel.textContent()
    }

    async getCommentText() {
        return await this.locator.getCommentLabel.textContent()
    }

    async getDateText() {
        return await this.locator.getPostedOnLabel.textContent()
    }
}