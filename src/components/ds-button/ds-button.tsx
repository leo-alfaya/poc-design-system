import { Component, Prop, Event, h, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.scss',
  shadow: true,
})
export class DsButton {
  @Prop() text: string;
  @Event() buttonClick: EventEmitter;
  @Prop() type: string;

  render() {
    if(this.type == 'primary'){
      return (
        <button class="btn primary" onClick={this.buttonClick.emit}>
          {this.text}
        </button>      
      );
    } else if(this.type == 'secundary'){
      return (
        <button class="btn secundary" onClick={this.buttonClick.emit}>
          {this.text}
        </button>      
      );
    }
  }
}
