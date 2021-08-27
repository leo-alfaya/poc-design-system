import { newE2EPage } from '@stencil/core/testing';

describe('sinch-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sinch-modal></sinch-modal>');

    const element = await page.find('sinch-modal');
    expect(element).toHaveClass('hydrated');
  });
});
