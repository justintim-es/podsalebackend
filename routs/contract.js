// = == = = == = == =
const express = require('express');
const router = express.Router();
const { Web3 } = require('web3');
const web3 = new Web3('http://localhost:8545');
const { fixedaddress, gasprice, mintaddress } = require('../constants');
const { tbacked, sellGas } = require('../contracts/fixed');
const { balanceOf } = require('../contracts/wpod');
const { refercosts, isreferer, referers_length, create_discountcode_gas, discountcost, yourdiscountcodes, allyourdiscountcodes } = require('../contracts/refer');
router.get('/current-eth', (req, res) => {
    web3.eth.getBalance(fixedaddress).then(balancer => {
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
    balanceOf(fixedaddress).then(wpod => {
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
router.get('/ever-backed', (req, res) => {
    tbacked().then(ttb => {
        console.log(ttb.toString());
        return res.send({ eb: (parseInt(ttb.toString().replace('n')) / 1000000000000000000) });
    }) 
});
router.get('/is-referer/:address', (req, res) => {
    isreferer(req.params.address).then(tir => res.send(tir)).catch(err => {
        console.log(err);
        return res.status(400).send()
    });
})
router.get('/current-refer-price', (req, res) => {
    refercosts().then(trc => {
        referers_length().then(tr => {
            const crp = (parseInt(tr) + parseInt(1)) * parseInt(trc);
            return res.send({ wei: crp, eth: (crp) / 1000000000000000000, costs: trc.toString(), costseth: web3.utils.fromWei(trc.toString(), 'ether') });
        })
    })
})
// = == = = == = == = 
router.get('/refer-discount-cost/:referer', (req, res) => {
    const random = web3.utils.randomHex(32);
    discountcost().then(tdc => {
        console.log(tdc);
        referers_length().then(trl => {
            const msgvalue = tdc * (trl + BigInt(1));
            create_discountcode_gas(req.params.referer, web3.eth.accounts.create().address, msgvalue, random).then(tcdg => {
                const gasfee = gasprice * tcdg;
                const txfee = parseInt(msgvalue) / parseInt(web3.utils.toWei(1, 'ether')); 
                const totalfee = parseInt(tdc) + parseInt(gasfee); 
                return res.send({
                    txfee: txfee.toString(),
                    txfeeeur: (txfee / parseInt(web3.utils.toWei(1, 'ether')) * parseInt(2200)).toString(),
                    gasfee: gasfee.toString(),
                    gasfeeeur: (gasfee / BigInt(web3.utils.toWei(1, 'ether')) * BigInt(2200)).toString(),
                    totalfee: totalfee / parseInt(web3.utils.toWei(1, 'ether')),
                    totalfeeeur: (parseInt(totalfee) / parseInt(web3.utils.toWei(1, 'ether')) * parseInt(2200))
                })
            })
        })
    }).catch(err => {
        console.log(err);
        return res.status(400).send();
    })
})
router.get('/discount-codes/:address', (req, res) => {
    allyourdiscountcodes(req.params.address).then(taydc => {
        res.send(taydc.map(e => { return {
            consumer: e.consumer,
            code: e.code
        }}));
    }).catch(err => {
        console.log(err);
        return res.status(400).send(err);
    })
})


module.exports = router;