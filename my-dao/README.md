# Sample Hardhat Project 2024

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

# comandos para testar a blockchain local

- iniciar a blockchain local:
  "npx hardhat node"

- em outro terminal acessando a pasta da aplicação "pois irei rodar o script de deploy" e ublicar na blockchain local posso utilizar parametro para publicar externamente tambem.
  "npx hardhat run scripts/deploy.js --network localhost"
