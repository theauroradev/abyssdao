require("@nomiclabs/hardhat-waffle");
module.exports = {
  networks: {
    "Findora Forge": {
      url: "https://rpc.meter.io/",
      chainId: 82,
      timeout: 70000,
    },
  },
  solidity: "0.7.5",
};
