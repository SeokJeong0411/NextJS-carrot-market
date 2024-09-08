"use server";

import db from "@/lib/db";

const pageSize = 1;

export async function getMoreProducts(page: number) {
  const products = await db.product.findMany({
    select: {
      title: true,
      price: true,
      created_at: true,
      photo: true,
      id: true,
    },
    skip: page * pageSize,
    take: pageSize,
    orderBy: {
      created_at: "desc",
    },
  });
  return products;
}
