import { newE2EPage } from '@stencil/core/testing';

describe('ds-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ds-modal></ds-modal>');

    const element = await page.find('ds-modal');
    expect(element).toHaveClass('hydrated');
  });
});
