const abi = [{"inputs":[{"internalType":"address","name":"waddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"back","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"backed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"backers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"awpod","type":"uint256"}],"name":"sell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tbacked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wpod","outputs":[{"internalType":"contract WPOD","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const bin = '6080604052640ba43b74006002555f6003553480156200001d575f80fd5b506040516200135038038062001350833981810160405281019062000043919062000236565b335f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000b7575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000ae919062000277565b60405180910390fd5b620000c8816200011060201b60201c565b508060015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000292565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6200020082620001d5565b9050919050565b6200021281620001f4565b81146200021d575f80fd5b50565b5f81519050620002308162000207565b92915050565b5f602082840312156200024e576200024d620001d1565b5b5f6200025d8482850162000220565b91505092915050565b6200027181620001f4565b82525050565b5f6020820190506200028c5f83018462000266565b92915050565b6110b080620002a05f395ff3fe608060405260043610610090575f3560e01c8063a035b1fe11610058578063a035b1fe14610144578063bb790e771461016e578063e4849b3214610198578063e9d80020146101c0578063f2fde38b146101fc57610090565b8063595b7f2114610094578063715018a6146100d05780638a02170c146100e65780638da5cb5b146101105780638dde08401461013a575b5f80fd5b34801561009f575f80fd5b506100ba60048036038101906100b59190610bb7565b610224565b6040516100c79190610bfa565b60405180910390f35b3480156100db575f80fd5b506100e4610239565b005b3480156100f1575f80fd5b506100fa61024c565b6040516101079190610c6e565b60405180910390f35b34801561011b575f80fd5b50610124610271565b6040516101319190610c96565b60405180910390f35b610142610298565b005b34801561014f575f80fd5b506101586105be565b6040516101659190610bfa565b60405180910390f35b348015610179575f80fd5b506101826105c4565b60405161018f9190610bfa565b60405180910390f35b3480156101a3575f80fd5b506101be60048036038101906101b99190610cd9565b6105ca565b005b3480156101cb575f80fd5b506101e660048036038101906101e19190610cd9565b61094b565b6040516101f39190610c96565b60405180910390f35b348015610207575f80fd5b50610222600480360381019061021d9190610bb7565b610986565b005b6005602052805f5260405f205f915090505481565b610241610a0a565b61024a5f610a91565b565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b5f600254346102a79190610d31565b146102e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102de90610e07565b60405180910390fd5b5f600254346102f69190610e52565b90505f805b600480549050811015610388573373ffffffffffffffffffffffffffffffffffffffff166004828154811061033357610332610e82565b5b905f5260205f20015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361037b57600191505b80806001019150506102fb565b50806103ef57600433908060018154018082558091505060019003905f5260205f20015f9091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b3460035f8282546104009190610eaf565b925050819055503460055f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546104539190610eaf565b9250508190555060015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33670de0b6b3a7640000856104ac9190610ee2565b6040518363ffffffff1660e01b81526004016104c9929190610f23565b6020604051808303815f875af11580156104e5573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105099190610f7f565b5060015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b333670de0b6b3a76400008561055c9190610ee2565b6040518363ffffffff1660e01b8152600401610579929190610f23565b6020604051808303815f875af1158015610595573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105b99190610f7f565b505050565b60025481565b60035481565b5f670de0b6b3a7640000826105df9190610e52565b6002546105ec9190610ee2565b90508060035411610632576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062990610ff4565b60405180910390fd5b5f5b6004805490508110156107db575f633b9aca00846106529190610e52565b633b9aca006003546106649190610e52565b60055f6004868154811061067b5761067a610e82565b5b905f5260205f20015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20546106e79190610e52565b6106f19190610ee2565b905060015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd336004858154811061074557610744610e82565b5b905f5260205f20015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518463ffffffff1660e01b815260040161078c93929190611012565b6020604051808303815f875af11580156107a8573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107cc9190610f7f565b50508080600101915050610634565b508060035f8282546107ed9190611047565b925050819055505f60055f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205403610903575f5b600480549050811015610901573373ffffffffffffffffffffffffffffffffffffffff166004828154811061087257610871610e82565b5b905f5260205f20015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036108f457600481815481106108c9576108c8610e82565b5b905f5260205f20015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555b808060010191505061083a565b505b3373ffffffffffffffffffffffffffffffffffffffff166108fc8290811502906040515f60405180830381858888f19350505050158015610946573d5f803e3d5ffd5b505050565b6004818154811061095a575f80fd5b905f5260205f20015f915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61098e610a0a565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036109fe575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016109f59190610c96565b60405180910390fd5b610a0781610a91565b50565b610a12610b52565b73ffffffffffffffffffffffffffffffffffffffff16610a30610271565b73ffffffffffffffffffffffffffffffffffffffff1614610a8f57610a53610b52565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610a869190610c96565b60405180910390fd5b565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610b8682610b5d565b9050919050565b610b9681610b7c565b8114610ba0575f80fd5b50565b5f81359050610bb181610b8d565b92915050565b5f60208284031215610bcc57610bcb610b59565b5b5f610bd984828501610ba3565b91505092915050565b5f819050919050565b610bf481610be2565b82525050565b5f602082019050610c0d5f830184610beb565b92915050565b5f819050919050565b5f610c36610c31610c2c84610b5d565b610c13565b610b5d565b9050919050565b5f610c4782610c1c565b9050919050565b5f610c5882610c3d565b9050919050565b610c6881610c4e565b82525050565b5f602082019050610c815f830184610c5f565b92915050565b610c9081610b7c565b82525050565b5f602082019050610ca95f830184610c87565b92915050565b610cb881610be2565b8114610cc2575f80fd5b50565b5f81359050610cd381610caf565b92915050565b5f60208284031215610cee57610ced610b59565b5b5f610cfb84828501610cc5565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f610d3b82610be2565b9150610d4683610be2565b925082610d5657610d55610d04565b5b828206905092915050565b5f82825260208201905092915050565b7f506c656173652074727920746f2073656e642061206d6f64756c617220616d6f5f8201527f756e74206f66204554482077697468206f7572207072696365206f662035303060208201527f3030303030303030205745490000000000000000000000000000000000000000604082015250565b5f610df1604c83610d61565b9150610dfc82610d71565b606082019050919050565b5f6020820190508181035f830152610e1e81610de5565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610e5c82610be2565b9150610e6783610be2565b925082610e7757610e76610d04565b5b828204905092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f610eb982610be2565b9150610ec483610be2565b9250828201905080821115610edc57610edb610e25565b5b92915050565b5f610eec82610be2565b9150610ef783610be2565b9250828202610f0581610be2565b91508282048414831517610f1c57610f1b610e25565b5b5092915050565b5f604082019050610f365f830185610c87565b610f436020830184610beb565b9392505050565b5f8115159050919050565b610f5e81610f4a565b8114610f68575f80fd5b50565b5f81519050610f7981610f55565b92915050565b5f60208284031215610f9457610f93610b59565b5b5f610fa184828501610f6b565b91505092915050565b7f496e73756666696369656e7420436f6e74726163742042616c616e63650000005f82015250565b5f610fde601d83610d61565b9150610fe982610faa565b602082019050919050565b5f6020820190508181035f83015261100b81610fd2565b9050919050565b5f6060820190506110255f830186610c87565b6110326020830185610c87565b61103f6040830184610beb565b949350505050565b5f61105182610be2565b915061105c83610be2565b925082820390508181111561107457611073610e25565b5b9291505056fea2646970667358221220bb6768627fe448bbff73d10889c2d7b85de6841fb7130d1536993c1c639ec26264736f6c63430008170033';
const { Web3 } = require('web3');
const web3 = new Web3('http://localhost:8545');
const fixedAddress = '0x73454c0b9a230A4cEd000f75056A0AF670F6Ae5b';
const fixed = new web3.eth.Contract(abi, fixedAddress);
// const fixed = new web3.eth.Contract(abi);


const deployGas = () => {
    return new Promise((resolve, reject) => {
        web3.eth.wallet.add('0x2d4d2b318f9def29907368651133ced4652b4a7a20f36a90df54871e39545448')
        fixed.deploy({
            data: bin,
            arguments: ['0x4Cd900d560b25f5314D1bBAdF6EF2d9510467214']
        }).estimateGas({
            from: '0x3b28b462B863a9d9a6E34DF73DF2d05EE2aF0A87'
        }).then(resolve).catch(reject)
    })
}
// deployGas().then(console.log)

const deploy = () => {
    return new Promise((resolve, reject) => {
        web3.eth.wallet.add('0xc43187d4f1bbb12858bb93de0d920920e4e42e644c498c3efe87ac71e4007bc8')
        fixed.deploy({
            data: bin,
            arguments: ['0xE6B00167a2072F0CAeDad80a5617c6038F0843d4']
        }).send({
            from: '0x60CfA1975698062ea509268fa31C2C96b370215D',
            gas: 1105858n
        }).then(resolve).catch(reject)
    })
}   
// deploy().then(console.log)

const backGas = (private, value) => {
    return new Promise((resolve, reject) => {
        const info = web3.eth.accounts.privateKeyToAccount(private);
        web3.eth.accounts.wallet.add(private);
        fixed.methods.back().estimateGas({
            from: info.address,
            value: value
        }).then(resolve).catch(reject)
    })
}
// backGas('0xd93d83c15e487b75b67a8d74e7518f124f9870ceae2daef99c2251b93c47f6c3', 50000000000000000).then(console.log)
const back = (private, value, gas) => {
    return new Promise((resolve, reject) => {
        const info = web3.eth.accounts.privateKeyToAccount(private);
        web3.eth.accounts.wallet.add(private)
        web3.eth.sendTransaction({
            from: info.address,
            to: fixedAddress,
            value: BigInt(value.toString()),
            gas: gas,   
            data: fixed.methods.back().encodeABI()
        }).on('transactionHash', hash => {
            web3.eth.accounts.wallet.remove(info.address);
            resolve(hash)
        });
    })
}
// back('0xd93d83c15e487b75b67a8d74e7518f124f9870ceae2daef99c2251b93c47f6c3', '50000000000').then(console.log)
// back('0x9bbbf3508520e80ef4d4e9dfefbc257de0527dd3a6933a98b76b7bc3c231710d', '500000000000000000').then(console.log)

const sellGas = (wpod, private) => {
    return new Promise((resolve, reject) => {
        const info = web3.eth.accounts.privateKeyToAccount(private)
        fixed.methods.sell(wpod).estimateGas({
            from: info.address
        }).then(resolve).catch(reject)
    })
}
// sellGas(10).then(console.log)
const sell = (private, wpod, gas ) => {
    return new Promise((resolve, reject) => {
        const info = web3.eth.accounts.privateKeyToAccount(private);
        web3.eth.accounts.wallet.add(private)
        web3.eth.sendTransaction({
            from: info.address,
            to: fixedAddress,
            gas: gas,
            data: fixed.methods.sell(BigInt(wpod)).encodeABI()
        }).on('transactionHash', hash => {
            web3.eth.accounts.wallet.remove(info.address);
            resolve(hash)
        });
    })
}
// const tbacked = ()
// console.log(web3.eth.accounts.privateKeyToAccount('0xd93d83c15e487b75b67a8d74e7518f124f9870ceae2daef99c2251b93c47f6c3'))
// sell('0x18c4e7d4c764bf9382273b166b25b8e49eb2006bb4a87156cd97a5cc7740cc77',  100000000).then(console.log)
const approveGas = (private, wpod) => {
    return new Promise((resolve, reject) => {
        const info = web3.eth.accounts.privateKeyToAccount(private);
        web3.eth.accounts.wallet.add(private);
        fixed.methods.approve(BigInt(wpod)).estimateGas({
            from: info.address
        }).then(resolve).catch(reject)
    })
}
// approveGas('0xf70b1b46ee28807c4c6284f481ca8083c37ee5e52007f90ceb1a47979a698f3f', 100000000000000000000).then(console.log)
const approve = (private, wpod) => {
    return new Promise((resolve, reject) => {
        const info = web3.eth.accounts.privateKeyToAccount(private);
        web3.eth.accounts.wallet.add(private);
        fixed.methods.approve(BigInt(wpod)).send({
            from: info.address,
            gas: 53241n
        }).then(resolve).catch(reject)
    })
}
// approve('0xb121ccc29b77bdcd871781365eb3a5a17f10894afc52ef7f8186c865dcfbcd79', 1000000000000000000000000).then(console.log)

const backed = (private) => {
    return new Promise((resolve, reject) => {
        const info = web3.eth.accounts.privateKeyToAccount(private);
        fixed.methods.backed(info.address).call({
            from: info.address
        }).then(resolve).catch(reject)
    })
}
// backed('0xfbcd1ad7acce0659a3552e8fedb4c4c2354edad9300b747f8e496ba297886dd1').then(console.log)
const tbacked = () => {
    return new Promise((resolve, reject) => {
        fixed.methods.tbacked().call({
            from: web3.eth.getAccounts()[0]
        }).then(resolve).catch(reject)
    })
}
// tbacked().then(console.log)
const backers = () => {
    return new Promise((resolve, reject) => {
        fixed.methods.backers(0).call({
            from: web3.eth.getAccounts()[0]
        }).then(resolve).catch(reject)
    })
}
// backers().then(console.log)
module.exports.backGas = backGas;
module.exports.back = back;
module.exports.sellGas = sellGas;
module.exports.sell = sell;
module.exports.fixedAddress = fixedAddress;
