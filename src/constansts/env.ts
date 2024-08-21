const getEnv = (key: string, defaultValue?: string) => {
  const value = process.env[key] || defaultValue;

  if (value === undefined) {
    throw new Error(`Missing enviorment variable ${key}`);
  }

  return value;
};

export const MONGO_URI = getEnv("MONGO_URI");
export const PORT = getEnv("PORT");
export const MONGO_USER = getEnv("MONGO_URI_USER");
export const MONGO_ADMIN = getEnv("MONGO_URI_ADMIN");
export const MONGO_SUPE = getEnv("MOURI_SUPE");
