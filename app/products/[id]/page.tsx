import db from "@/lib/db";
import getSession from "@/lib/session";
import { formatToWon } from "@/lib/util";
import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

// 상품 조회
async function getProduct(id: number) {
  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          username: true,
          avatar: true,
        },
      },
    },
  });

  return product;
}

// 판매자 여부 확인
async function getIsOwner(userId: number) {
  const session = await getSession();
  if (session.id) {
    return (session.id = userId);
  } else {
    false;
  }
}

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  // ID 검사
  const id = Number(params.id);
  if (isNaN(id)) {
    return notFound();
  }

  // 상품 확인
  const product = await getProduct(id);
  if (!product) {
    return notFound();
  }

  // 판매자 여부 확인
  const isOwner = await getIsOwner(product.id);

  // 상품 삭제
  const deleteProduct = async () => {
    "use server";
    const dbProduct = db.product;
    const a = await dbProduct.delete({
      where: {
        id,
      },
    });

    if ((a.id = id)) {
      redirect("/products");
    } else {
      console.log("error : fail to delete the product");
    }
  };

  return (
    <div className="">
      <div className="relative aspect-square">
        <Image
          fill
          src={product.photo}
          alt={product.title}
          className="object-cover"
        />
      </div>
      <div className="p-5 flex items-center gap-3 border-b, border-neutral-700">
        <div className="size-10 overflow-hidden rounded-full">
          {product.user.avatar !== null ? (
            <Image
              src={product.user.avatar}
              width={40}
              height={40}
              alt={product.user.username}
            />
          ) : (
            <UserIcon className="" />
          )}
        </div>
        <div className="">
          <h3 className="">{product.user.username}</h3>
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <p>{product.description}</p>
      </div>
      <div className="fixed w-full bottom-0 left-0 p-5 pb-10 bg-neutral-800 flex justify-between items-center">
        <span className="font-semibold text-xl">
          {formatToWon(product.price)}원
        </span>
        {isOwner ? (
          <form action={deleteProduct}>
            <button className="bg-red-500 px-5 py-2.5 rounded-md text-white font-semibold">
              삭제
            </button>
          </form>
        ) : null}
        <Link
          className="bg-orange-500 px-5 py-2.5 rounded-md text-white font-semibold"
          href={``}
        >
          채팅하기
        </Link>
      </div>
    </div>
  );
}
