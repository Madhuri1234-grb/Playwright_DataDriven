# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPsingledata.spec.ts >> ERP Inventroy Management >> Supplier With Single data
- Location: tests\ERPsingledata.spec.ts:6:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('span[data-caption="Add"]').first()
    - waiting for "http://webapp.qedgetech.com/logout.php" navigation to finish...
    - navigated to "http://webapp.qedgetech.com/login.php"

```

# Page snapshot

```yaml
- generic [ref=f4e2]:
  - generic [ref=f4e3]:
    - link "Stock Accounting" [ref=f4e6] [cursor=pointer]:
      - /url: .
    - strong [ref=f4e9]: Stock Accounting
  - text:       
  - generic [ref=f4e13]:
    - list [ref=f4e14]:
      - listitem [ref=f4e15]:
        - link " Help (Categories)" [ref=f4e16] [cursor=pointer]:
          - /url: help_categorieslist.php
          - generic [ref=f4e17]: 
          - text: Help (Categories)
        - text:   
      - listitem [ref=f4e19]:
        - link " Login" [ref=f4e20] [cursor=pointer]:
          - /url: login.php
          - generic [ref=f4e21]: 
          - text: Login
    - list
  - generic [ref=f4e24]:
    - generic [ref=f4e27]:
      - generic [ref=f4e28] [cursor=pointer]:
        - radio "en" [checked]
        - text: en
      - generic [ref=f4e29] [cursor=pointer]:
        - radio "id"
        - text: id
    - generic:  
  - generic [ref=f4e32]:
    - text: ©2015
    - link "Masino Sinaga" [ref=f4e33] [cursor=pointer]:
      - /url: http://www.ilovephpmaker.com
    - text: . All rights reserved. |
    - link "Terms and Conditions" [ref=f4e34] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "About Us" [ref=f4e35] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "Back to Top" [ref=f4e36] [cursor=pointer]:
      - /url: javascript:void(0);
```

# Test source

```ts
  1   | import { expect, Locator, Page } from "@playwright/test";
  2   | 
  3   | export class SuppliersPage {
  4   |     page: Page
  5   |     readonly ClickSuppliersLink: Locator
  6   |     readonly ClickAddIconButton: Locator
  7   |     readonly SupplierNumber: Locator
  8   |     readonly SupplierName: Locator
  9   |     readonly Address: Locator
  10  |     readonly City: Locator
  11  |     readonly Country: Locator
  12  |     readonly ContactPerson: Locator
  13  |     readonly PhoneNumber: Locator
  14  |     readonly Email: Locator
  15  |     readonly MobileNumber: Locator
  16  |     readonly Notes: Locator
  17  |     readonly ClickAddButton: Locator
  18  |     readonly ClickConfirmOk: Locator
  19  |     readonly ClickAlertOk: Locator
  20  |     readonly SearchPanel: Locator
  21  |     readonly Searchtextbox: Locator
  22  |     readonly SearchButton: Locator
  23  |     //readonly SupplierGrid: Locator
  24  |     private expNumber: string
  25  | 
  26  |     //Constructor to initialize the values to properties
  27  |     constructor(page: Page) {
  28  |         this.page = page
  29  |         this.ClickSuppliersLink = page.locator('#mi_a_suppliers')
  30  |         this.ClickAddIconButton = page.locator('[data-caption="Add"]').first()
  31  |         this.SupplierNumber = page.getByPlaceholder('Supplier Name')
  32  |         this.SupplierName = page.getByPlaceholder('Supplier Name')
  33  |         this.Address = page.getByPlaceholder('Address')
  34  |         this.City = page.getByPlaceholder('City')
  35  |         this.Country = page.getByPlaceholder('Country')
  36  |         this.ContactPerson = page.getByPlaceholder('Contact Person')
  37  |         this.PhoneNumber = page.getByPlaceholder('Phone Number')
  38  |         this.Email = page.getByPlaceholder('Email')
  39  |         this.MobileNumber = page.getByPlaceholder('Mobile Number')
  40  |         this.Notes = page.getByPlaceholder('Notes')
  41  |         this.ClickAddButton = page.locator('span[data-caption="Add"]').first()
  42  |         this.ClickConfirmOk = page.getByRole('button', { name: 'OK!' })
  43  |         this.ClickAlertOk = page.locator('.ajs-button.btn.btn-primary')
  44  |         this.SearchPanel = page.locator('button[data-caption="Search Panel"]')
  45  |         this.Searchtextbox = page.locator('input#psearch')
  46  |         this.SearchButton = page.locator('button#btnsubmit')
  47  | 
  48  | 
  49  |     }
  50  |     //Method creation
  51  |     async NavigateToSupplier() {
  52  |         await this.ClickSuppliersLink.waitFor()
  53  |         await this.ClickSuppliersLink.click()
  54  |         await this.ClickAddIconButton.waitFor()
  55  |         await this.ClickAddIconButton.click()
  56  | 
  57  | 
  58  | 
  59  |     }
  60  | 
  61  |     //Method creation for filling supplier data
  62  |     async AddSupplierDetails(sname: string, Address: string, city: string, country: string,
  63  |         cperson: string, phone: string, Email: string, mobile: string, notes: string) {
  64  |         this.expNumber = await this.SupplierNumber.inputValue()
  65  |         await this.SupplierName.fill(sname)
  66  |         await this.Address.fill(Address)
  67  |         await this.City.fill(city)
  68  |         await this.Country.fill(country)
  69  |         await this.ContactPerson.fill(cperson)
  70  |         await this.PhoneNumber.fill(phone)
  71  |         await this.Email.fill(Email)
  72  |         await this.MobileNumber.fill(mobile)
  73  |         await this.Notes.fill(notes)
> 74  |         await this.ClickAddButton.click()
      |                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  75  | 
  76  | 
  77  | 
  78  |     }
  79  |     //Method for Alerts
  80  |     async alerthandle() {
  81  |         //await this.ClickAddButton.click()
  82  |         await this.ClickConfirmOk.waitFor()
  83  |         await this.ClickConfirmOk.click()
  84  |         await this.ClickAlertOk.waitFor()
  85  |         await this.ClickAlertOk.click()
  86  |     }
  87  | 
  88  |     //Method for search suppliernumber
  89  |     async suppliertable() {
  90  |         if (!await this.Searchtextbox.isVisible()) {
  91  |             await this.SearchPanel.click()
  92  |         }
  93  |         await this.Searchtextbox.fill(this.expNumber)
  94  |         await this.SearchButton.click()
  95  | 
  96  |         const supplierRow = this.page.locator('#tbl_a_supplierslist tbody tr',
  97  |             {
  98  |                 hasText: this.expNumber
  99  |             })
  100 |         await expect(supplierRow).toBeVisible()
  101 |         console.log(`Supplier number found in the table ${this.expNumber}`)
  102 |         await expect(supplierRow).toContainText(this.expNumber)
  103 | 
  104 |     }
  105 | 
  106 | } 
```