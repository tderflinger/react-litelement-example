import { LitElement, html, customElement } from 'lit-element';

@customElement('my-element')
class MyElement extends LitElement {
  render() {
    return html`
      <div>Hello from MyElement!</div>
    `;
  }
}

export default MyElement;