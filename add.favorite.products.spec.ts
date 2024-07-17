//User story
//Add Product to Favourites
//Story: As a user, I should be able to add a product to "favourites" so I can go back to it later on.

import {test,expect} from "@playwright/test";
test.describe('Favorites', () => {
    test('Add a product to favorites when user is not logged in', async ({ page }) => {
        //go to url
        await page.goto('https://with-bugs.practicesoftwaretesting.com/#/');
        //click on a product
        await page.locator('[data-test="product-1"]').click();
        //add product to favorites
        await page.locator('[data-test="add-to-favorites"]').click();
        await expect(page.getByText('Unauthorized, can not add')).toBeVisible();
    })

    test('Add a product to favorites when user is logged in', async ({ page }) => {
        //user logged in
        await page.goto('https://with-bugs.practicesoftwaretesting.com/#/auth/login');
        await page.locator('[data-test="email"]').click();
        await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('welcome01');
        await page.locator('[data-test="login-submit"]').click();
        //go to products page
        await page.getByRole('link', { name: 'Practice Software Testing -' }).click();

        //add product to favorites
        await page.locator('[data-test="product-1"]').click();
        await page.locator('[data-test="add-to-favorites"]').click();

        //assertion to verify if product is added to favorites
        await expect(page.getByText('Oeps, something went wrong.')).toBeVisible();
    })
    
    test('Remove a product from favorites', async ({ page }) => {
        //user logs in
        await page.goto('https://with-bugs.practicesoftwaretesting.com/#/auth/login');
        await page.locator('[data-test="email"]').click();
        await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('welcome01');
        await page.locator('[data-test="login-submit"]').click();
        //go to favorites menu
        await page.locator('[data-test="nav-favorites"]').click();
        //delete a product from favorites
        await page.locator('[data-test="favorite-1"] [data-test="delete"]').click();
        //assertion to verify if product is removed from favorites list
        await expect(page.getByText('There are no favorites yet.')).toBeVisible();
        
    })
    
   
   
})
