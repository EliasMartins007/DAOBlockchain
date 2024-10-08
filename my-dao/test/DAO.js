const { expect } = require("chai");

describe("DAO", function () {
  it("Deve permitir que membros se juntem à DAO", async function () {
    const [owner, addr1] = await ethers.getSigners();
    const DAO = await ethers.getContractFactory("DAO");
    const dao = await DAO.deploy();

    await dao.deployed();

    await dao.joinDAO();
    expect(await dao.members(owner.address)).to.equal(true);
  });

  // Outros testes podem ser adicionados aqui
});
