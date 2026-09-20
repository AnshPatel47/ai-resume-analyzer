import { z } from "zod";

export const registerSchema = z.object({
    fullName: z.string().min(2).max(50).regex(/^[a-zA-Z\s]+$/),
    username: z.string().min(3).max(20).regex(/^[a-zA-Z0-9_]+$/),
    email: z.string().email(),
    password: z.string().min(8).regex(/[A-Za-z]/).regex(/[0-9]/),
});

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
});
