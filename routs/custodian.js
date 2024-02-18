const express = require('express');
const router = express.Router();
const { Web3 } = require('web3');
const { web3url, podUrl} = require('../constants/urls');
const web3 = new Web3(web3url);
const { fixedAddress } = require('../contracts/fixed');
const { burn, mint, balanceOf } = require('../contracts/wpod');
const axios = require('axios');
const fs = require('fs');

router.post('/convert-to-pod', (req, res) => {
    burn(req.body.private, req.body.amount).then(bt => {
        axios.post(`${podUrl}/submittere-transactio-fixum`, {
            ex: '001d1c23bdf7c1589e3b32f8d2fe236a53d7d294ae8e129a9467c5e6cf7dc6715da36761adf737881a61f228376c24439edac3ee1b59ff1f4c9fe35835ba77c95062',
            to: req.body.address,
            pod: req.body.amount
        }).then(t => {
            console.log('aksfja');
            console.log(t.data.identitatis);
            axios.post(`${podUrl}/si-remotiones-submittere-proof`, {
                ex: req.body.podprivate,
                interiore: {
                    liber: false,
                    identitatis: t.data.identitatis
                }
            }).then(tp => res.send(bt)).catch(err => res.status(400).send())
        }).catch(err => res.status(400).send())
    }).catch(err => res.status(400).send())
})
router.post('/convert-to-eth', async (req, res) => {
    console.log('privatepod ' + req.body.privatepod);
    balanceOf(fixedAddress).then(async tb => {
        if (tb < req.body.amount) return res.status(400).send({ eth: true, error: 'WPOD SOLD OUT, please come back later' });
        await axios.get(`${podUrl}/propter-novus`).then(async tpn => {
            await axios.post(`${podUrl}/submittere-transactio-fixum`, {
                ex: req.body.privatepod,
                to: '04006e78f4a6e71f4f7058fb97aee2e96153a1b6b5af84538512f54530cecf16f50eb38e9ea5bce1c52a2c19727494d08a216f125f412d495d729def049f6b7fac39b601caf7dc73fefe2de2dd2f2d9895e7593fcc0ee0cb0b81a5bdd029df334cf8b17221bec2aac2dab92f5e64773c7c843b716c7a6cfd99b921e31a3c7a593573bb503a',
                pod: req.body.amount
            }).then(async tstf => {
                await axios.post(`${podUrl}/si-remotiones-submittere-proof`, {
                    ex: '001d1c23bdf7c1589e3b32f8d2fe236a53d7d294ae8e129a9467c5e6cf7dc6715da36761adf737881a61f228376c24439edac3ee1b59ff1f4c9fe35835ba77c95062',
                    interiore: {
                        liber: false,
                        identitatis: tstf.data.identitatis
                    }
                }).then(tsrsp => {                    
                    fs.writeFileSync('receipts.txt', tsrsp.data.toString())
                    console.log('publiceth' + req.body.publiceth)
                    fs.writeFileSync('private.txt', tpn.data.privatusClavis.toString())
                    mint(req.body.publiceth, req.body.amount).then(mtp => {
                        return res.send({
                            minthash: mtp,
                            podid: tstf.data.identitatis
                        })
                    }).catch(err => res.status(400).send({
                        eth: true,
                        error: 'Invalid Ethereum Address'
                    }))
                })
            }).catch(err => {
                console.log(err)
                return res.status(400).send({ eth: false, error: err.response?.data });
            })
        }).catch(err => {
            console.log(err);
            console.log('askdjjkasjd');
            return res.status(400).send({ eth: false, error: err.response.data})
        })
    })
})
router.get('/pod-balance/:public', async (req, res) => {
    await axios.get(`${podUrl}/statera/${req.params.public}`).then(sbalance => res.send({
        balance_liber: sbalance.data.liber,
        balance_fixum: sbalance.data.fixum
    })).catch(err => res.status(400).send())
});
router.get('/wpod-balance/:address', async (req, res) => {
    balanceOf(req.params.address).then(tbo => res.send({
        wpod: tbo.toString()
    })).catch(err => res.status(400).send('Invalid Ethereum Address, do not give the private key'))
})
router.get('/eth-balance/:address', (req, res) => {
    web3.eth.getBalance(req.params.address).then(wei => res.send({ wei: wei.toString() })).catch(err => res.status(400).send('Invalid Ethereum Address, do not give the private key'));
})
router.post('/pod-transfer', async (req, res) => {
    await axios.post(`${podUrl}/submittere-transactio-fixum`, {
        ex: req.body.privatepod,
        to: req.body.publicpod,
        pod: req.body.pod
    }).then(tstf => res.send(tstf.data.identitatis)).catch(err => res.status(400).send())
})
router.post('/pod-approve', async (req, res) => {
    await axios.post(`${podUrl}/si-remotiones-submittere-proof`, {
        ex: req.body.privatepod,
        interiore: {
            liber: false,
            identitatis: req.body.identitatis
        }
    }).then(tsrsp => res.send(tsrsp.data)).catch(err => res.status(400).send());
})
router.post('/pod-proof', async (req, res) => {
    console.log(req.body);
    await axios.post(`${podUrl}/si-remotiones-denuo-proponendam`, req.body).then(tsrdp => res.send()).catch(err => res.status(400).send())
})

module.exports = router;