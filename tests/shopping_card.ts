import { fixture, t } from 'testcafe';
import { Selector } from 'testcafe';

fixture('E-shop search')
    .page('https://bestsmartphones.eshop');

test('My first test', async t => {
    const headerText = await Selector('#header').textContent;
    await t.click(Selector('#big-red-button'));
    await t.expect(true).ok();
});

test('My first test', async t => {
    await t.expect(true).ok();
});

test('My first test', async t => {
    await t.expect(true).ok();
});
