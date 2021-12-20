import sdk from "./1-initialize-sdk.js";
import dotenv from "dotenv";
dotenv.config();

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule(process.env.APP_CONTRACT);

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "MemeDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "MDOG",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();
