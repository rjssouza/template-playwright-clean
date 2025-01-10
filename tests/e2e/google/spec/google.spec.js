import { test } from '@playwright/test';
import googlePage from '../page/google.page';
import googleValidation from '../validations/google.validation';

test.beforeEach(async ({ page }) => {
  global.page = page;
});

test.describe('Acessar o google', () => {
  test('Devo acessar a pagina principal do google', async () => {
    await googlePage.open();
    await googleValidation.assertTitle();
  });
});
