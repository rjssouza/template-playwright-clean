import selector from '../page/google.selector';

const open = async () => {
  const url = 'https://www.google.com/';

  await page.goto(url);
};

const getText = async (selector) => {
  const element = page.locator(selector);
  const text = await element.textContent();

  return text.trim();
};

const getHeaderText = async () => getText(selector.TITLE);

export default {
  open,
  getHeaderText,
};
