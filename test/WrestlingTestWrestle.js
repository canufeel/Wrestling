var Wrestling = artifacts.require("Wrestling");

contract ('Wrestling', function (accounts)
{
    it("Simulating wrestling game ().wrestle())", () => {
        

        // Assigning a reference to the instance of the contract that truffle deployed
        // to a variable WrestlingInstance
        Wrestling.deployed().then(inst => {
            WrestlingInstance = inst;

            // Getting the addresses for accounts we will use and assigning them to variables
            var account0 = web3.eth.accounts[0];
            var account1 = web3.eth.accounts[1];

            // It will return the address of the wrestler1, in our case it was the first account.
            WrestlingInstance.wrestler1.call();

            // Registering the second account as an opponent. It will fire "WrestlingStartsEvent"
            WrestlingInstance.registerAsAnOpponent({from: account1});

            // Retrieving the address of the second wrestler
            WrestlingInstance.wrestler2.call();

            // Now, the wrestling! wrestler1 bet: sends 5 ether
            WrestlingInstance.wrestle({from: account0, value: web3.toWei(5, "ether")});
            // wrestler2 bet: sends 10 ether
            WrestlingInstance.wrestle({from: account1, value: web3.toWei(10, "ether")});
            
            // Making sure only the winner can withdraw ETH
            WrestlingInstance.withdraw({from: account1});
            })
        })
    });
