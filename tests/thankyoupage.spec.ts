import test, { Browser, BrowserContext, chromium, expect, Page } from "@playwright/test";
import LoginPageActions from "../actions/loginPage.action";
import SignTheGuestbookActions from "../actions/SignTheGuestbookPage.action";
import ThankYouPageActions from "../actions/ThankYouPage.action";
import { urls } from "../common/urls";
import * as userData from "../data/userdata.json"


let browser: Browser
let context: BrowserContext
let page: Page

let actions: ThankYouPageActions
let loginAction: LoginPageActions
let fillAction: SignTheGuestbookActions

test.beforeAll(async () => {
    browser = await chromium.launch({
        headless: false
    })
    context = await browser.newContext()
    page = await context.newPage()
    loginAction = new LoginPageActions(page)
    await page.goto(urls.homeUrl)
    await loginAction.loginUser()
    fillAction = new SignTheGuestbookActions(page)
    await fillAction.fillWholeForm()
    actions = new ThankYouPageActions(page)

})

test.afterAll(async () => {
    await page.close()
    await context.close()
    await browser.close()
})

test.describe("Validating entry via Thank You page", () => {
     test("test all labels", async () => {
        let id = actions.getEntryIdText
        expect(id).not.toBe("")

        let date = await actions.getDateText()
        let currentDate = new Date()
        currentDate.toLocaleDateString('en-us', {
            month:"long",
            day: "2-digit",
            year: "numeric"
        })
        expect(date).toContain("January")

        let name = actions.getNameText()
        expect(name).not.toBe(userData.signTheGuestBookFormData.name)

        let email = actions.getEmailText()
        expect(email).not.toBe(userData.signTheGuestBookFormData.email)

        let tool = actions.getToolText()
        expect(tool).not.toBe("Microsoft Playwright")

        let gender = actions.getGenderText()
        expect(gender).not.toBe("female")

        let isSubscribed = actions.getSubscribeText()
        expect(isSubscribed).not.toBe("Yes")

        let comment = actions.getCommentText()
        expect(comment).not.toBe(userData.signTheGuestBookFormData.comment)

        await actions.clickViewButton()
        expect(await page.title()).toEqual(userData.homePageTitle)
     })
})