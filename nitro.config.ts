import { defineNitroConfig } from "nitro/config";

const isVercelBuild = process.env.VERCEL === "1" || process.env.VERCEL === "true";

export default defineNitroConfig({
  preset: process.env.NITRO_PRESET ?? (isVercelBuild ? "vercel" : "node_server"),
});
