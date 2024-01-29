const express = require('express');
const router = express.Router();
const { Web3 } = require('web3');
const web3 = new Web3('http://localhost:8545');
const { fixedAddress } = require('../contracts/fixed');
const { balanceOf } = require('../contracts/wpod');
router.get('/current-eth', (req, res) => {
    web3.eth.getBalance(fixedAddress).then(balancer => {
        console.log(balancer);
        if (balancer == 0) {
            return res.send({
                balance: 0,
            });
        } else {
            const bal = balancer.toString().replace('n')
            const eth = bal / 1000000000000000000;
            return res.send({ balance: eth });
        }
    })
})
router.get('/wpod-available', (req, res) => {
    balanceOf(fixedAddress).then(wpod => {
        // console.log(wpod)
        return res.send({
            wpod: wpod.toString()
        })
    }).catch(err => {
        console.log('askdjkasdj');
        console.log(err);
        return res.status(400).send()
    });
})

module.exports = router;