import { expect, Locator, Page } from "@playwright/test";

export class CustomersPage {
    page: Page
    readonly ClickCustomersLink: Locator
    readonly ClickAddIconButton: Locator
    readonly CustomerNumber: Locator
    readonly CustomerName: Locator
    readonly Address: Locator
    readonly City: Locator
    readonly Country: Locator
    readonly ContactPerson: Locator
    readonly PhoneNumber: Locator
    readonly Email: Locator
    readonly MobileNumber: Locator
    readonly Notes: Locator
    readonly ClickAddButton: Locator
    readonly ClickConfirmOk: Locator
    readonly ClickAlertOk: Locator
    readonly SearchPanel: Locator
    readonly Searchtextbox: Locator
    readonly SearchButton: Locator
    //readonly SupplierGrid: Locator
    private expNumber: string

    //Constructor to initialize the values to properties
    constructor(page: Page) {
        this.page = page
        this.ClickCustomersLink = page.locator('#mi_a_customers')
        this.ClickAddIconButton = page.locator('[data-caption="Add"]').first()
        this.CustomerNumber = page.locator('#elh_a_customers_Customer_Number')
        this.CustomerName = page.getByPlaceholder('Customer Name')
        this.Address = page.getByPlaceholder('Address')
        this.City = page.getByPlaceholder('City')
        this.Country = page.getByPlaceholder('Country')
        this.ContactPerson = page.getByPlaceholder('Contact Person')
        this.PhoneNumber = page.getByPlaceholder('Phone Number')
        this.Email = page.getByPlaceholder('Email')
        this.MobileNumber = page.getByPlaceholder('Mobile Number')
        this.Notes = page.getByPlaceholder('Notes')
        this.ClickAddButton = page.locator('button#btnAction')
        this.ClickConfirmOk = page.getByRole('button', { name: 'OK!' })
        this.ClickAlertOk = page.locator('.ajs-button.btn.btn-primary')
        this.SearchPanel = page.locator('button[data-caption="Search Panel"]')
        this.Searchtextbox = page.locator('input#psearch')
        this.SearchButton = page.locator('button#btnsubmit')//Change the locator


    }
    //Method creation
    async NavigateToCustomer() {
        await this.ClickCustomersLink.waitFor()
        await this.ClickCustomersLink.click()
        await this.ClickAddIconButton.waitFor()
        await this.ClickAddIconButton.click()



    }

    //Method creation for filling supplier data
    async AddCustomerDetails(cname: string, Address: string, city: string, country: string,
        cperson: string, phone: string, Email: string, mobile: string, notes: string) {
        await expect(this.CustomerNumber).toBeVisible()
        this.expNumber = await this.CustomerNumber.inputValue()
        await this.CustomerName.fill(cname)
        await this.Address.fill(Address)
        await this.City.fill(city)
        await this.Country.fill(country)
        await this.ContactPerson.fill(cperson)
        await this.PhoneNumber.fill(phone)
        await this.Email.fill(Email)
        await this.MobileNumber.fill(mobile)
        await this.Notes.fill(notes)
        await this.ClickAddButton.click()



    }
    //Method for Alerts
    async alerthandle() {
        //await this.ClickAddButton.click()
        await this.ClickConfirmOk.waitFor()
        await this.ClickConfirmOk.click()
        await this.ClickAlertOk.waitFor()
        await this.ClickAlertOk.click()
    }

    //Method for search suppliernumber
    async customertable() {
        if (!await this.Searchtextbox.isVisible()) {
            await this.SearchPanel.click()
        }
        await this.Searchtextbox.fill(this.expNumber)
        await this.SearchButton.click()

        const customerRow = this.page.locator('#tbl_a_customerslist tbody tr',
            {
                hasText: this.expNumber
            })
        await expect(customerRow).toBeVisible()
        console.log(`Customer number found in the table ${this.expNumber}`)
        await expect(customerRow).toContainText(this.expNumber)

    }

} 