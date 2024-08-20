const getEnv = (key: string, defaultValue?: string) => {
  const value = process.env[key] || defaultValue;

  if (value === undefined) {
    throw new Error(`Missing enviorment variable ${key}`);
  }

  return value;
};

export const MONGO_URI = getEnv("MONGO_URI");
