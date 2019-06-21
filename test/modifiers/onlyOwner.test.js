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
    beforeEach('onlyOwner.test setup', async () => {
        ownerap = await Ownerap.new()
    });

    describe('onlyOwner.test', function () {
        it('address must be owner', async () => {
            await truffleAssert.reverts(ownerap.doApproval({ from: nonowner1 }), 'address must be owner')
        })
    });
});