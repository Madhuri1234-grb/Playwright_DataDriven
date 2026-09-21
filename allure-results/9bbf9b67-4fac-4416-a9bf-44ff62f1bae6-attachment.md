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
Error: locator.waitFor: Error: strict mode violation: getByText('Logout', { exact: true }) resolved to 3 elements:
    1) <a id="logout" href="javascript:void(0);" onclick="AskToLogout();return false;">Logout</a> aka getByRole('link', { name: 'Logout', exact: true })
    2) <a href="logout.php">…</a> aka locator('#mmi_logout').getByText('Logout')
    3) <a href="logout.php">…</a> aka getByRole('link', { name: ' Logout' })

Call log:
  - waiting for getByText('Logout', { exact: true }) to be visible

```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('span[data-caption="Add"]').first()

```

# Page snapshot

```yaml
- generic [ref=f3e2]:
  - generic [ref=f3e3]:
    - link "Stock Accounting" [ref=f3e6] [cursor=pointer]:
      - /url: .
    - strong [ref=f3e9]: Stock Accounting
    - generic [ref=f3e12]:
      - text: "User Name:"
      - strong [ref=f3e13]: Administrator
      - text: "|"
      - link "Logout" [ref=f3e14] [cursor=pointer]:
        - /url: javascript:void(0);
  - text:                             
  - generic [ref=f3e17]:
    - list [ref=f3e18]:
      - listitem [ref=f3e19]:
        - link "Dashboard" [ref=f3e20] [cursor=pointer]:
          - /url: dashboard.php
      - listitem [ref=f3e21]:
        - link "Stock Items" [ref=f3e22] [cursor=pointer]:
          - /url: a_stock_itemslist.php?cmd=resetall
      - listitem [ref=f3e24]:
        - link "Suppliers" [ref=f3e25] [cursor=pointer]:
          - /url: a_supplierslist.php
      - listitem [ref=f3e26]:
        - link "Purchases" [ref=f3e27] [cursor=pointer]:
          - /url: a_purchaseslist.php?cmd=resetall
      - listitem [ref=f3e28]:
        - link "Customers" [ref=f3e29] [cursor=pointer]:
          - /url: a_customerslist.php
      - listitem [ref=f3e30]:
        - link "Sales" [ref=f3e31] [cursor=pointer]:
          - /url: a_saleslist.php?cmd=resetall
      - listitem [ref=f3e32]:
        - link "Outstandings" [ref=f3e33] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f3e35]:
        - link "Administrator" [ref=f3e36] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f3e38]:
        - link " Help (Categories)" [ref=f3e39] [cursor=pointer]:
          - /url: help_categorieslist.php
          - generic [ref=f3e40]: 
          - text: Help (Categories)
        - text:   
      - listitem [ref=f3e42]:
        - link " Settings" [ref=f3e43] [cursor=pointer]:
          - /url: "#"
          - generic [ref=f3e44]: 
          - text: Settings
        - text:          
      - listitem [ref=f3e46]:
        - link " Logout" [ref=f3e47] [cursor=pointer]:
          - /url: logout.php
          - generic [ref=f3e48]: 
          - text: Logout
    - list
  - generic [ref=f3e51]:
    - generic [ref=f3e52]:
      - list [ref=f3e53]:
        - listitem [ref=f3e54]:
          - link "" [ref=f3e55] [cursor=pointer]:
            - /url: index.php
        - listitem [ref=f3e57]:
          - text: /
          - link "Suppliers" [ref=f3e58] [cursor=pointer]:
            - /url: a_supplierslist.php
        - listitem [ref=f3e59]: / Add
        - link "" [ref=f3e60] [cursor=pointer]:
          - /url: javascript:void(0);
      - generic [ref=f3e63]:
        - generic [ref=f3e64] [cursor=pointer]:
          - radio "en" [checked]
          - text: en
        - generic [ref=f3e65] [cursor=pointer]:
          - radio "id"
          - text: id
    - generic [ref=f3e67]:
      - generic [ref=f3e68]:
        - generic [ref=f3e69]:
          - generic [ref=f3e70]: Supplier Number *
          - textbox "Supplier Number *" [ref=f3e74]:
            - /placeholder: ""
            - text: Supplier-00000000942
        - generic [ref=f3e75]:
          - generic [ref=f3e76]: Supplier Name *
          - textbox "Supplier Name *" [ref=f3e80]:
            - /placeholder: Supplier Name
            - text: Ramu
        - generic [ref=f3e81]:
          - generic [ref=f3e82]: Address *
          - textbox "Address *" [ref=f3e86]:
            - /placeholder: Address
            - text: Hyd1
        - generic [ref=f3e87]:
          - generic [ref=f3e88]: City *
          - textbox "City *" [ref=f3e92]:
            - /placeholder: City
            - text: Hyderabad
        - generic [ref=f3e93]:
          - generic [ref=f3e94]: Country *
          - textbox "Country *" [ref=f3e98]:
            - /placeholder: Country
            - text: India
        - generic [ref=f3e99]:
          - generic [ref=f3e100]: Contact Person *
          - textbox "Contact Person *" [ref=f3e104]:
            - /placeholder: Contact Person
            - text: QedgeTech
        - generic [ref=f3e105]:
          - generic [ref=f3e106]: Phone Number *
          - textbox "Phone Number *" [ref=f3e110]:
            - /placeholder: Phone Number
            - text: "87654322"
        - generic [ref=f3e111]:
          - generic [ref=f3e112]: Email *
          - textbox "Email *" [ref=f3e116]:
            - /placeholder: Email
            - text: Test@gmail.com
        - generic [ref=f3e117]:
          - generic [ref=f3e118]: Mobile Number *
          - textbox "Mobile Number *" [ref=f3e122]:
            - /placeholder: Mobile Number
            - text: "986754321"
        - generic [ref=f3e123]:
          - generic [ref=f3e124]: Notes *
          - textbox "Notes *" [active] [ref=f3e128]:
            - /placeholder: Notes
            - text: New Supplier
      - generic [ref=f3e130]:
        - button "Add" [ref=f3e131] [cursor=pointer]
        - button "Cancel" [ref=f3e132] [cursor=pointer]
  - generic [ref=f3e134]:
    - text: ©2015
    - link "Masino Sinaga" [ref=f3e135] [cursor=pointer]:
      - /url: http://www.ilovephpmaker.com
    - text: . All rights reserved. |
    - link "Terms and Conditions" [ref=f3e136] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "About Us" [ref=f3e137] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "Back to Top" [ref=f3e138] [cursor=pointer]:
      - /url: javascript:void(0);
    - generic [ref=f3e139]: Your session will expire in 164 seconds.
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
  46  |         this.SearchButton = page.locator('button#btnsubmit')//Change the locator
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