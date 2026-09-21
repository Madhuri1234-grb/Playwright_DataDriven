import { expect, Locator, Page } from "@playwright/test";

export class SuppliersPage {
    page: Page
    readonly ClickSuppliersLink: Locator
    readonly ClickAddIconButton: Locator
    readonly SupplierNumber: Locator
    readonly SupplierName: Locator
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
        this.ClickSuppliersLink = page.locator('#mi_a_suppliers')
        this.ClickAddIconButton = page.locator('[data-caption="Add"]').first()
        this.SupplierNumber = page.locator('#elh_a_suppliers_Supplier_Number')
        this.SupplierName = page.getByPlaceholder('Supplier Name')
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
        this.SearchButton = page.locator('button#btnsubmit')


    }
    //Method creation
    async NavigateToSupplier() {
        await this.ClickSuppliersLink.waitFor()
        await this.ClickSuppliersLink.click()
        await this.ClickAddIconButton.waitFor()
        await this.ClickAddIconButton.click()



    }

    //Method creation for filling supplier data
    async AddSupplierDetails(sname: string, Address: string, city: string, country: string,
        cperson: string, phone: string, Email: string, mobile: string, notes: string) {
        await expect(this.SupplierNumber).toBeVisible()
        this.expNumber = await this.SupplierNumber.inputValue();
        console.log('Generated Supplier Number:', this.expNumber);
        await this.SupplierName.fill(sname)
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
    async suppliertable() {
        console.log('EXP NUMBER =', this.expNumber);
        if (!await this.Searchtextbox.isVisible()) {
            await this.SearchPanel.click()
        }
        await this.Searchtextbox.fill(this.expNumber)
        console.log('Search textbox value =', await this.Searchtextbox.inputValue());
        await this.SearchButton.click()

        const supplierRow = this.page.locator('#tbl_a_supplierslist tbody tr',
            {
                hasText: this.expNumber
            })
        console.log('Matching rows =', await supplierRow.count());
        await expect(supplierRow).toBeVisible()
        console.log(`Supplier number found in the table ${this.expNumber}`)
        await expect(supplierRow).toContainText(this.expNumber)

    }

} 