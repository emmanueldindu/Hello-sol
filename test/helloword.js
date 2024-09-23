const { expect } = require("chai");

describe("HelloWorld contract", function () {
  it("Should return the correct greeting message", async function () {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = await HelloWorld.deploy(); // Deploys the contract
    // await hello.deployed(); // This line is not needed

    expect(await hello.greet()).to.equal("hello from odoi");
  });
});
