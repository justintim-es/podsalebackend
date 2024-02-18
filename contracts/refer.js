// = == = = == = == =
const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"_fixedexchange","type":"address"}],"name":"add_fixedexchange","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"consumer","type":"address"},{"internalType":"string","name":"code","type":"string"}],"name":"create_discountcode","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"discountcost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"consumer","type":"address"},{"internalType":"address","name":"referer","type":"address"},{"internalType":"string","name":"code","type":"string"}],"name":"is_redeemables","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isrefered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isreferer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"raddress","type":"address"}],"name":"isreferer_view","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"refercosts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"refered","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"saddress","type":"address"}],"name":"refered_view","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"referers_length","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"shop","type":"address"},{"internalType":"address","name":"referer","type":"address"}],"name":"refers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"register_referer","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"buyer","type":"address"},{"internalType":"address","name":"referer","type":"address"},{"internalType":"string","name":"code","type":"string"}],"name":"set_redeemables_false","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"saddress","type":"address"},{"internalType":"address","name":"raddress","type":"address"}],"name":"set_refered","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"take_money","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"yourdiscountcodes","outputs":[{"internalType":"address","name":"consumer","type":"address"},{"internalType":"string","name":"code","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"yourdiscountcodeslength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const bin = '608060405265048c273950006001556605543df729c00060025534801562000025575f80fd5b50335f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036200009a575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000919190620001b6565b60405180910390fd5b620000ab81620000b260201b60201c565b50620001d1565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6200019e8262000173565b9050919050565b620001b08162000192565b82525050565b5f602082019050620001cb5f830184620001a5565b92915050565b611ea180620001df5f395ff3fe608060405260043610610129575f3560e01c80638da5cb5b116100aa578063c3af63971161006e578063c3af63971461038e578063d836f1cc146103ca578063f2fde38b146103f4578063f46d4e941461041c578063fb28155714610458578063fe0a716d1461049457610129565b80638da5cb5b146102ab57806397b903a2146102d55780639e449157146102ff578063b2bb7a3c14610329578063be160f171461035157610129565b806360ee70d5116100f157806360ee70d51461020b57806362a57690146102155780636c916049146102515780636ef7a3891461026d578063715018a61461029557610129565b8063049f19c41461012d578063352b7e281461016957806341144891146101a5578063561e3331146101cd5780635bcf9aef146101e3575b5f80fd5b348015610138575f80fd5b50610153600480360381019061014e9190611356565b6104d0565b604051610160919061139b565b60405180910390f35b348015610174575f80fd5b5061018f600480360381019061018a9190611356565b6104ed565b60405161019c91906113c3565b60405180910390f35b3480156101b0575f80fd5b506101cb60048036038101906101c691906113dc565b610552565b005b3480156101d8575f80fd5b506101e161065a565b005b3480156101ee575f80fd5b5061020960048036038101906102049190611356565b6107b2565b005b610213610872565b005b348015610220575f80fd5b5061023b60048036038101906102369190611356565b610a14565b604051610248919061139b565b60405180910390f35b61026b60048036038101906102669190611556565b610a66565b005b348015610278575f80fd5b50610293600480360381019061028e91906115b0565b610d22565b005b3480156102a0575f80fd5b506102a9610dd2565b005b3480156102b6575f80fd5b506102bf610de5565b6040516102cc91906113c3565b60405180910390f35b3480156102e0575f80fd5b506102e9610e0c565b6040516102f69190611634565b60405180910390f35b34801561030a575f80fd5b50610313610e12565b6040516103209190611634565b60405180910390f35b348015610334575f80fd5b5061034f600480360381019061034a91906113dc565b610e1e565b005b34801561035c575f80fd5b5061037760048036038101906103729190611677565b610e9d565b60405161038592919061172f565b60405180910390f35b348015610399575f80fd5b506103b460048036038101906103af9190611356565b610f7c565b6040516103c1919061139b565b60405180910390f35b3480156103d5575f80fd5b506103de610f99565b6040516103eb9190611634565b60405180910390f35b3480156103ff575f80fd5b5061041a60048036038101906104159190611356565b610f9f565b005b348015610427575f80fd5b50610442600480360381019061043d9190611356565b611023565b60405161044f91906113c3565b60405180910390f35b348015610463575f80fd5b5061047e60048036038101906104799190611356565b611053565b60405161048b9190611634565b60405180910390f35b34801561049f575f80fd5b506104ba60048036038101906104b591906115b0565b611068565b6040516104c7919061139b565b60405180910390f35b6007602052805f5260405f205f915054906101000a900460ff1681565b5f60065f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60055f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff166105db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d2906117cd565b60405180910390fd5b8060065f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60055f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff166106e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106da906117cd565b60405180910390fd5b60055f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff1661076c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107639061185b565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc4790811502906040515f60405180830381858888f193505050501580156107af573d5f803e3d5ffd5b50565b6107ba61119c565b600160055f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550600481908060018154018082558091505060019003905f5260205f20015f9091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600160038054905061088491906118a6565b60015461089191906118d9565b3410156108d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ca906119b0565b60405180910390fd5b60085f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff161561095d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095490611a18565b60405180910390fd5b600333908060018154018082558091505060019003905f5260205f20015f9091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160085f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550565b5f60085f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff169050919050565b60085f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16610aef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae690611aa6565b60405180910390fd5b600254341015610b34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2b90611b34565b60405180910390fd5b600160095f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2082604051610bbc9190611b8c565b90815260200160405180910390205f6101000a81548160ff021916908315150217905550600a5f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2060405180604001604052808473ffffffffffffffffffffffffffffffffffffffff16815260200183815250908060018154018082558091505060019003905f5260205f2090600202015f909190919091505f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019081610cc79190611d9c565b5050506001600b5f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f828254610d1791906118a6565b925050819055505050565b5f60095f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2082604051610da99190611b8c565b90815260200160405180910390205f6101000a81548160ff021916908315150217905550505050565b610dda61119c565b610de35f611223565b565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60015481565b5f600380549050905090565b8060065f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600a602052815f5260405f208181548110610eb6575f80fd5b905f5260205f2090600202015f9150915050805f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001018054610efb90611bcf565b80601f0160208091040260200160405190810160405280929190818152602001828054610f2790611bcf565b8015610f725780601f10610f4957610100808354040283529160200191610f72565b820191905f5260205f20905b815481529060010190602001808311610f5557829003601f168201915b5050505050905082565b6008602052805f5260405f205f915054906101000a900460ff1681565b60025481565b610fa761119c565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611017575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161100e91906113c3565b60405180910390fd5b61102081611223565b50565b6006602052805f5260405f205f915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b602052805f5260405f205f915090505481565b5f60085f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff166110f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e990611aa6565b60405180910390fd5b60095f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20826040516111789190611b8c565b90815260200160405180910390205f9054906101000a900460ff1690509392505050565b6111a46112e4565b73ffffffffffffffffffffffffffffffffffffffff166111c2610de5565b73ffffffffffffffffffffffffffffffffffffffff1614611221576111e56112e4565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161121891906113c3565b60405180910390fd5b565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b5f604051905090565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f611325826112fc565b9050919050565b6113358161131b565b811461133f575f80fd5b50565b5f813590506113508161132c565b92915050565b5f6020828403121561136b5761136a6112f4565b5b5f61137884828501611342565b91505092915050565b5f8115159050919050565b61139581611381565b82525050565b5f6020820190506113ae5f83018461138c565b92915050565b6113bd8161131b565b82525050565b5f6020820190506113d65f8301846113b4565b92915050565b5f80604083850312156113f2576113f16112f4565b5b5f6113ff85828601611342565b925050602061141085828601611342565b9150509250929050565b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61146882611422565b810181811067ffffffffffffffff8211171561148757611486611432565b5b80604052505050565b5f6114996112eb565b90506114a5828261145f565b919050565b5f67ffffffffffffffff8211156114c4576114c3611432565b5b6114cd82611422565b9050602081019050919050565b828183375f83830152505050565b5f6114fa6114f5846114aa565b611490565b9050828152602081018484840111156115165761151561141e565b5b6115218482856114da565b509392505050565b5f82601f83011261153d5761153c61141a565b5b813561154d8482602086016114e8565b91505092915050565b5f806040838503121561156c5761156b6112f4565b5b5f61157985828601611342565b925050602083013567ffffffffffffffff81111561159a576115996112f8565b5b6115a685828601611529565b9150509250929050565b5f805f606084860312156115c7576115c66112f4565b5b5f6115d486828701611342565b93505060206115e586828701611342565b925050604084013567ffffffffffffffff811115611606576116056112f8565b5b61161286828701611529565b9150509250925092565b5f819050919050565b61162e8161161c565b82525050565b5f6020820190506116475f830184611625565b92915050565b6116568161161c565b8114611660575f80fd5b50565b5f813590506116718161164d565b92915050565b5f806040838503121561168d5761168c6112f4565b5b5f61169a85828601611342565b92505060206116ab85828601611663565b9150509250929050565b5f81519050919050565b5f82825260208201905092915050565b5f5b838110156116ec5780820151818401526020810190506116d1565b5f8484015250505050565b5f611701826116b5565b61170b81856116bf565b935061171b8185602086016116cf565b61172481611422565b840191505092915050565b5f6040820190506117425f8301856113b4565b818103602083015261175481846116f7565b90509392505050565b7f4f6e6c79206120666978656465786368616e676520636f6e74726163742063615f8201527f6e2063616c6c20746869732066756e6374696f6e000000000000000000000000602082015250565b5f6117b76034836116bf565b91506117c28261175d565b604082019050919050565b5f6020820190508181035f8301526117e4816117ab565b9050919050565b7f4f6e6c7920612066697865642065786368616e67652063616e2074616b65206d5f8201527f6f6e657900000000000000000000000000000000000000000000000000000000602082015250565b5f6118456024836116bf565b9150611850826117eb565b604082019050919050565b5f6020820190508181035f83015261187281611839565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6118b08261161c565b91506118bb8361161c565b92508282019050808211156118d3576118d2611879565b5b92915050565b5f6118e38261161c565b91506118ee8361161c565b92508282026118fc8161161c565b9150828204841483151761191357611912611879565b5b5092915050565b7f54686520636f737473206f66206265636f6d696e6720612072656665726572205f8201527f61726520353030303030303030303030303030205745492074696d657320746860208201527f6520616d6f756e74206f66207265666572657273000000000000000000000000604082015250565b5f61199a6054836116bf565b91506119a58261191a565b606082019050919050565b5f6020820190508181035f8301526119c78161198e565b9050919050565b7f596f7520616c72656164792061726520612072656665726572000000000000005f82015250565b5f611a026019836116bf565b9150611a0d826119ce565b602082019050919050565b5f6020820190508181035f830152611a2f816119f6565b9050919050565b7f596f7520617265206e6f74206120726566657265722c207061792074686520665f8201527f656520746f206265636f6d652061207265666572657220666972737400000000602082015250565b5f611a90603c836116bf565b9150611a9b82611a36565b604082019050919050565b5f6020820190508181035f830152611abd81611a84565b9050919050565b7f496e73756666696369656e742045544820746f2070617920666f7220746865205f8201527f6f6e6574696d65207370656369616c20646973636f756e742066656500000000602082015250565b5f611b1e603c836116bf565b9150611b2982611ac4565b604082019050919050565b5f6020820190508181035f830152611b4b81611b12565b9050919050565b5f81905092915050565b5f611b66826116b5565b611b708185611b52565b9350611b808185602086016116cf565b80840191505092915050565b5f611b978284611b5c565b915081905092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680611be657607f821691505b602082108103611bf957611bf8611ba2565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302611c5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611c20565b611c658683611c20565b95508019841693508086168417925050509392505050565b5f819050919050565b5f611ca0611c9b611c968461161c565b611c7d565b61161c565b9050919050565b5f819050919050565b611cb983611c86565b611ccd611cc582611ca7565b848454611c2c565b825550505050565b5f90565b611ce1611cd5565b611cec818484611cb0565b505050565b5b81811015611d0f57611d045f82611cd9565b600181019050611cf2565b5050565b601f821115611d5457611d2581611bff565b611d2e84611c11565b81016020851015611d3d578190505b611d51611d4985611c11565b830182611cf1565b50505b505050565b5f82821c905092915050565b5f611d745f1984600802611d59565b1980831691505092915050565b5f611d8c8383611d65565b9150826002028217905092915050565b611da5826116b5565b67ffffffffffffffff811115611dbe57611dbd611432565b5b611dc88254611bcf565b611dd3828285611d13565b5f60209050601f831160018114611e04575f8415611df2578287015190505b611dfc8582611d81565b865550611e63565b601f198416611e1286611bff565b5f5b82811015611e3957848901518255600182019150602085019450602081019050611e14565b86831015611e565784890151611e52601f891682611d65565b8355505b6001600288020188555050505b50505050505056fea2646970667358221220cdc84471119ac567796e4b8f82658988525f8a072c7942572c47c94414bbaa2364736f6c63430008170033';
const { Web3 } = require('web3');
const { web3url } = require('../constants/urls');
const { mintaddress, referaddress, fixedaddress, gasprice } = require('../constants');
var web3 = new Web3(web3url);
const refercontract = new web3.eth.Contract(abi, referaddress);
// const refercontract = new web3.eth.Contract(abi);
// 
const deploygas = () => {
    return new Promise((resolve, reject) => {
        refercontract.deploy({
            data: bin
        }).estimateGas({
            from: mintaddress
        }).then(resolve).catch(reject)
    })
}
const deploy = (gas) => {
    return new Promise((resolve, reject) => {
        refercontract.deploy({
            data: bin
        }).send({
            from: mintaddress,
            gas: gas
        }).then(resolve).catch(reject)
    });
}
const deploywgas = () => {
    return new Promise((resolve, reject) => {
        deploygas().then(tdg => deploy(tdg).then(resolve).catch(reject))
    })
}
// deploywgas().then(console.log);
const register_referer = (private) => {
    return new Promise((resolve, reject) => {
        const info = web3.eth.accountProvider.privateKeyToAccount(private);
        web3.eth.accounts.wallet.add(private);
        refercosts().then(trc => referers_length().then(trl => {
            const wei = BigInt(trc) * (BigInt(trl) + BigInt(1));
            refercontract.methods.register_referer().estimateGas({
                from: info.address,
                value: wei
            }).then(tg => {
                web3.eth.sendTransaction({
                    from: info.address,
                    to: referaddress,
                    value: wei,
                    data: refercontract.methods.register_referer().encodeABI(),
                    gas: tg
                }).on('transactionHash', hash => {
                    web3.eth.accounts.wallet.remove(info.address);
                    resolve(hash);
                }).catch(reject).catch(reject)
            }).catch(reject)
        })).catch(reject)        
    })
}
/// HELEMAAL AFF??? DIT VERANDEREN IN SOL NAAR DISCOUNTCODE
const create_discountcode_gas = (from, consumer, value, code) => {
    return new Promise((resolve, reject) => {
        console.log('gas');
        console.log(value);
        console.log(consumer);
        refercontract.methods.create_discountcode(consumer, code).estimateGas({
            from: from,
            value: value
        }).then(resolve).catch(reject)
    })
}
const create_discountcode = (private, from, consumer, value, code) => {
    console.log(from);
    return new Promise((resolve, reject) => {
        create_discountcode_gas(from, consumer, value, code).then(gas => {
            console.log(value);
            console.log('got');
            web3.eth.accounts.wallet.add(private)
            web3.eth.sendTransaction({
                from: from,
                to: referaddress,
                value: value,
                gasPrice: gasprice,
                data: refercontract.methods.create_discountcode(consumer, code).encodeABI(),
                gas: gas
            }).on('transactionHash', hash => {
                web3.eth.accounts.wallet.remove(from);
                resolve(hash);
            }).catch(reject)
        }).catch(reject)
    });
}
const isreferer = (raddress) => {
    return new Promise((resolve, reject) => {
        // const info = web3.eth.accounts.privateKeyToAccount(private);
        refercontract.methods.isreferer(raddress).call({
            from: raddress
        }).then(resolve).catch(reject)
    })
}
// isreferer('0x87E44D69415f2C14eDb7f74F340E3084A59d2FDE').then(console.log)
const refercosts = () => {
    return new Promise((resolve, reject) => {
        refercontract.methods.refercosts().call({
            from: mintaddress
        }).then(resolve).catch(reject)
    })
}
const referers_length = () => {
    return new Promise((resolve, reject) => {
        refercontract.methods.referers_length().call({
            from: mintaddress
        }).then(resolve).catch(reject)
    })
}
const discountcost = (from) => {
    return new Promise((resolve, reject) => {
        refercontract.methods.discountcost().call({
            from: from
        }).then(resolve).catch(reject);
    })
}
const yourdiscountcodes = (from, index) => {
    return new Promise((resolve, reject) => {
        refercontract.methods.yourdiscountcodes(from, index).call({
            from: from
        }).then(resolve).catch(reject)
    })
}
// yourdiscountcodes('0x87E44D69415f2C14eDb7f74F340E3084A59d2FDE').then(console.log)

const yourdiscountcodeslength = (from) => {
    return new Promise((resolve, reject) => {
        refercontract.methods.yourdiscountcodeslength(from).call({
            from: from
        }).then(resolve).catch(reject)
    })
}
// yourdiscountcodeslength('0x87E44D69415f2C14eDb7f74F340E3084A59d2FDE').then(console.log);
const allyourdiscountcodes = (from) => {
    return new Promise((resolve, reject) => {
        yourdiscountcodeslength(from).then(async tydcl => {
            let ydcs = [];
            for (let i = BigInt(0); i < tydcl; i++) {
                console.log(i);
                await yourdiscountcodes(from, i).then(tydc => {
                    ydcs.push(tydc);
                }).catch(reject)
            }
            resolve(ydcs);
        }).catch(reject)
    })
}
module.exports.refercosts = refercosts;
module.exports.referers_length = referers_length;
module.exports.register_referer = register_referer;
module.exports.isreferer = isreferer;
module.exports.create_discountcode_gas = create_discountcode_gas;
module.exports.create_discountcode = create_discountcode;
module.exports.discountcost = discountcost;
module.exports.allyourdiscountcodes = allyourdiscountcodes;
// refercosts().then(console.log)
// deploywgas().then(console.log);
