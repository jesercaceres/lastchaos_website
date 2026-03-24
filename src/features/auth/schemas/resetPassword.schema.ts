import { z } from 'zod';

const passwordMessage = 'A nova senha deve ter pelo menos 6 caracteres, conter pelo menos uma letra maiúscula e um caracter especial.';

export const resetPasswordSchema = z.object({
  token: z.string().min(1, 'O token de recuperação é obrigatório.'),
  newPassword: z.string()
    .min(6, passwordMessage)
    .regex(/[A-Z]/, passwordMessage)
    .regex(/[^a-zA-Z0-9]/, passwordMessage),
  confirmPassword: z.string()
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: 'As senhas não coincidem.',
  path: ['confirmPassword']
});

export type ResetPasswordDto = z.infer<typeof resetPasswordSchema>;