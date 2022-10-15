const { sayHelloTo } = require('@test-workspaces/utils-one');
const { uppercaseText } = require('@test-workspaces/utils-two');

sayHelloTo(uppercaseText('luke'));