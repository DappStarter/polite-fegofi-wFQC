require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan rebel night unknown grid end army giggle'; 
let testAccounts = [
"0x4ceaa4faf16af87c24f80d418b3ab7d33e9ea1354b1013ab8ef10ea36a652c81",
"0x33530c0a25a259d26001d553649d0bf01fc788d6cb103fa2627826c82eed58a9",
"0x845acd548df1b3c7cbda075b8945dcafe652527852bba1db3123538af738d28b",
"0x60347da45992161389fdd2bad060def63d9f0563a082dad029d9345741e3491c",
"0x38c2c764ff7090c51d3ac4b18f2c2db40e08edb44594b1b9b64d407572d20469",
"0x5dcafb23db4356d2c7adbba70ccbc5b39b4b025223779ebb7124cd1cb42a5156",
"0xe15a423ecca5953e5fe30ccf972eb277463e59956e74dc1d3de0caa4d613c10c",
"0x311e28206a25859f00ef5c5a434a165a1fee7b337faba6913a2adf861c7efda4",
"0xec1b33eea6b94673008b6aafb2a60d996f7e3d2d39030c566f6562c5f6a5c85e",
"0x11bcb71cf04d848eda488aaa8b31421b9c2372d60ef935d693998f920ccbb8a0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

