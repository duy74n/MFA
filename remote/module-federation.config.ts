import { dependencies } from "./package.json";
import type { Rspack } from "@rsbuild/core";

export const mfConfig: Rspack.ModuleFederationPluginOptions = {
  name: "remote",
  exposes: {
    "./Button": "./src/Button",
    "./RemoteCss": "./src/App.css",
    "./RemoteStore": "./src/store", // Shared store between host and remote for showcase, not recommended in real application
  },
  filename: "remoteEntry.js",
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
