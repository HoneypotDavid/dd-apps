import { expect } from 'chai';
import hre, { ethers } from 'hardhat';

describe('Token contract', function () {
  async function deployContract() {
    const Token = await hre.ethers.getContractFactory('Token');
    const hardhatToken = await Token.deploy();
    return hardhatToken;
  }

  it('Deployment should assign the total supply of tokens to the owner', async function () {
    const [owner] = await hre.ethers.getSigners();
    const token = await deployContract();
    const ownerBalance = await token.balanceOf(owner.getAddress());
    console.log('ownerBalance', ownerBalance);
    expect(await token.totalSupply()).to.equal(ownerBalance);
  });

  it('Should transfer tokens between accounts', async function () {
    const [owner, addr1, addr2] = await ethers.getSigners();

    const token = await deployContract();

    // Transfer 50 tokens from owner to addr1
    await token.transfer(await addr1.getAddress(), 50);
    expect(await token.balanceOf(await addr1.getAddress())).to.equal(50);

    // Transfer 50 tokens from addr1 to addr2
    await token.connect(addr1).transfer(await addr2.getAddress(), 50);
    expect(await token.balanceOf(await addr2.getAddress())).to.equal(50);

    expect(await token.balanceOf(await addr1.getAddress())).to.equal(0);
  });
});
