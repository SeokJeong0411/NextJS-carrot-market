import { formatToTimeAgo, formatToWon } from "@/lib/util";
import Image from "next/image";
import Link from "next/link";

interface IListProduct {
  title: string;
  price: number;
  created_at: Date;
  photo: string;
  id: number;
}

export default function ListProduct({
  title,
  price,
  created_at,
  photo,
  id,
}: IListProduct) {
  return (
    <Link href={`/products/${id}`} className="flex flex-row gap-5">
      <div className="relative size-28 overflow-hidden">
        <Image width={200} height={200} src={photo} alt={title} />
      </div>
      <div className="flex flex-col gap-1 *:text-white">
        <span className="text-lg">{title}</span>
        <span className="text-sm text-neutral-500 ">
          {formatToTimeAgo(created_at.toString())}
        </span>
        <span className="text-lg font-bold">{formatToWon(price)}원</span>
      </div>
    </Link>
  );
}
