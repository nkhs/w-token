const HDWalletProvider = require('truffle-hdwallet-provider');
require('dotenv').config();
const {MNEMONIC, INFURA_KEY} = process.env;

module.exports = {
    networks: {
        goerli: {
            provider: function () {
                return new HDWalletProvider(MNEMONIC, `https://goerli.infura.io/v3/${INFURA_KEY}`);
            },
            network_id: 5,
            gas: 4500000,
            gasPrice: 20000000000
        }
    },
    compilers: {
        solc: {
            version: '0.8.0' // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            // settings: {          // See the solidity docs for advice about optimization and evmVersion
            //  optimizer: {
            //    enabled: false,
            //    runs: 200
            //  },
            //  evmVersion: "byzantium"
            // }
        }
    }
};
