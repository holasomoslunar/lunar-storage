import { z } from "zod";

export const logInFormSchema = z.object({
  email: z
    .email({ message: "Please enter a valid email." }),
  password: z
    .string()
});

export type logInFormSchema = z.infer<typeof logInFormSchema>;
