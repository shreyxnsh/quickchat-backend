import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: [
       "error",
       "error",
    ],
});

export default prisma;