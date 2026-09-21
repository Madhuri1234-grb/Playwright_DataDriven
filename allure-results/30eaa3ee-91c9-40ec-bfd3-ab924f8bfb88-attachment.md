# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UsingExcelData.spec.ts >> ERp Management Module >> Supplier With Excel data For Supllier
- Location: tests\UsingExcelData.spec.ts:20:13

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

# Page snapshot

```yaml
- generic [ref=f2e2]:
  - generic [ref=f2e3]:
    - link "Stock Accounting" [ref=f2e6] [cursor=pointer]:
      - /url: .
    - strong [ref=f2e9]: Stock Accounting
  - text:       
  - generic [ref=f2e13]:
    - list [ref=f2e14]:
      - listitem [ref=f2e15]:
        - link " Help (Categories)" [ref=f2e16] [cursor=pointer]:
          - /url: help_categorieslist.php
          - generic [ref=f2e17]: 
          - text: Help (Categories)
        - text:   
      - listitem [ref=f2e19]:
        - link " Login" [ref=f2e20] [cursor=pointer]:
          - /url: login.php
          - generic [ref=f2e21]: 
          - text: Login
    - list
  - generic [ref=f2e24]:
    - generic [ref=f2e27]:
      - generic [ref=f2e28] [cursor=pointer]:
        - radio "en" [checked]
        - text: en
      - generic [ref=f2e29] [cursor=pointer]:
        - radio "id"
        - text: id
    - generic:  
  - generic [ref=f2e32]:
    - text: ©2015
    - link "Masino Sinaga" [ref=f2e33] [cursor=pointer]:
      - /url: http://www.ilovephpmaker.com
    - text: . All rights reserved. |
    - link "Terms and Conditions" [ref=f2e34] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "About Us" [ref=f2e35] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "Back to Top" [ref=f2e36] [cursor=pointer]:
      - /url: javascript:void(0);
```

# Test source

```ts
  1  | import { test as base, expect } from '@playwright/test';
  2  | import { AdminLoginPage } from '../Pages/AdminLoginPage';
  3  | import { AdminLogoutPage } from '../Pages/AdminLogoutPage';
  4  | 
  5  | export const test = base;
  6  | 
> 7  | test.beforeEach(async ({ page }) => {
     |      ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  8  | 
  9  |     const loginpage = new AdminLoginPage(page)
  10 |     //call launch url method
  11 |     await loginpage.launchUrl(process.env.BASE_URL!)
  12 |     //call login method
  13 |     await loginpage.ERPLogin(process.env.BASE_USER!, process.env.BASE_PASSWORD!)
  14 | 
  15 | });
  16 | 
  17 | test.afterEach(async ({ page }) => {
  18 |     const logoutpage = new AdminLogoutPage(page)
  19 |     await logoutpage.ERpLogout()
  20 | 
  21 | });
  22 | 
  23 | export { expect };
  24 | 
```