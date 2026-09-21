# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPsingledata.spec.ts >> ERP Inventroy Management >> Customer Module
- Location: tests\ERPsingledata.spec.ts:26:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByPlaceholder('#elh_a_customers_Customer_Number')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByPlaceholder('#elh_a_customers_Customer_Number') with timeout 5000ms
  - waiting for getByPlaceholder('#elh_a_customers_Customer_Number')

```

```yaml
- link "Stock Accounting":
  - /url: .
- strong: Stock Accounting
- text: "User Name:"
- strong: Administrator
- text: "|"
- link "Logout":
  - /url: javascript:void(0);
- list:
  - listitem:
    - link "Dashboard":
      - /url: dashboard.php
  - listitem:
    - link "Stock Items":
      - /url: a_stock_itemslist.php?cmd=resetall
  - listitem:
    - link "Suppliers":
      - /url: a_supplierslist.php
  - listitem:
    - link "Purchases":
      - /url: a_purchaseslist.php?cmd=resetall
  - listitem:
    - link "Customers":
      - /url: a_customerslist.php
  - listitem:
    - link "Sales":
      - /url: a_saleslist.php?cmd=resetall
  - listitem:
    - link "Outstandings":
      - /url: "#"
  - listitem:
    - link "Administrator":
      - /url: "#"
  - listitem:
    - link " Help (Categories)":
      - /url: help_categorieslist.php
  - listitem:
    - link " Settings":
      - /url: "#"
  - listitem:
    - link " Logout":
      - /url: logout.php
- list
- list:
  - listitem:
    - link "":
      - /url: index.php
  - listitem:
    - text: /
    - link "Customers":
      - /url: a_customerslist.php
  - listitem: / Add
  - link "":
    - /url: javascript:void(0);
- radio "en" [checked]
- text: en
- radio "id"
- text: id Customer Number *
- textbox "Customer Number *":
  - /placeholder: ""
  - text: Customer-00000000694
- text: Customer Name *
- textbox "Customer Name *":
  - /placeholder: Customer Name
- text: Address *
- textbox "Address *":
  - /placeholder: Address
- text: City *
- textbox "City *":
  - /placeholder: City
- text: Country *
- textbox "Country *":
  - /placeholder: Country
- text: Contact Person *
- textbox "Contact Person *":
  - /placeholder: Contact Person
- text: Phone Number *
- textbox "Phone Number *":
  - /placeholder: Phone Number
- text: Email *
- textbox "Email *":
  - /placeholder: Email
- text: Mobile Number *
- textbox "Mobile Number *":
  - /placeholder: Mobile Number
- text: Notes *
- textbox "Notes *":
  - /placeholder: Notes
- button "Add"
- button "Cancel"
- text: ©2015
- link "Masino Sinaga":
  - /url: http://www.ilovephpmaker.com
- text: . All rights reserved. |
- link "Terms and Conditions":
  - /url: javascript:void(0);
- text: "|"
- link "About Us":
  - /url: javascript:void(0);
- text: "|"
- link "Back to Top":
  - /url: javascript:void(0);
- text: Your session will expire in 178 seconds.
```

# Test source

```ts
  1   | import { expect, Locator, Page } from "@playwright/test";
  2   | 
  3   | export class CustomersPage {
  4   |     page: Page
  5   |     readonly ClickCustomersLink: Locator
  6   |     readonly ClickAddIconButton: Locator
  7   |     readonly CustomerNumber: Locator
  8   |     readonly CustomerName: Locator
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
  29  |         this.ClickCustomersLink = page.locator('#mi_a_customers')
  30  |         this.ClickAddIconButton = page.locator('[data-caption="Add"]').first()
  31  |         this.CustomerNumber = page.getByPlaceholder('#elh_a_customers_Customer_Number')
  32  |         this.CustomerName = page.getByPlaceholder('Customer Name')
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
  51  |     async NavigateToCustomer() {
  52  |         await this.ClickCustomersLink.waitFor()
  53  |         await this.ClickCustomersLink.click()
  54  |         await this.ClickAddIconButton.waitFor()
  55  |         await this.ClickAddIconButton.click()
  56  | 
  57  | 
  58  | 
  59  |     }
  60  | 
  61  |     //Method creation for filling supplier data
  62  |     async AddCustomerDetails(cname: string, Address: string, city: string, country: string,
  63  |         cperson: string, phone: string, Email: string, mobile: string, notes: string) {
> 64  |         await expect(this.CustomerNumber).toBeVisible()
      |                                           ^ Error: expect(locator).toBeVisible() failed
  65  |         this.expNumber = await this.CustomerNumber.inputValue()
  66  |         await this.CustomerName.fill(cname)
  67  |         await this.Address.fill(Address)
  68  |         await this.City.fill(city)
  69  |         await this.Country.fill(country)
  70  |         await this.ContactPerson.fill(cperson)
  71  |         await this.PhoneNumber.fill(phone)
  72  |         await this.Email.fill(Email)
  73  |         await this.MobileNumber.fill(mobile)
  74  |         await this.Notes.fill(notes)
  75  |         await this.ClickAddButton.click()
  76  | 
  77  | 
  78  | 
  79  |     }
  80  |     //Method for Alerts
  81  |     async alerthandle() {
  82  |         //await this.ClickAddButton.click()
  83  |         await this.ClickConfirmOk.waitFor()
  84  |         await this.ClickConfirmOk.click()
  85  |         await this.ClickAlertOk.waitFor()
  86  |         await this.ClickAlertOk.click()
  87  |     }
  88  | 
  89  |     //Method for search suppliernumber
  90  |     async customertable() {
  91  |         if (!await this.Searchtextbox.isVisible()) {
  92  |             await this.SearchPanel.click()
  93  |         }
  94  |         await this.Searchtextbox.fill(this.expNumber)
  95  |         await this.SearchButton.click()
  96  | 
  97  |         const customerRow = this.page.locator('#tbl_a_customerslist tbody tr',
  98  |             {
  99  |                 hasText: this.expNumber
  100 |             })
  101 |         await expect(customerRow).toBeVisible()
  102 |         console.log(`Customer number found in the table ${this.expNumber}`)
  103 |         await expect(customerRow).toContainText(this.expNumber)
  104 | 
  105 |     }
  106 | 
  107 | } 
```