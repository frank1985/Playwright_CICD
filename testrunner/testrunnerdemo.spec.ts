import {it,describe,expect} from "@playwright/test"

it("first test for simple demo", () => {
    console.log("Hello test...")
})

it("first test for navigating to a site demo", async({context}) => {
    var page = await context.newPage();
    await page.goto("http://neowin.net");
})

