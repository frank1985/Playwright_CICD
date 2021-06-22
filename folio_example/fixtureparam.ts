//import {folio as base} from '@playwright/test'
import {folio as base} from 'folio'
export { expect } from 'folio';

//Declare types for new fixture and parameters
const fixtures = base.extend<{}, { browser: string }, { version: number}>();

//Define browser parameter with description and default value
fixtures.version.initParameter('Browser version', 86);

fixtures.browser.init(async ({ version }, runtTest) => {
    if(version > 80) {
        console.log("Running latest version of browser and use new driver")
    } else {
        console.log("Running older version of browser and use older driver")
    }
    await runtTest(`Current version: ${version}`);
}, { scope: 'worker' });

const folio = fixtures.build();
export const it = folio.it;

