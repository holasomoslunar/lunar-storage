"use client";

import logIn from "@/actions/log-in";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { logInFormSchema } from "@/definitions/log-in";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<logInFormSchema>({
    resolver: zodResolver(logInFormSchema),
  });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<logInFormSchema> = async (data) => {
    setPending(true);
    const { success } = await logIn(data);
    if (success) {
      setError(null);
      router.push("/admin");
    } else {
      setError("Error al iniciar sesión. Por favor, revise sus credenciales.");
      setPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="flex flex-col gap-6">
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" {...register("email")} required />
          {errors.email && (
            <span className="text-destructive text-sm" role="alert">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Contraseña</Label>
          <Input type="password" required {...register("password")} />
          {errors.password && (
            <span className="text-destructive text-sm" role="alert">
              {errors.password.message}
            </span>
          )}
        </div>

        <div>
          <Button
            type="submit"
            className="w-full cursor-pointer"
            disabled={pending}
          >
            {pending ? <Loader className="animate-spin" /> : "Iniciar Sesión"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
