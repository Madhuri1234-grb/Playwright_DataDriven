import { test } from '../hooks/ERPHooks';
import { SuppliersPage } from '../Pages/SuppliersPage';
import { CustomersPage } from '../Pages/CustomersPage';
test.describe('ERP Inventroy Management', () => {
    // first test case for supplier module
    test('Supplier With Single data', async ({ page }) => {

        const sup = new SuppliersPage(page)
        await sup.NavigateToSupplier()
        await sup.AddSupplierDetails(
            "Ramu",
            "Hyd1",
            "Hyderabad",
            "India",
            "QedgeTech",
            "87654322",
            "Test@gmail.com",
            "986754321",
            "New Supplier"

        )
        await sup.alerthandle()
        await sup.suppliertable()
    })
    //----------------------customer module----------------------
    test('Customer Module', async ({ page }) => {
        //create object for customerpage file
        const cus = new CustomersPage(page)
        await cus.NavigateToCustomer()
        await cus.AddCustomerDetails(
            'New Customer',
            'Kadiri',
            'atp',
            'India',
            'ranga',
            '9876543432',
            'Test@gmail.com',
            '87654321',
            'Add new Customer'
        )
        await cus.alerthandle()
        await cus.customertable()

    })

})
