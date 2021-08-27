import { newSpecPage } from '@stencil/core/testing';
import { SinchModal } from '../sinch-modal';

describe('sinch-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SinchModal],
      html: `<sinch-modal></sinch-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <sinch-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sinch-modal>
    `);
  });
});
