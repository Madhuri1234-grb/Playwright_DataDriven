import { test as base, expect } from '@playwright/test';
import { AdminLoginPage } from '../Pages/AdminLoginPage';
import { AdminLogoutPage } from '../Pages/AdminLogoutPage';

export const test = base;

// test.beforeEach(async ({ page }) => {

//     const loginpage = new AdminLoginPage(page)
//     //call launch url method
//     await loginpage.launchUrl(process.env.BASE_URL!)
//     //call login method
//     await loginpage.ERPLogin(process.env.BASE_USER!, process.env.BASE_PASSWORD!)
// });


test.beforeEach(async ({ page }) => {

    console.log('========== BEFORE EACH START ==========')

    const loginpage = new AdminLoginPage(page)

    console.log('AdminLoginPage created')

    await loginpage.launchUrl(process.env.BASE_URL!)

    console.log('launchUrl completed')

    await loginpage.ERPLogin(
        process.env.BASE_USER!,
        process.env.BASE_PASSWORD!
    )

    console.log('ERPLogin completed')

    console.log('========== BEFORE EACH END ==========')
})


test.afterEach(async ({ page }) => {
    const logoutpage = new AdminLogoutPage(page)
    await logoutpage.ERpLogout()

});

export { expect };
