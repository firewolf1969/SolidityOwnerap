const truffleAssert = require('truffle-assertions');
const Ownerap = artifacts.require('Ownerap');
const {
    decimals,
    ether,
    addressZero,
    owner1,
    owner2,
    owner3,
    owner4,
    owner5,
    nonowner1,
    nonowner2,
    info1,
    info2
} = require('../dataTest');

contract('Ownerap', function () {
    let ownerap;
    let isOwner;
    beforeEach('addOwner.test setup', async () => {
        ownerap = await Ownerap.new();
        await ownerap.doApproval();
        await ownerap.addOwner(owner2);
        isOwner = await ownerap.owner(owner2);
    });
    describe('addOwner.test', function () {
        it('owner added to mapping', async () => {
            assert.equal(isOwner, true);
        });
        it('quant owner incremented', async () => {
            let qtdOwner = await ownerap.quantOwner();
            assert.equal(qtdOwner, 2);
        });
    });
});

