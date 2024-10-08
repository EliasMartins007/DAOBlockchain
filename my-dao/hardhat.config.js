require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0", // Certifique-se de que esta versão seja a mesma que no seu contrato .sol
  networks: {
    hardhat: {
    },
    localhost: {
      url: "http://127.0.0.1:8545", // Configuração para rodar localmente
    },
  },
};