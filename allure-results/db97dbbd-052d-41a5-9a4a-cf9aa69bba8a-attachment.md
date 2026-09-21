# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPsingledata.spec.ts >> ERP Inventroy Management >> Supplier With Single data
- Location: tests\ERPsingledata.spec.ts:6:9

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=f5e2]:
  - generic [ref=f5e3]:
    - link "Stock Accounting" [ref=f5e6] [cursor=pointer]:
      - /url: .
    - strong [ref=f5e9]: Stock Accounting
  - text:       
  - generic [ref=f5e13]:
    - list [ref=f5e14]:
      - listitem [ref=f5e15]:
        - link " Help (Categories)" [ref=f5e16] [cursor=pointer]:
          - /url: help_categorieslist.php
          - generic [ref=f5e17]: 
          - text: Help (Categories)
        - text:   
      - listitem [ref=f5e19]:
        - link " Login" [ref=f5e20] [cursor=pointer]:
          - /url: login.php
          - generic [ref=f5e21]: 
          - text: Login
    - list
  - generic [ref=f5e24]:
    - generic [ref=f5e27]:
      - generic [ref=f5e28] [cursor=pointer]:
        - radio "en" [checked]
        - text: en
      - generic [ref=f5e29] [cursor=pointer]:
        - radio "id"
        - text: id
    - generic:  
  - generic [ref=f5e32]:
    - text: ©2015
    - link "Masino Sinaga" [ref=f5e33] [cursor=pointer]:
      - /url: http://www.ilovephpmaker.com
    - text: . All rights reserved. |
    - link "Terms and Conditions" [ref=f5e34] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "About Us" [ref=f5e35] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "Back to Top" [ref=f5e36] [cursor=pointer]:
      - /url: javascript:void(0);
```

# Test source

```ts
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
  41  |         this.ClickAddButton = page.locator('button#btnAction')
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
  64  |         await expect(this.SupplierNumber).toBeVisible();
  65  | 
  66  |         console.log('SupplierNumber inputValue =',
  67  |             await this.SupplierNumber.inputValue());
  68  | 
  69  |         console.log('SupplierNumber value attribute =',
  70  |             await this.SupplierNumber.getAttribute('value'));
  71  | 
  72  |         console.log('SupplierNumber textContent =',
  73  |             await this.SupplierNumber.textContent());
  74  | 
  75  |         console.log('SupplierNumber outerHTML =',
  76  |             await this.SupplierNumber.evaluate(el => el.outerHTML));
  77  | 
  78  |         await this.SupplierName.fill(sname)
  79  |         await this.Address.fill(Address)
  80  |         await this.City.fill(city)
  81  |         await this.Country.fill(country)
  82  |         await this.ContactPerson.fill(cperson)
  83  |         await this.PhoneNumber.fill(phone)
  84  |         await this.Email.fill(Email)
  85  |         await this.MobileNumber.fill(mobile)
  86  |         await this.Notes.fill(notes)
  87  |         await this.ClickAddButton.click()
  88  | 
  89  | 
  90  | 
  91  |     }
  92  |     //Method for Alerts
  93  |     async alerthandle() {
  94  |         //await this.ClickAddButton.click()
  95  |         await this.ClickConfirmOk.waitFor()
  96  |         await this.ClickConfirmOk.click()
  97  |         await this.ClickAlertOk.waitFor()
  98  |         await this.ClickAlertOk.click()
  99  |     }
  100 | 
  101 |     //Method for search suppliernumber
  102 |     async suppliertable() {
  103 |         console.log('EXP NUMBER =', this.expNumber);
  104 |         if (!await this.Searchtextbox.isVisible()) {
  105 |             await this.SearchPanel.click()
  106 |         }
> 107 |         await this.Searchtextbox.fill(this.expNumber)
      |                                  ^ Error: locator.fill: value: expected string, got undefined
  108 |         console.log('Search textbox value =', await this.Searchtextbox.inputValue());
  109 |         await this.SearchButton.click()
  110 | 
  111 |         const supplierRow = this.page.locator('#tbl_a_supplierslist tbody tr',
  112 |             {
  113 |                 hasText: this.expNumber
  114 |             })
  115 |         console.log('Matching rows =', await supplierRow.count());
  116 |         await expect(supplierRow).toBeVisible()
  117 |         console.log(`Supplier number found in the table ${this.expNumber}`)
  118 |         await expect(supplierRow).toContainText(this.expNumber)
  119 | 
  120 |     }
  121 | 
  122 | } 
```