import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sinch-modal',
  styleUrl: 'sinch-modal.scss',
  shadow: true,
})
export class SinchModal {
  @Prop() open: boolean = false;
  @Prop() titleText: string;
  @Prop() actions: any;
  @Event() closeAction: EventEmitter

  render() {
    return (
      <div class={`modal ${this.open ? 'open' : ''}`}>
        <div class="container">
          <div class="title">
            <h1>{this.titleText}</h1>
          </div>
          <slot />
          <div class="actions">
            {this.actions.cancel ? <sinch-button text={this.actions.cancel.text} onButtonClick={this.actions.cancel.action} type={"secundary"}/> : null}
            {this.actions.confirm ? <sinch-button text={this.actions.confirm.text} onButtonClick={this.actions.confirm.action} type={"primary"}/> : null}
          </div>
        </div>
      </div>
    );
  }
}