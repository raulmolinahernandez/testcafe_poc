/* eslint-disable semi */
import page from './page-model';

fixture`MyFixture`
  .page`https://devexpress.github.io/testcafe/example/`;

test('Use a Page Model', async t => {
  await page.selectFeature(2);
  await page.typeName('Peter');
  await page.clickSubmit();
});
