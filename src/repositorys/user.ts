"use server"
import prisma from "@/utils/prisma";
import { unstable_cache } from "next/cache";

export async function getUsers(page = 1, pageSize = 10) {
    const offset = (page - 1) * pageSize;
  
    return await unstable_cache(
      async () => {
        return prisma.user.findMany({
          orderBy: [
            {
                id: "desc",
            },
          ],
          skip: offset,
          take: pageSize,
        });
      },
      [`users-${page}-${pageSize}`],
      {
        revalidate: 90,
        tags: [`users`],
      },
    )();
  }
  