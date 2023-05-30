// https://eth-ropsten.alchemyapi.io/v2/YUV1EenpWjdZwwIi2Kk_ZY_0K8M7nquh

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks:{
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/YUV1EenpWjdZwwIi2Kk_ZY_0K8M7nquh',
      accounts: ['dde4b5aab5a0b8cedd9d491ced499afe80223d176b311d1cbee03be680d8e8ed']
    }
  }
}