"use server";

import { logInFormSchema } from "@/definitions/log-in";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function logIn({email, password}: logInFormSchema) {;
  try {
    const data = await auth.api.signInEmail({
      body: {
        email: email,
        password: password,
        rememberMe: true,
        callbackURL: "/admin",
      },
      headers: await headers(),
    });

    return { data, success: true };
  } catch (error) {
    return { data: null, success: false };
  }
}
