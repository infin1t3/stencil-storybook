import { Component, Host, JSX, Prop, h, EventEmitter, Event } from '@stencil/core';

import removeIcon from './cancel.svg';

@Component({
  tag: 'stc-pill-button',
  styleUrl: 'pill-button.scss',
  shadow: true
})
export class PillButton {

  /**
   * Event triggered when a the button remove icon is clicked.
   */
  @Event() public removeButtonResponse: EventEmitter<string>;

  /**
     * Input title for button
  */
  @Prop() buttonTitle: string;

  /**
     * Input subtitle for button
  */
  @Prop() subTitle: string;

  /**
     * Input key for button - this will be emitted if the close icon is clicked
  */
  @Prop() buttonKey: string;

  /**
     * Input color for button
  */
  @Prop() color: string;

   /**
     * Input text color for button
  */
  @Prop() textColor: string;

  private handleRemoveClick: any = (key: string) => () => this.deleteKey(key);

  private iconRemove(key: string): JSX.Element {
    return (<img id={`remove-${key}`} src={removeIcon} onClick={this.handleRemoveClick(key)}></img>);
  }

  private deleteKey(key: string): void {
    this.removeButtonResponse.emit(key);
  }

  render() {
    const style: any = {color: this.textColor, background: this.color};
    return (
      <Host>
        <span class="pill" style={style}>
          {this.buttonTitle}{this.iconRemove(this.buttonKey)}
          <div><sub>{this.subTitle}</sub></div>
        </span>
      </Host>
    );
  }
}
