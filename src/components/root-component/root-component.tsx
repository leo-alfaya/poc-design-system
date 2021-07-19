import { Component, h } from '@stencil/core';

@Component({
  tag: 'root-component',
  styleUrl: 'root-component.css',
  shadow: true,
})
export class RootComponent {
  render() {
    return <ds-button text="Continuar" onButtonClick={() => console.log('teste')}></ds-button>;
  }
}
