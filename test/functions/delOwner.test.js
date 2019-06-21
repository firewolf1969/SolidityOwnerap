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
    beforeEach('delOwner.test setup', async () => {
        ownerap = await Ownerap.new();
        await ownerap.doApproval();
        await ownerap.addOwner(owner2);
    });
    describe('delOwner.test', function () {
        it('can delete another owner', async () => {
            await ownerap.doApproval();
            await ownerap.delOwner(owner2);
            let isOwner = await ownerap.owner(owner2);
            let qtdOwner = await ownerap.quantOwner();
            assert.equal(isOwner, false);
            assert.equal(qtdOwner, 1);
        });
    });
});

