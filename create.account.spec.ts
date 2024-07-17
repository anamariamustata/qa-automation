//User story
//Create an Account
//Story: As a user,
//I should be able create an account
//in order to have a personalised experience on the website, including saving my favourites lists, my purchases and my contact details.

import {test,expect} from "@playwright/test";

test.describe('Account', () => {
    test('Open Sign in page and verify new user can create account', async ({ page }) => {
        //open login page
        await page.goto('https://with-bugs.practicesoftwaretesting.com/#/auth/login');
        
        //verify if the option for creating a new account exists
        page.locator('text=Not yet an account?').isVisible
    })

    test('Click on Register your account', async ({ page }) => {
        //open url
        await page.goto('https://with-bugs.practicesoftwaretesting.com/#/auth/login')

        //click Register your account button
        await page.getByText('Register your account').click();

        //verify url contains /#/auth/register
        await expect(page).toHaveURL('https://with-bugs.practicesoftwaretesting.com/#/auth/register')
    })

    test('Fill customer registration and verify success message', async ({ page }) => {
        //open customer registration page
        await page.goto('https://with-bugs.practicesoftwaretesting.com/#/auth/register');

        //fill the input fields
        await page.locator('[data-test="first-name"]').fill('Johnnys'); 
        await page.locator('[data-test="last-name"]').fill('Smithss');  
        await page.locator('[data-test="dob"]').fill('1991-02-13');
        await page.locator('[data-test="address"]').fill('Sesame street 2');
        await page.locator('[data-test="postcode"]').fill('2020');
        await page.locator('[data-test="city"]').fill('Chicago');
        await page.locator('[data-test="state"]').fill('Alabama');
        await page.locator('[data-test="country"]').selectOption('BH');
        await page.locator('[data-test="phone"]').fill('0103558859596');
        await page.locator('[data-test="email"]').fill('janesmith112@yahoo.com');  
        await page.locator('[data-test="password"]').fill('password123222');
        await page.locator('[data-test="register-submit"]').click();

        //assertion to verify if new user is created
        await expect(page).toHaveURL('https://with-bugs.practicesoftwaretesting.com/#/auth/login')


    })
    test('Check if new user created can login into account', async ({ page }) => {
        //go to url
        await page.goto('https://with-bugs.practicesoftwaretesting.com/#/auth/login');

        //fill in the email and password
        await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
        await page.locator('[data-test="password"]').fill('welcome01');
        await page.locator('[data-test="login-submit"]').click();

        //assertion to verify if user is logged into account
        await expect(page.locator('[data-test="page-title"]')).toBeVisible();        
    })
    

})

