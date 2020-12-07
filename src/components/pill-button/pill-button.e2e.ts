import { newE2EPage } from '@stencil/core/testing';

describe('stc-pill-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stc-pill-button></stc-pill-button>');

    const element = await page.find('stc-pill-button');
    expect(element).toHaveClass('hydrated');
  });
});
