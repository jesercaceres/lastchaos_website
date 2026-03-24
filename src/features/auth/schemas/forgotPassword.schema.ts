import { z } from 'zod';

export const forgotPasswordSchema = z.object({
    identifier: z.string().min(1, 'Por favor, informe o seu E-mail ou ID de utilizador.')
});

export type ForgotPasswordDto = z.infer<typeof forgotPasswordSchema>;