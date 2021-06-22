import {it, test} from "./fixture"


it("run the basic test of neowin", async ({context}) => {
    var page = await context.newPage();
    await page.goto("https://www.neowin.net/")
});

it.only("should be skipped for the firefox test", (test, {browserName}) => {
    test.skip(browserName === "firefox", "Skip the test as it doensn't support isMobile function")
}, async ({page}) => {
    await page.goto("https://www.neowin.net/");
});

