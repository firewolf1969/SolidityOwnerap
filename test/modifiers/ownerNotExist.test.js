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
    let ownerap
    beforeEach('ownerNotExist.test setup', async () => {
        ownerap = await Ownerap.new()
    });
    describe('ownerNotExist.test', function () {
        it('owner not exists', async () => {
            await ownerap.doApproval();
            await truffleAssert.reverts(ownerap.delOwner(nonowner1, { from: owner1 }), 'owner not exists')
        });
    });
});