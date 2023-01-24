import test, { Browser, BrowserContext, chromium, expect, Page } from "@playwright/test";
import MainHeaderActions from "../actions/mainPageheader.actions";
import * as userData from "../data/userdata.json";
import {urls} from "../common/urls";

let browser: Browser
let context: BrowserContext
let page: Page

let headerActions: MainHeaderActions

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

test.describe("Test for header navigation buttons", () => {

    test.beforeEach(async () => {
        page = await context.newPage()
        headerActions = new MainHeaderActions(page)
    })

    test.afterEach(async () => {
        await page.close()
    })

    test("Guestbook button",async () => {
        await page.goto(urls.homeUrl)
        await headerActions.clickGuestBook()
        expect(await page.title()).toBe(userData.homePageTitle)
    })

    test("Sign the Guestbook button",async () => {
        await page.goto(urls.homeUrl)
        await headerActions.clickSignTheGuestBook()
        expect(await page.title()).toBe(userData.loginPageTitle)
    })

    test("Login button",async () => {
        await page.goto(urls.homeUrl)
        await headerActions.clickLogin()
        expect(await page.title()).toBe(userData.loginPageTitle)
    })

    test("About button",async () => {
        await page.goto(urls.homeUrl)
        await headerActions.clickAbout()
        expect(await page.title()).toBe(userData.aboutPageTitle)
    })
})