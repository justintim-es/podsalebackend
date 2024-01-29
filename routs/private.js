const express = require('express');
const router = express.Router();
const { Web3 } = require('web3');
const web3 = new Web3('http://localhost:8545')
const { back, backGas, sell, sellGas } = require('../contracts/fixed');
const { balanceOf, approveGas, approve } = require('../contracts/wpod');
router.get('/private', (req, res) => {
    const acc = web3.eth.accounts.create();
    return res.send(acc.privateKey)
})
router.get('/info/:private', (req, res) => {
    const info = web3.eth.accounts.privateKeyToAccount(req.params.private)
    web3.eth.getBalance(info.address).then(balancer => {
        balanceOf(info.address).then(wpod => {
            if (balancer == 0) {
                return res.send({
                    balance: 0,
                    address: info.address,
                    wpod: wpod.toString()
                });
            } else {
                const bal = balancer;
                console.log(bal);
                const eth = BigInt(bal) / BigInt(1000000000000000000);
                console.log(eth)
                return res.send({ address: info.address, balance: eth.toString(), wpod: wpod.toString() });
            }
        })
    })
})
router.post('/mint', (req, res) => {
    backGas(req.body.private, req.body.amount).then(gas => {
        back(req.body.private, req.body.amount, gas).then(b => res.send(b)).catch(err => res.status(400).send());
    });
})
router.post('/sell', (req, res) => {
    sellGas(req.body.amount, req.body.private).then(gas => {
        console.log(gas);
        sell(req.body.private, req.body.amount, gas).then(b => res.send(b)).catch(err => res.status(400).send()) 
    })
})
router.post('/approve', (req, res) => {
    console.log(req.body.private);
    approveGas(req.body.private, req.body.amount).then(gas => approve(req.body.private, req.body.amount, gas).then(a => res.send(a)))
})
module.exports = router;    