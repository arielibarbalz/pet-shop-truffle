module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (no usar "localhost")
      port: 8545,            // Puerto estándar de Ganache
      network_id: "*",       // ID específico de Ganache (no usar "*")
      gas: 6721975,           // Límite de gas
      gasPrice: 20000000000,  // 20 gwei
      // from: "0xE5cf3cb65a9e4293B97eA5eB794Ed96D2b3DA3C7" // La cuenta que viste en migrate
    }
  },
  compilers: {
    solc: {
      version: "0.8.18",      // Versión específica
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};