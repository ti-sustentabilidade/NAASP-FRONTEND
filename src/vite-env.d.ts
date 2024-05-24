/// <reference types="vite/client" />

declare const ENV_VERSION: string

interface ImportMetaEnv {
  readonly VITE_ENV_NAASP_BACKEND_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
