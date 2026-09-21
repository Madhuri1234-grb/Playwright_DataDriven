import { expect, Locator, Page } from "@playwright/test";

export class AdminLoginPage {
    page: Page
    readonly UsernameInput: Locator
    readonly PasswordInput: Locator
    readonly LoginButton: Locator
    HomepageIdentifier: Locator

    //Create constructor to initialize values to properties
    constructor(page: Page) {
        this.page = page
        this.UsernameInput = page.getByRole('textbox', { name: 'User Name' })
        this.PasswordInput = page.getByRole('textbox', { name: 'Password' })
        this.LoginButton = page.locator('button#btnsubmit')
        this.HomepageIdentifier = page.locator('#ewBreadcrumb2')

    }
    //write method for action
    async launchUrl(Url: string) {
        await this.page.goto(Url)
    }
    //write method for login
    async ERPLogin(user: string, pass: string) {
        await this.UsernameInput.waitFor()
        await this.UsernameInput.clear()
        await this.UsernameInput.fill(user)
        await this.PasswordInput.clear()
        await this.PasswordInput.fill(pass)
        await this.LoginButton.click()
        await expect(this.HomepageIdentifier).toBeVisible()

    }

}


