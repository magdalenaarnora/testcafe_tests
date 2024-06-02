import { fixture, Selector, t } from 'testcafe';
import { SearchItemsPO } from '../pages/search_items.po';
import { SharedPO } from '../pages/shared.po';

const searchInputPO = new SearchItemsPO();
const sharedPO = new SharedPO();

fixture('E-shop search')
    .page('https://bestsmartphones.eshop');

test('Check an existing item can be searched with valid results and viewed', async t => {
    await t
        // Type a valid item into the search bar
        .typeText(
            sharedPO.searchInput, 
            searchInputPO.itemData.googlePixel
        )
        // Search for the item
        .click(sharedPO.searchIcon)
        // Wait 1s for the search results
        .wait(1000);
        const resultsList = Selector(searchInputPO.foundItemsList);
        const firstItemFound = Selector(searchInputPO.firstItemFound);
    await t
        // Check the grid with results exists
        .expect(resultsList.exists).ok()
        // Check the item has been found
        .expect(firstItemFound.innerText)
            .contains(searchInputPO.itemData.googlePixel)
        // Navigate to the item
        .click(firstItemFound);
    const itemTitle = Selector(searchInputPO.itemTitleSelector);
        // Check the page has been redirected to the item
    await t
        .expect(itemTitle.textContent)
            .contains(searchInputPO.itemData.googlePixel);
    
});

test('Check a non-existing item can be searched with no results found', async t => {
    await t
        // Type an invalid item into the search bar
        .typeText(
            sharedPO.searchInput, 
            searchInputPO.itemData.invalidItem
        )
        // Search for the item
        .click(sharedPO.searchIcon)
        // Wait 1s for the search results
        .wait(1000);
    const resultsList = Selector(searchInputPO.foundItemsList);
    await t
        // Check there is no grid with results
        .expect(resultsList.exists).notOk()
        // Check that search input and search button exist
        // so the user can look for another item
        .expect(sharedPO.searchInput).ok()
        .expect(sharedPO.searchIcon).ok(); 
});

test('Check the shopping cart can be viewed after searching', async t => {
    await t
        // Type a valid item into the search bar
        .typeText(
            sharedPO.searchInput, 
            searchInputPO.itemData.googlePixel
        )
        // Search for the item
        .click(sharedPO.searchIcon)
        // Wait 1s for the search results
        .wait(1000);
        const resultsList = Selector(searchInputPO.foundItemsList);
    await t
        // Check the grid with results exists
        .expect(resultsList.exists).ok()
        .expect(sharedPO.shopppingCartIcon).ok();
});

test('Check the user can search for another item from item view', async t => {
    await t
        // Type a valid item into the search bar
        .typeText(
            sharedPO.searchInput, 
            searchInputPO.itemData.googlePixel
        )
        // Search for the item
        .click(sharedPO.searchIcon)
        // Wait 1s for the search results
        .wait(1000);
        const firstItemFound = Selector(searchInputPO.firstItemFound);
    await t
        // Navigate to the item
        .click(firstItemFound)
        // Check that search input and search button exist
        // so the user can look for another item
        .expect(sharedPO.searchInput).ok()
        .expect(sharedPO.searchIcon).ok();
});

test('Check the user can search for another item after invalid search', async t => {
    await t
        // Type an invalid item into the search bar
        .typeText(
            sharedPO.searchInput, 
            searchInputPO.itemData.invalidItem
        )
        // Search for the item
        .click(sharedPO.searchIcon)
        // Wait 1s for the search results
        .wait(1000);
    await t
        // Check that search input and search button exist
        // so the user can look for another item
        .expect(sharedPO.searchInput).ok()
        .expect(sharedPO.searchIcon).ok(); 
});
