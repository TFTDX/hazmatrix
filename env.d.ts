/// <reference types="vite/client" />

// File to define types of env variables defined in the .env file
// By doing this, your source files will get type information for env variables.
// Location of this file is defined in tsconfig.json

interface ImportMetaEnv {
  // Allows user to set VITE_API_URL in a .env file and use `oof.setBaseUrl(import.meta.env.VITE_API_URL);` in main.ts
  readonly VITE_API_URL: string;

  // Add more env variables as needed...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Add type declaration for global constants that are set using the `define` prop in vite.config.ts
// E.g. `__vite_inject.buildTime`
declare const __vite_inject: {
  readonly buildTime: string;
  readonly commitHash: string;
  readonly gitBranch: string;
  readonly CNAME: string;
};
