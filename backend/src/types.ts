import z from "zod"

export const formSchema = z.object({
    name: z.string(),
    email: z.email(),
    desc: z.string()
})