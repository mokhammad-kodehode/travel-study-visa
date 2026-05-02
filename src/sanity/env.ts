const assertEnv = (key: string, value: string | undefined): string => {
  if (!value) throw new Error(`Missing env variable: ${key}`);
  return value;
};

export const projectId = assertEnv(
  'NEXT_PUBLIC_SANITY_PROJECT_ID',
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
);

export const dataset = assertEnv(
  'NEXT_PUBLIC_SANITY_DATASET',
  process.env.NEXT_PUBLIC_SANITY_DATASET,
);

export const apiVersion = '2024-12-01';
