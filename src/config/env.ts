interface RuntimeEnv {
  SPOTIFY_CLIENT_ID: string;
  SPOTIFY_CLIENT_SECRET: string;
}

function createEnv(): RuntimeEnv {
  const config: Partial<RuntimeEnv> = {
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
  };

  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Environment variable ${key} is not defined.`);
    }
  }

  return config as RuntimeEnv;
}

export const runtimeEnv = createEnv();
