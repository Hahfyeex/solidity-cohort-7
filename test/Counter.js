const {loadFixture} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");

const { expect } = require("chai");

// util deploy function

const deployCounter = async ()=>{
    
    // Contracts are deployed using the first signer/account by default
        // const [owner, otherAccount] = await ethers.getSigners();

        const CounterContract = await ethers.getContractFactory("Counter");
        const counter = await CounterContract.deploy(); //deploy the contract

        return counter; //return the deployed instances of our counter contract
}  

describe("counter test suit", ()=>{
    describe("Deployment", ()=>{
        it("Should return default values upon deployment", async()=>{
            const counter = await loadFixture(deployCounter); //load the fixture to deploy the contract
            expect(await counter.getCount()).to.equals(0); // assert that counter = 0 upon deployment
            // console.log("Counter here: ___", counter);
        })
    })

describe ("Transactions", () => {
    
    it("Should set appropriate count values in mutiple instance", async () =>{
                const counter = await loadFixture(deployCounter); //extract deployed contract instance
                
                let count1 = await counter.getCount();
                expect(count1).to.eq(0);
                await counter.setCount(10);

                let count2 = await counter.getCount();
                expect(count2).to.eq(10);
                await counter.setCount(5);

                let count3 = await counter.getCount();
                expect(count3).to.eq(5);
                await counter.setCount(15);

                let count4 = await counter.getCount()
                expect(count4).to.eq(15);
            })

    
})
describe ("increaseCountByOne", () => {
    
    it("Should add counter by one", async () =>{
                const counter = await loadFixture(deployCounter); //extract deployed contract instance
                
                let count1 = await counter.getCount();
                expect(count1).to.eq(0);
                await counter.increaseCountByOne();

                let count2 = await counter.getCount();
                expect(count2).to.eq(1);
                await counter.increaseCountByOne();

                let count3 = await counter.getCount();
                expect(count3).to.eq(2);
                await counter.increaseCountByOne();

                let count4 = await counter.getCount()
                expect(count4).to.eq(3);
            })

    
})


})