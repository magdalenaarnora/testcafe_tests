import { Selector } from 'testcafe';

// Page object for elements that are present all the time
export class SharedPO {
    searchInput:Selector = Selector('.nav #search-input');
    searchIcon:Selector = Selector('.nav #search-icon');
    shopppingCartIcon:Selector = Selector('.nav #shopping-cart');
}