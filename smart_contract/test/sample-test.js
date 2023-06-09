const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transactions", function () {
  it("Should return the new transactions once it's changed", async function () {
    const Transactions = await ethers.getContractFactory("Transactions");
    const transactions = await Transactions.deploy("Hello, world!");
    await transactions.deployed();

    expect(await transactions.greet()).to.equal("Hello, world!");

    const setGreetingTx = await transactions.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await transactions.greet()).to.equal("Hola, mundo!");
  });
});
