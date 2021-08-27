import { newE2EPage } from '@stencil/core/testing';

describe('sinch-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sinch-button></sinch-button>');

    const element = await page.find('sinch-button');
    expect(element).toHaveClass('hydrated');
  });
});
