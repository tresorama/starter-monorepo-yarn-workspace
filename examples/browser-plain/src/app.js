import { sayHelloTo } from '@test-workspaces/utils-one';
import { uppercaseText } from '@test-workspaces/utils-two';

// Inject nodes
document.body.insertAdjacentHTML('beforeend', `
<p>
<button id="text-button">Toggle Text</button>
<code id="text"></code>
</p>
<hr />
<p>
  <code>Open you console and click the button</code>
  <button id="button-logger">Log text</button>
</p>
<hr />
`);

// Get nodes refs and register events
const nodeText = document.querySelector('#text');
const nodeButton = document.querySelector('#text-button');
nodeButton.addEventListener('click', () => {
  if (nodeText.innerHTML !== '') {
    nodeText.innerHTML = '';
    return;
  }
  nodeText.innerHTML = uppercaseText('Hello Luke');
});

const nodeButtonLogger = document.querySelector('#button-logger');
nodeButtonLogger.addEventListener('click', () => {
  sayHelloTo('Console');
});