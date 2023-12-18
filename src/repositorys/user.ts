"use server"
import prisma from "@/utils/prisma";
import { revalidateTag, unstable_cache } from "next/cache";
import { revalidatePath } from "next/cache";

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
      revalidate: 1,
      tags: [`users`],
    },
  )();
}



export async function editUser(formData: FormData) {
  const id = formData.get("id") as string;
  const email = formData.get("email") as string;
  try {
    await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        email: email,
      },
    });

    revalidateTag(
      `users`,
    );
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
}

export async function deleteUser(formData: FormData) {
  const id = formData.get("id") as string;

  try {
    await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });

    revalidateTag(
      `users`,
    );
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
}

