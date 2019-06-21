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
    beforeEach('onlyApproved.test setup', async () => {
        ownerap = await Ownerap.new()
    });

    describe('onlyApproved.test', function () {
        it('Approvals less than minimum', async () => {
            await truffleAssert.reverts(ownerap.changeMinApproval(0, { from: owner1 }), 'current approvals is less then minimum')
        });
    });
});