import "next";

declare module "next" {
  interface ExperimentalConfig {
    turbo?: {
      /** Project root path for the turbo feature */
      root?: string;
      /** Allow additional properties without TypeScript errors */
      [key: string]: any;
    };

    turbopack?: {
      /** Project root path for the turbopack feature */
      root?: string;
      /** Allow additional properties without TypeScript errors */
      [key: string]: any;
    };
  }

  interface NextConfig {
    turbopack?: {
      /** Project root path for the turbopack feature */
      root?: string;
      /** Allow additional properties without TypeScript errors */
      [key: string]: any;
    };
  }
}
