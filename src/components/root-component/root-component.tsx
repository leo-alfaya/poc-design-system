import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'root-component',
  shadow: true,
})
export class RootComponent {
  connectedCallback() {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.boxSizing = 'border-box';
  }

  @State() open: boolean = false;

  closeModal() {
    this.open = false;
  }

  render() {
    return (
      <Host>
        <sinch-button text="Abrir modal" onButtonClick={() => (this.open = true)} type="primary" />
        <sinch-modal
          open={this.open}
          titleText="Modal de teste"
          onCloseAction={() => console.log('close action clicked')}
          actions={{
            cancel: { text: 'Cancelar', action: () => this.closeModal() },
            confirm: { text: 'Confirmar', action: () => this.closeModal() },
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tristique velit. Nullam elit mauris, pharetra nec leo vitae, eleifend condimentum purus. Sed suscipit
            metus nulla, non mollis libero vulputate in. Aliquam molestie, odio sit amet fermentum posuere, nulla libero finibus magna, vel pellentesque magna leo eu sem.
            Pellentesque tortor ex, convallis a metus ac, iaculis elementum orci. Nulla eleifend malesuada lorem, non congue quam cursus quis. Donec vitae tincidunt eros. In
            faucibus sed leo eget rhoncus. Vestibulum quis rhoncus est. Ut dignissim enim risus, vel aliquam elit laoreet et. Cras congue sed est ac mattis. Nulla diam nulla,
            sollicitudin id ex vitae, porta eleifend orci. Morbi ante ligula, consectetur ac enim at, posuere molestie purus. Integer fringilla odio et dui pulvinar scelerisque.
          </p>
        </sinch-modal>
      </Host>
    );
  }
}
