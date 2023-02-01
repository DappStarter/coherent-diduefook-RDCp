require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remain minor good private flower term'; 
let testAccounts = [
"0xc42d2faf3e06b1d73114d6bafe83923d18f98799acf26843c7e540a8d980fe15",
"0xf52743466e752ccfc5e024ad78e39faec193444b7043deb431de004cb11edf2a",
"0xc70bccb7c46b353cc4104273bfb15e5ecf15215a7c90cf2a3745178798dd373f",
"0xe2749a4c23d710354c7700f6c7a18a63f54233929a58d4c98b59d5cf950f2e92",
"0x075cfc9afe635d5e7082a77e6c3a7eb5d20c7b9f6eeafae7c037457d6903b4ad",
"0x25ade04c54ab98fa41c937bc7630efbfab3b7e1a3f83c9e11dea3c4469706220",
"0xd5ece55de55343dd3a6ade07f5278841309a0d88f13d9921667fc28953e19503",
"0xfcc307bc3a4b52de2eb8db44bdc284ce730aba39e80ab41b2e4bb7b482f66eec",
"0x3e27afd4419637fa2de3ef6fb18cf74c8701089235e7ec0df35b93ac7e7a2223",
"0x4fa60fce1278910b2124eced3d60729f9199f04b165ddcfc948617e719dc813d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

