
// Open truffle console like this:
truffle console --network development

// Enter into the console one command (line) at a time.
account0 = web3.eth.accounts[0]
account1 = web3.eth.accounts[1]

Wrestling.deployed().then(inst => { WrestlingInstance = inst })

WrestlingInstance.wrestler1.call()

WrestlingInstance.registerAsAnOpponent({from: account1})

WrestlingInstance.wrestler2.call()

WrestlingInstance.wrestle({from: account0, value: web3.toWei(2, "ether")})
WrestlingInstance.wrestle({from: account1, value: web3.toWei(3, "ether")})
// End of the first round
WrestlingInstance.wrestle({from: account0, value: web3.toWei(5, "ether")})
WrestlingInstance.wrestle({from: account1, value: web3.toWei(20, "ether")})
// End of the wrestling