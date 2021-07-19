import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ds-modal',
  styleUrl: 'ds-modal.scss',
  shadow: true,
})
export class DsModal {
  @Prop() open: boolean = false;
  @Prop() title: string;
  @Prop() actions: any;
  @Event() closeAction: EventEmitter

  render() {
    return (
      <div class={`modal ${this.open ? 'open' : ''}`}>
        <div class="container">
          <div class="title">
            <h1>{this.title}</h1>
          </div>
          <slot />
          <div class="actions">
            {this.actions.cancel ? <ds-button text={this.actions.cancel.text} onButtonClick={this.actions.cancel.action} /> : null}
            {this.actions.confirm ? <ds-button text={this.actions.confirm.text} onButtonClick={this.actions.confirm.action} /> : null}
          </div>
        </div>
      </div>
    );
  }
}
