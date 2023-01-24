import test, { Browser, BrowserContext, chromium, expect, Page } from "@playwright/test";
import LoginPageActions from "../actions/loginPage.action";
import SignTheGuestbookActions from "../actions/SignTheGuestbookPage.action";
import { urls } from "../common/urls";
import * as userData from "../data/userdata.json"

let browser: Browser
let context: BrowserContext
let page: Page

let loginAction: LoginPageActions
let actions: SignTheGuestbookActions

test.beforeAll(async () => {
    browser = await chromium.launch({
        headless: false
    })
    context = await browser.newContext()
    page = await context.newPage()
    page.goto(urls.homeUrl)
    loginAction = new LoginPageActions(page)
    await loginAction.loginUser()
    actions = new SignTheGuestbookActions(page)
})

test.afterAll(async () => {
    await page.close()
    await context.close()
    await browser.close()
})

test.describe("Fill out the Sign the Guestbook form", () => {
    test("Fill all fields and submit", async () => {
        await actions.fillWholeForm()
        expect(await page.title()).toBe(userData.thankyouPageTitle)
    })
})