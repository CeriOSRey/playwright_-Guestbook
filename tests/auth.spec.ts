import test, { Browser, BrowserContext, chromium, expect, Page } from "@playwright/test";
import MainHeaderActions from "../actions/mainPageheader.actions";
import * as userData from "../data/userdata.json";
import {urls} from "../common/urls";
import LoginPageActions from "../actions/loginPage.action";

let browser: Browser
let context: BrowserContext
let page: Page

let headerActions: MainHeaderActions
let loginActions: LoginPageActions

test.beforeAll(async () => {
    browser = await chromium.launch({
        headless: false
    })
    context = await browser.newContext()
})

test.afterAll(async () => { 
    await context.close()
    await browser.close()
})

test.describe("Testing Auth flow", () => {
    test.beforeEach(async () => {
        page = await context.newPage()
        page.goto(urls.homeUrl)
        headerActions = new MainHeaderActions(page)
        loginActions = new LoginPageActions(page)
    })

    test.afterEach(async () => {
        await page.close()
    })

    test("Wrong Credentials",async () => {
        await loginActions.enterWrongCredentials()
        const errorMessage = loginActions.checkErrorMessage
        expect(errorMessage).toBeTruthy()
    })

    test("Correct Credentials", async () => {
        await Promise.all([
            await loginActions.loginUser(),
            await page.waitForNavigation({waitUntil: "networkidle"}),
            expect(await page.title()).toBe(userData.signTheGuestbookPageTitle)
        ])   
    })


})