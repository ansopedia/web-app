'use server';

import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().readonly(),
});

const validEnv = envSchema.safeParse(process.env);

if (!validEnv.success) {
  throw new Error(validEnv.error.message);
}

export const envConstants = async () => validEnv.data;
