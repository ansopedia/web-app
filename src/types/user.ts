import { z } from 'zod';

const userSchema = z.object({
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
  isVerified: z.boolean().default(false),
  fullName: z.string(),
  phoneNumber: z.string(),
  dob: z.date(),
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

export const addressSchema = z.object({
  countryName: z.string(),
  countryCode: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
});

export const profileSchema = userSchema.pick({
  fullName: true,
  email: true,
  phoneNumber: true,
  dob: true,
});

export const educationSchema = z.object({
  schoolName: z.string(),
  degree: z.string(),
  fieldOfStudy: z.string(),
  grade: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  description: z.string(),
});

export const experienceSchema = z.object({
  companyName: z.string(),
  jobTitle: z.string(),
  location: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  description: z.string(),
});

export const skillSchema = z.object({
  skillName: z.string(),
  skillLevel: z.number(),
});

export const projectSchema = z.object({
  projectName: z.string(),
  projectUrl: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  description: z.string(),
});

export const socialMediaSchema = z.object({
  socialName: z.string(),
  socialUrl: z.string(),
});

export const certificationSchema = z.object({
  certificationName: z.string(),
  certificationUrl: z.string(),
  issueDate: z.date(),
  expirationDate: z.date(),
});

export const languageSchema = z.object({
  languageName: z.string(),
  languageLevel: z.number(),
});

export const interestSchema = z.object({
  interestName: z.string(),
});

export type CreateUser = z.infer<typeof createUserSchema>;
export type Login = z.infer<typeof loginSchema>;
export type User = z.infer<typeof userSchema>;
export type Address = z.infer<typeof addressSchema>;
export type Profile = z.infer<typeof profileSchema>;
export type Education = z.infer<typeof educationSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Skill = z.infer<typeof skillSchema>;
export type Project = z.infer<typeof projectSchema>;
export type SocialMedia = z.infer<typeof socialMediaSchema>;
export type Certification = z.infer<typeof certificationSchema>;
export type Language = z.infer<typeof languageSchema>;
export type Interest = z.infer<typeof interestSchema>;
