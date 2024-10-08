async function main() {
  //teste 08/10
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);


  // Obtém a fábrica de contratos
  const DAO = await ethers.getContractFactory("DAO");
  console.log("Contract factory fetched")

   // Implanta o contrato
  const dao = await DAO.deploy();
  console.log("Deploy transaction sent, waiting for deployment...");

  // Aguarda o contrato ser implantado
  await dao.deployed();
  console.log("DAO deployed to:", dao.address);


}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
