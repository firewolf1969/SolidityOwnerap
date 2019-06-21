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
    beforeEach('changeMinApproval setup', async () => {
        ownerap = await Ownerap.new()
    });

    describe('changeMinApproval.test', function () {
        it('minApproval <= quantOwner', async () => {
            await ownerap.doApproval();
            await truffleAssert.reverts(ownerap.changeMinApproval(2, { from: owner1 }), 'minApproval must be equal or greater than quantOwner')
        });

        it('minApproval changed', async () => {
            await ownerap.doApproval();
            await ownerap.changeMinApproval(0, { from: owner1 });
            let minApproval = await ownerap.minApproval();
            assert.equal(minApproval, 0);
        });
    });


});