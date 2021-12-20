import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";
import dotenv from "dotenv";
dotenv.config();

const bundleDrop = sdk.getBundleDropModule(process.env.NFT_CONTRACT);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "I am meme lover",
        description: "This NFT will give you access to MemeDAO!",
        image: readFileSync("scripts/assets/memelover.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
