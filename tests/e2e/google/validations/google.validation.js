import validation from '../../../validations/general.validation';
import { test, expect } from '@playwright/test';
import googlePage from '../page/google.page';

const assertTitle = async () => {
  const googleTitle = await googlePage.getHeaderText();

  expect(googleTitle).toBe('Antes de acessar o Google');
};

export default { assertTitle };
