/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEMO_PLAN_ID_BASIC: string
  readonly VITE_DEMO_PLAN_ID_PRO: string
  readonly VITE_DEMO_PLAN_ID_ENTERPRISE: string
  readonly VITE_RPC_URL?: string
  readonly VITE_REFERRAL_ADDRESS?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
