var WbToken = artifacts.require("WbToken");

module.exports = function(deployer) {
  deployer.deploy(WbToken);
};
