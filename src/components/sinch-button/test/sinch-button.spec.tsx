import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { SinchButton } from '../sinch-button';

describe('sinch-button', () => {
  let page;
  const onClickButton = jest.fn();
  
  beforeEach(async () => {
    page = await newSpecPage({
      components: [SinchButton],
      template: () => (<sinch-button text="Continuar" onButtonClick={onClickButton}></sinch-button>)
    });
  })

  it('renders', async () => {
    expect(page.root).toEqualHtml(`
      <sinch-button>
      <mock:shadow-root>
        <button>Continuar</button>
        </mock:shadow-root>
      </sinch-button>
    `);
  });

  it('emit onButtonClick event when click on button', async () => {
    page.root.shadowRoot.querySelector('button').click();
    expect(onClickButton).toHaveBeenCalled();
  })
});
