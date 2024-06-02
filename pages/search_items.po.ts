import { Selector } from 'testcafe';

export class SearchItemsPO {
    searchInput:Selector = Selector('.nav #search-input');
    searchIcon:Selector = Selector('.nav #search-icon');
    firstItem:Selector = Selector('#page-content .grid div.item-1') 
    warningMessage:Selector = Selector('#warning-message') 

    itemData = {
        googlePixel: 'Google Pixel 8a 8GB/128GB Aloe'
    };

    messageData = {
        unsuccessfulSearch: 'Item not found.'
    };
}