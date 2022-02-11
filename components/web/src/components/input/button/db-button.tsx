import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'db-button',
  styleUrl: 'db-button.scss',
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