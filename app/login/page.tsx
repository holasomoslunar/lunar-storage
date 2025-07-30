import LoginForm from "@/components/LoginForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) {
    redirect("/admin");
  }

  return (
    <div className="flex flex-col space-y-8 items-center justify-center h-[100dvh] w-full">
      <Link href="/" aria-label="Lunar">
        <Image
          src="/brand/logo-dark.png"
          alt="Lunar Store Logo"
          width={166}
          height={58.66}
          className="hidden dark:block"
        />
        <Image
          src="/brand/logo-light.png"
          alt="Lunar Store Logo"
          width={166}
          height={58.66}
          className="block dark:hidden"
        />
      </Link>

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Inicia Sesion en Lunar</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
