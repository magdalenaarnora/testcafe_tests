import { fixture, t } from 'testcafe';
import { SearchItemsPO } from '../pages/search_items.po';

let searchInputPO = new SearchItemsPO();

fixture('E-shop search')
    .page('https://bestsmartphones.eshop');

test('Successful search', async t => {
    await t
        .typeText(
            searchInputPO.searchInput, 
            searchInputPO.itemData.googlePixel
        )
        .click(searchInputPO.searchIcon)
        .expect(searchInputPO.firstItem.innerText)
            .contains(searchInputPO.itemData.googlePixel);
    
});

test('Unsuccessful search', async t => {
    await t
        .typeText(
            searchInputPO.searchInput, 
            searchInputPO.itemData.googlePixel
        )
        .click(searchInputPO.searchIcon)
        .expect(searchInputPO.warningMessage.innerText)
            .contains(searchInputPO.messageData.unsuccessfulSearch)
        .expect(searchInputPO.firstItem.innerText)
            .notContains(searchInputPO.itemData.googlePixel);
    
});