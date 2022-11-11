declare global {
  namespace NodeJS {
    interface ProcessEnv {
      STAGE: 'develop' | 'release';
      NODE_ENV_API: string;
    }
  }
}

export {};
