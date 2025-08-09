import { PrismaClient } from "@/lib/generated/prisma";
import { PrismaLibSQL } from "@prisma/adapter-libsql";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const tursoUrl = process.env.TURSO_DATABASE_URL;
const tursoAuthToken = process.env.TURSO_AUTH_TOKEN;

const createPrismaClient = () => {
  let adapter = null;
  if (tursoUrl && tursoAuthToken) {
    adapter = new PrismaLibSQL({
      url: `${tursoUrl}`,
      authToken: `${tursoAuthToken}`,
    });
  }

  return new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
