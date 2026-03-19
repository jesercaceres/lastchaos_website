import { z } from 'zod';

export const loginSchema = z.object({
    userId: z.string().min(1, 'O nome de utilizador é obrigatório.'),
    passwd: z.string().min(1, 'A palavra-passe é obrigatória.')
});

export type LoginDto = z.infer<typeof loginSchema>;