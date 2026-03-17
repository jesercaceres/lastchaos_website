// src/features/auth/schemas/register.schema.ts
import { z } from 'zod';

export const registerSchema = z.object({
  userId: z.string()
    .min(4, 'O utilizador deve ter pelo menos 4 caracteres.')
    .max(20, 'O utilizador não pode ter mais de 20 caracteres.'),
  
  passwd: z.string()
    .min(6, 'A palavra-passe deve ter pelo menos 6 caracteres.')
    .regex(/[A-Z]/, 'A palavra-passe deve conter pelo menos uma letra maiúscula.')
    .regex(/[^a-zA-Z0-9]/, 'A palavra-passe deve conter pelo menos um caracter especial.'),
  
  confirmPasswd: z.string(),
  
  email: z.string()
    .email('Por favor, introduza um endereço de e-mail válido.')
}).refine((data) => data.passwd === data.confirmPasswd, {
  message: 'As palavras-passe não coincidem.',
  path: ['confirmPasswd']
});

export type RegisterDto = z.infer<typeof registerSchema>;