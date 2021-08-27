import { Component, Prop, Event, h, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sinch-button',
  styleUrl: 'sinch-button.scss',
  shadow: true,
})
export class SinchButton {
  @Prop() text: string;
  @Event() buttonClick: EventEmitter;
  @Prop() type: string;

  render() {
    return (
      <button class={`btn ${this.type || ''}`} onClick={this.buttonClick.emit}>
        {this.text}
      </button>
    );
  }
}
