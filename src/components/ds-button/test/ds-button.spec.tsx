import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { DsButton } from '../ds-button';

describe('ds-button', () => {
  let page;
  const onClickButton = jest.fn();
  
  beforeEach(async () => {
    page = await newSpecPage({
      components: [DsButton],
      template: () => (<ds-button text="Continuar" onButtonClick={onClickButton}></ds-button>)
    });
  })

  it('renders', async () => {
    expect(page.root).toEqualHtml(`
      <ds-button>
      <mock:shadow-root>
        <button>Continuar</button>
        </mock:shadow-root>
      </ds-button>
    `);
  });

  it('emit onButtonClick event when click on button', async () => {
    page.root.shadowRoot.querySelector('button').click();
    expect(onClickButton).toHaveBeenCalled();
  })
});
