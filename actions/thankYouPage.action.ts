import { Page } from "@playwright/test";
import ThankYouPageLocator from "../locators/thankYouPageLocator";


export default class ThankYouPageActions {
    private locator: ThankYouPageLocator

    constructor(page:Page) {
        this.locator = new ThankYouPageLocator(page)
    }

    async getEntryIdText() {
        return await (await this.locator.entryIdLabel()).textContent()
    }

    async getDateText() {
        return await (await this.locator.dateLabel()).textContent()
    }

    async getNameText() {
        return await (await this.locator.nameLabel()).textContent()
    }

    async getEmailText() {
        return await (await this.locator.emailLabel()).textContent()
    }

    async getGenderText() {
        return await (await this.locator.genderdLabel()).textContent()
    }

    async getSubscribeText() {
        return await (await this.locator.subscribeLabel()).textContent()
    }

    async getToolText() {
        return await (await this.locator.automationToolLabel()).textContent()
    }

    async getCommentText() {
        return await (await this.locator.commentLabel()).textContent()
    }

    async clickViewButton() {
        return await (await this.locator.viewEntryButton()).click()
    }
}