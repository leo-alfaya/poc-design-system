import { newSpecPage } from '@stencil/core/testing';
import { DsModal } from '../ds-modal';

describe('ds-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsModal],
      html: `<ds-modal></ds-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ds-modal>
    `);
  });
});
