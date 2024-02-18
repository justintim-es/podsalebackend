const { Web3 } = require('web3');
const { web3url } = require('./constants/urls');
const { mintaddress } = require('./constants');
const web3 = new Web3(web3url);

// console.log(web3.eth.accounts.create('= == = = == = =='));
// console.log(web3.eth.accounts.privateKeyToAccount('0x18e61952ae695fca937cc1cb42a993e6718a347c1b924cf5689ffb4ad5937187'));
// 0x87E44D69415f2C14eDb7f74F340E3084A59d2FDE
// console.log(web3.eth.accounts.privateKeyToAccount('0x914e2c5711449f63121fc45232a50d3a0bbc06eac429cc46ea48617b616ef4c6'));
// console.log(web3.eth.accounts.privateKeyToAccount('0x914e2c5711449f63121fc45232a50d3a0bbc06eac429cc46ea48617b616ef4c6'))
// web3.eth.accounts.wallet.add('0x18e61952ae695fca937cc1cb42a993e6718a347c1b924cf5689ffb4ad5937187');
web3.eth.sendTransaction({
    from: mintaddress,
    to: '0x87E44D69415f2C14eDb7f74F340E3084A59d2FDE',
    value: web3.utils.toWei('10', 'ether')
}).then(console.log)
// console.log(web3.utils.is_address('0x87E44D69415f2C14eDb7f74F340E3084A59d2FDEkasdm'));

// console.log(web3.eth.accounts.create())

// web3.eth.getBalance('0xea43d0170Dfd901F56f94FE9c40BE933e7c6F11F').then(console.log)
// web3.eth.accounts.wallet.add('0x2d4d2b318f9def29907368651133ced4652b4a7a20f36a90df54871e39545448')

// web3.eth.getBalance('0xc3e0011536c482CAd1F3657De3b91E3f0a59cB72').then(console.log);
// web3.eth.wallet.add('')
// console.log(web3.eth.accounts.privateKeyToAccount('0x54924174b56f6ef616749640c45d623955662ce597609ac2166c387e71489ff1'));

// web3.eth.getBalance

// web3.eth.getGasPrice().then(console.log);

// console.log(118233949849125n * 118682n);