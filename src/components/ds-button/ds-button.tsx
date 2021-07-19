import { Component, Prop, Event, h, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.scss',
  shadow: true,
})
export class DsButton {
  @Prop() text: string;
  @Event() buttonClick: EventEmitter;

  render() {
    return (
      <button onClick={this.buttonClick.emit}>
        {this.text}
      </button>      
    );
  }

}
