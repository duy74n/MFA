import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { mfConfig } from "./module-federation.config";

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3002,
  },
  moduleFederation: {
    options: mfConfig,
  },
});
