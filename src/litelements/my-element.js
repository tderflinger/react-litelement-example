import { LitElement, html, customElement } from 'lit-element';

@customElement('my-element')
class MyElement extends LitElement {
  render() {
    return html`
      <div>Hello from LitElement!</div>
    `;
  }
}

export default MyElement;