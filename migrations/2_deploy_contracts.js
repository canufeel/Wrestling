const helloworld = artifacts.require("./helloworld.sol");
const Wrestling = artifacts.require("./Wrestling.sol");

module.exports = function (deployer) 
{
    deployer.deploy (helloworld);
};

module.exports = function(deployer)
{    
    deployer.deploy(Wrestling);   
};
