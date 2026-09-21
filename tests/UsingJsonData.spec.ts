import { test } from '../hooks/ERPHooks'
import { SuppliersPage } from '../Pages/SuppliersPage'
import { CustomersPage } from '../Pages/CustomersPage'
import erpdata from '../TestData/ERpData.json'

// console.log(erpdata.Suppliers)
// console.log(erpdata.customers)
test.describe('ERP Managent Modules', () => {
    for (const supdata of erpdata.Suppliers) {
        test(`Supplier With json file ${supdata.Suppliername}`, async ({ page }) => {
            const sup = new SuppliersPage(page)
            await sup.NavigateToSupplier()
            await sup.AddSupplierDetails(
                supdata.Suppliername,
                supdata.Address,
                supdata.City,
                supdata.Country,
                supdata.ContactPerson,
                supdata.PhoneNumber,
                supdata.Email,
                supdata.MobileNumber,
                supdata.Notes
            )
            await sup.alerthandle()
            await sup.suppliertable()

        })

    }
    for (const cusdata of erpdata.customers) {
        test(`Customer Using Json ${cusdata.Customername}`, async ({ page }) => {
            const cus = new CustomersPage(page)
            await cus.NavigateToCustomer()
            await cus.AddCustomerDetails(
                cusdata.Customername,
                cusdata.Address,
                cusdata.City,
                cusdata.Country,
                cusdata.ContactPerson,
                cusdata.PhoneNumber,
                cusdata.Email,
                cusdata.MobileNumber,
                cusdata.Notes
            )
            await cus.alerthandle()
            await cus.customertable()

        })
    }
})
