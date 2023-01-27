import { Page } from "@playwright/test";


export default class GuestBookEntryLocators {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    public get getNameLink() {
        const name = this.page.locator("//a[@id='postid01242023-0108AM-63cfa006efccf']") 
        if (name !== null) {
            return name
        } else throw new Error("Name link not found.")
    }

    public get getToolLabel() {
        const tool = this.page.locator("//a[@id='favtool']") 
        if (tool !== null) {
            return tool
        } else throw new Error("Tool label not found.")
    }

    public get getCommentLabel() {
        const comment = this.page.locator("//a[@id='comment']") 
        if (comment !== null) {
            return comment
        } else throw new Error("Comment label not found.")
    }

    public get getPostedOnLabel() {
        const tool = this.page.locator("//a[@id='postedon']") 
        if (tool !== null) {
            return tool
        } else throw new Error("Posted On label not found.")
    }
}