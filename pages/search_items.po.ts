export class SearchItemsPO {    
    foundItemsList:string = '#page-content .result-grid';
    firstItemFound:string = `${this.foundItemsList} div.item-1`;
    itemTitleSelector:string = '#page-content .item-title';

    itemData = {
        googlePixel: 'Google Pixel 8a 8GB/128GB Aloe',
        invalidItem: 'Absolutely existing smartphone'
    };
}