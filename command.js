const { Web3 } = require('web3');
const web3 = new Web3('http://localhost:8545');

console.log(web3.eth.accounts.create());
// console.log(web3.eth.accounts.privateKeyToAccount('0x2d4d2b318f9def29907368651133ced4652b4a7a20f36a90df54871e39545448'))
web3.eth.sendTransaction({
    from: '0x739dcb2492b9c47fa3a09e9980d936295e62d920',
    to: '0x9819A1cDdB1aA291284d617B28E6BEB5806b3fcD',
    value: web3.utils.toWei('10', 'ether')
}).then(console.log)

// console.log(web3.eth.accounts.create())

// web3.eth.getBalance('0xea43d0170Dfd901F56f94FE9c40BE933e7c6F11F').then(console.log)
// web3.eth.accounts.wallet.add('0x2d4d2b318f9def29907368651133ced4652b4a7a20f36a90df54871e39545448')

// web3.eth.getBalance('0xc3e0011536c482CAd1F3657De3b91E3f0a59cB72').then(console.log);
// web3.eth.wallet.add('')


// web3.eth.getBalance