import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'db-button',
  styles: 'db-button.scss',
  shadow: true
})
export class Button {
  @Prop({ reflect: true })
  disabled: boolean;
  render() {
    return (
      <button disabled={this.disabled}>
        <slot />
      </button>
    );
  }
}