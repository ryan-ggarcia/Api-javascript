import { z } from "zod";

// .pick({ campo: true }) → mantém só os campos escolhidos, todos obrigatórios como estavam.
// - .omit({ campo: true }) → schema completo menos os campos excluídos.
// - .partial() → todos os campos viram opcionais.
// - .partial().extend({ id: z.number() }) → tudo opcional, exceto o id que você força de volta como obrigatório (útil pro update, onde precisa saber qual registro alterar mas os outros campos podem ou não vir).

const properySchema = z.object({
    id: z.number().optional(),
    desc: z.string().min(1),
    cep: z.string().length(8),
    address: z.string().min(1),
    neighborhood: z.string().min(1),
    city: z.string().min(1),
    value: z.number().positive(),
    available: z.boolean().optional()
})

export {properySchema}