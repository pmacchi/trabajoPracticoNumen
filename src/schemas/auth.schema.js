import { z } from 'zod';

export const registerSchema = z.object({
    name: z.string({
        required_error: 'Nombre de usuario requerido'
    }),
    password: z.string({
        required_error: 'Password es requerido'
    }).min(6, {
        message: "La contraseña debe tener al menos 6 caracteres",

    }),
});


export const loginSchema = z.object({
    password: z.string({
        required_error: "Password requerido",
    })
        .min(6, {
            message: "La contraseña debe tener al menos 6 caracteres"
        }),
});