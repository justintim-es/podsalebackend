// = == = = == = == = 
const express = require('express');
const router = express.Router();
const { Web3 } = require('web3');
const web3 = new Web3('http://localhost:8545')
const { back, backGas, sell, sellGas, backed, register_shop, register_shop_refered, price, isrefered } = require('../contracts/fixed');
const { balanceOf, approveGas, approve, allowance, transfer, transferGas } = require('../contracts/wpod');
const { gasprice, fixedaddress } = require('../constants');
const { register_referer, isreferer, create_discountcode, discountcost, referers_length } = require('../contracts/refer');
router.get('/private', (req, res) => {
    const acc = web3.eth.accounts.create();
    return res.send({ private: acc.privateKey, address: acc.address });
})
router.post('/ilovet', (req, res) => {
    console.log(req.body);
    return res.send(req.body);
})
router.get('/info/:private', (req, res) => {
    const info = web3.eth.accounts.privateKeyToAccount(req.params.private)
    web3.eth.getBalance(info.address).then(balancer => {
        backed(info.address).then(tb => {
            balanceOf(info.address).then(wpod => {
                isreferer(info.address).then(tir => {
                    return res.send({ address: info.address, balance: balancer.toString(), wpod: wpod.toString(), backed: tb.toString(), isreferer: tir });
                }).catch(err => {
                    console.log(err);
                    return res.status(400).send();
                })
            }).catch(err => {
                console.log(err);
                return res.status(400).send();
            })
        })
    }).catch(err => {
        console.log(err);
        return res.status(400).send();
    })
});
router.post('/mint', (req, res) => {
    const info = web3.eth.accounts.privateKeyToAccount(req.body.private)
    web3.eth.getBalance(info.address).then(tb => {
        if(tb < req.body.amount) return res.status(400).send("Insufficient ETH"); 
        balanceOf(fixedaddress).then(tbo => {
            if (BigInt(req.body.amount) / BigInt('50000000000') > tbo) return res.status(400).send('Insufficient WPOD available');
            backGas(req.body.private, req.body.amount).then(gas => {
                back(req.body.private, req.body.amount, gas).then(b => res.send(b)).catch(err => {
                    console.log(err);
                    return res.status(400).send();
                });
            }).catch(err => {
                console.log(err);
                return res.status(400).send(err.innerError.message)
            }).catch(err => {
                console.log(err);
                return res.status(400).send(err.innerError.message)
            })    
        }).catch(err => {
            console.log(err);
            return res.status(400).send(err.innerError.message)
        })       
    }).catch(err => {
        console.log(err);
        return res.status(400).send(err.innerError.message)
    }).catch(err => {
        console.log(err);
        return res.status(400).send(err.innerError.message)
    })
})
router.post('/refer-buy', (req, res) => {
    const info = web3.eth.accounts.privateKeyToAccount(req.body.private);
    isrefered(info.address)
})
router.post('/sell', (req, res) => {
    const info = web3.eth.accounts.privateKeyToAccount(req.body.private);
    allowance(info.address).then(ta => {
        if (BigInt(req.body.amount) > ta) return res.status(400).send({ message: `First approve our contract to spend more than: ${req.body.amount} on your behalf, current allowance: ${ta}`, formcontrol: 'amountf', code: 4 })
        balanceOf(info.address).then(tbo => {
            if (tbo < req.body.amount) return res.status(400).send({ message: 'Insufficient WPOD funds', formcontrol: 'privatekeyf', code: 0 });
            web3.eth.getGasPrice().then(tggp => {
                web3.eth.getBalance(info.address).then(tgb => {
                    price().then(tp => {
                        sellGas(req.body.private, req.body.amount).then(gas => {
                            const txfee = tggp * gas;
                            const cashout = BigInt(req.body.amount / 1000000000000000000) * BigInt(tp);
                            if ((txfee) >= cashout) return res.status(400).send({ message: `Transaction fee of ${txfee} WEI is greater than cashout of ${cashout} WEI`, formcontrol: 'amountf', code: 1 });
                            if (tggp > tgb) return res.status(400).send({ message: 'Insufficient ETH funds', formcontrol: 'privatekeyf', code: 2 })
                            sell(req.body.private, req.body.amount, gas).then(b => res.send(b)).catch(err => {
                                console.log(err);
                                return res.status(400).send();
                            }) 
                        }).catch(err => {
                            console.log(err);
                            return res.status(400).send()
                        })
                    })
                })
            })
        })
    })
})
router.post('/transfer-wpod', (req, res) => {
    const info = web3.eth.accounts.privateKeyToAccount(req.body.private);
    console.log(info);
    web3.eth.getBalance(info.address).then(tgb => {
        balanceOf(info.address).then(tbo => {
            if (tbo < BigInt(req.body.amount)) return res.status(400).send({ code: 0, message: `Insufficient WPOD, current balance ${tbo}`, formcontrol: 'amountf'});
            transferGas(req.body.private, info.address, req.body.amount).then(ttg => {
                console.log('gothere');
                const fee = ttg * gasprice;
                if (fee > tgb) return res.status(400).send({ code: 0, message: `Insufficient ETH, to pay for the transaction fee of ${fee} WEI`, formcontrol: 'privatekeyf' });
                    transfer(req.body.private, info.address, req.body.addresseth, req.body.amount).then(tt => res.send(tt)).catch(err => {
                        console.log(err);
                        return res.status(400).send(err.innerError.message);
                    })
            }).catch(err => {
                console.log(err);
                return res.status(400).send(err.innerError.message);
            });
        }).catch(err => {
            console.log(err);
            return res.status(400).send(err.innerError.message);
        })
    }).catch(err => {
        console.log(err);
        return res.status(400).send(err.innerError.message);
    });
})
router.post('/approve', (req, res) => {
    const info = web3.eth.accounts.privateKeyToAccount(req.body.private);
    web3.eth.getBalance(info.address).then(tgb => {
        balanceOf(info.address).then(tbo => {
            web3.eth.getGasPrice().then(tggp => {
                sellGas(req.body.private, req.body.amount).then(tsg => {
                    approveGas(req.body.private, req.body.amount).then(gas => {
                        price().then(tp => {
                            const txfee = gas * tggp;
                            const cashout = BigInt(req.body.amount / 1000000000000000000) * BigInt(tp); 
                            if ((txfee) >= cashout) return res.status(400).send({ message: `Transaction fee of ${txfee} WEI would be greater then cashout of ${cashout} WEI for selling WPOD`, formcontrol: 'amountf', code: 1 });
                            if (tgb < txfee) return res.status(400).send({ message: `Insufficient Ethereum funds, current balance ${tgb} WEI`, formcontrol: 'privatekeyf', code: 2 });
                            approve(req.body.private, req.body.amount, gas).then(a => res.send(a)).catch(err => {
                                console.log(err)
                                return res.status(400).send(err.innerError.message)
                            }).catch(err => {
                                console.log(err);
                                return res.status(400).send(err.innerError.message);
                            });        
                        })
                    }).catch(err => {
                        console.log(err);
                        return res.status(400).send();
                    })        
                })
            })
        })
    })

});
router.post('/register', (req, res) => {
    try {
        console.log(req.body)
        register_shop(req.body.private, req.body.addressone + ':' + req.body.addresstwo, req.body.phonenumber).then(trs => res.send(trs)).catch(err => {
            console.log(err);
            return res.status(400).send('Insufficient ETH to pay for the transaction fee');
        })
    } catch (err) {
        return res.status(400).send('Invalid private ETH key')
    }
})
router.post('/register-referer', (req, res) => {
    console.log('fzo');
    const info = web3.eth.accounts.privateKeyToAccount(req.body.private);
    register_referer(req.body.private).then(trr => res.send(trr)).catch(err => {
        console.log(err);
        switch (err.innerError?.message) {
            case "execution reverted: The costs of becoming a referer are 500000000000000 WEI times the amount of referers": return res.status(400).send({ code: 0, message: err.innerError.message, formcontrol: 'privatekeyf'});
            case "execution reverted: You already are a referer": return res.status(400).send({ code: 1, message: err.innerError.message, formcontrol: 'privatekeyf'});
            default: {
                return res.status(400).send(err);
            }
        }
    }); 
})
router.post('/register-shop-referer', (req, res) => {
    register_shop_refered(req.body.private, req.body.referer, req.body.addressone + ":" + req.body.addresstwo, req.body.phonenumber).then(trs => res.send(trs)).catch(err => {
        console.log(err);
        switch (err.innerError?.message) {
            case "execution reverted: Shop is already registered": return res.status(400).send({ code: 0, message: err.innerError.message, formcontrol: 'privateethf' });
            case "execution reverted: Address is already registered": return res.status(400).send({ code: 1, message: err.innerError.message, formcontrol: 'addressonef' });
            case "execution reverted: Phonenumber is already registered": return res.status(400).send({ code: 2, message: err.innerError.message, formcontrol: 'phonenumberf' });
            case "execution reverted: The address of the referer is not a referer": return res.status(400).send({ code: 3, message: err.innerError.message, formcontrol: 'undefined' });
            default: return res.status(400).send({ code: 4, message: err.innerError.message });
        }
    });
})
router.post('/create-discountcode', (req, res) => {
    console.log(req.body.private);
    const info = web3.eth.accounts.privateKeyToAccount(req.body.private);
    discountcost().then(tdc => {
        referers_length().then(trl => {
            const value = tdc * (trl + BigInt(1));
            create_discountcode(req.body.private, info.address, req.body.consumer, value, web3.utils.randomHex(32)).then(tcr => {
                return res.send(tcr);
            }).catch(err => {
                console.log(err);
                return res.status(400).send(err.innerError.message);
            })
        })
    })

})

module.exports = router;    