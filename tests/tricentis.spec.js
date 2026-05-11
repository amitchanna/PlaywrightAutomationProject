import { test, expect } from '@playwright/test';

test.describe('Tricentis Demo Web Shop Order Placement Test', () => {

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await expect(page.getByRole('link', { name: 'Tricentis Demo Web Shop' })).toBeVisible();

  await page.getByRole('link', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Tricentis Demo Web Shop' })).toBeVisible();

  // Complete the login form and submit

  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('amitchanna@gmail.com');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('amitc123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Tricentis Demo Web Shop' })).toBeVisible();

  // add items to cart and checkout

  await page.getByRole('link', { name: 'Computers' }).first().click();
  await page.getByRole('link', { name: 'Desktops' }).nth(1).click();

  await expect(page.getByRole('link', {name:'Build your own cheap computer',exact:true})).toBeVisible();

  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await expect(page.getByRole('link', { name: 'Tricentis Demo Web Shop' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Qty:' }).click();
  await page.getByRole('textbox', { name: 'Qty:' }).fill('2');
  await page.locator('#add-to-cart-button-72').click();


// Scroll to the top of the page before clicking on 'Go to cart'
  await page.keyboard.press('Home');
  await expect(page.getByRole('link', { name: 'Shopping cart', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Shopping cart', exact: true }).click();
  await expect(page.getByRole('row', { name: 'Picture of Build your own' })).toBeVisible();

  await page.locator('#termsofservice').check();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.goto('https://demowebshop.tricentis.com/onepagecheckout');
  await expect(page.getByRole('link', { name: 'Tricentis Demo Web Shop' })).toBeVisible();

  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByLabel('Select a shipping address')).toBeVisible();

  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('radio', { name: 'Ground (0.00)' })).toBeVisible();

  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('img', { name: 'Cash On Delivery (COD) (7.00)' })).toBeVisible();

  await page.getByRole('radio', { name: 'Credit Card Credit Card' }).check();
  await page.getByRole('radio', { name: 'Cash On Delivery (COD) (7.00' }).check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('You will pay by COD')).toBeVisible();

  await page.getByRole('button', { name: 'Continue' }).click();

  // Final Confirmation page assertions
  await expect(page.getByText('Billing Address', { exact: true })).toBeVisible();
  await expect(page.getByText('Shipping Address', { exact: true })).toBeVisible();
  await expect(page.getByText('Payment Method', { exact: true })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Product(s)' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Price' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Qty' })).toBeVisible();
  //await expect(page.getByRole('columnheader', { name: 'Total.' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Confirm' })).toBeEnabled();


  await page.getByRole('button', { name: 'Confirm' }).click();

  // Order Confirmation page assertions
  await expect(page.getByRole('heading', { name: 'Thank you' })).toBeVisible();
  await expect(page.getByText('Your order has been successfully processed!')).toBeVisible();
  
})});
