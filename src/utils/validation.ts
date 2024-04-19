import { z } from 'zod';

export const userSchema = z.object({
  id: z.string().uuid(),
  username: z
    .string()
    .min(3, 'username must be at least 3 characters')
    .max(18, 'username must be at most 18 characters')
    .regex(/^[a-z]/i, 'username must start with a letter')
    .regex(/^[a-z0-9]*$/i, 'username can only contain alphanumeric characters')
    .transform((val) => val.toLowerCase().trim()),
  email: z.string().email().trim().toLowerCase(),
  password: z.string().min(8, 'password must be at least 8 characters'),
  isDeleted: z.boolean().default(false),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const loginSchema = userSchema.pick({ email: true, password: true });

export const createUserSchema = userSchema
  .pick({ email: true, password: true, username: true, confirmPassword: true })
  .extend({
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Confirm password does not match password',
    path: ['confirmPassword'],
  });

export const forgotPasswordSchema = userSchema.pick({ email: true });

export const resetPasswordSchema = z.object({
  password: z.string().min(8, 'password must be at least 8 characters'),
  confirmPassword: z.string(),
});

export type ResetPassword = z.infer<typeof resetPasswordSchema>;
export type ForgotPassword = z.infer<typeof forgotPasswordSchema>;

export type CreateUser = z.infer<typeof createUserSchema>;
export type Login = z.infer<typeof loginSchema>;
export type User = z.infer<typeof userSchema>;
