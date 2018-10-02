var Wrestling = artifacts.require("Wrestling");

const { revert: EVMrevert } = require('truffle-test-helpers');

require('chai')
  .use(require('chai-as-promised'))
  .should();

contract ('Wrestling', function (accounts)
{
    it("Simulating wrestling game ().wrestle())", async function() {
      const account0 = accounts[0];
      const account1 = accounts[1];

      const WrestlingInstance = await Wrestling.new({ from: account0 });

      await WrestlingInstance.registerAsAnOpponent({
        from: account1
      });

      await WrestlingInstance.wrestle({
        from: account0,
        value: web3.toWei(5, "ether")
      });

      await WrestlingInstance.wrestle({
        from: account1,
        value: web3.toWei(10, "ether")
      });

      await WrestlingInstance.withdraw({
        from: account1
      }).should.be.fulfilled;
    });

  it("Simulating wrestling game ().wrestle()) failure", async function() {
    const account0 = accounts[0];
    const account1 = accounts[1];

    const WrestlingInstance = await Wrestling.new({ from: account0 });

    await WrestlingInstance.registerAsAnOpponent({
      from: account1
    });

    await WrestlingInstance.wrestle({
      from: account0,
      value: web3.toWei(5, "ether")
    });

    await WrestlingInstance.wrestle({
      from: account1,
      value: web3.toWei(10, "ether")
    });

    await WrestlingInstance.withdraw({
      from: account0
    }).should.be.rejectedWith(EVMrevert);
  });
});
