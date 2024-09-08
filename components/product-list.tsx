"use client";

import { IinitialProducts } from "@/app/(tabs)/products/page";
import ListProduct from "./list-product";
import { useEffect, useRef, useState } from "react";
import { getMoreProducts } from "@/app/(tabs)/products/action";

export default function ProductList({
  initialProducts,
}: {
  initialProducts: IinitialProducts;
}) {
  const [products, setProduct] = useState(initialProducts); // 표시 상품 목록
  const [isLoading, setIsLoading] = useState(false); // 로딩 여부
  const [page, setPage] = useState(0); // 현재 페이지 수
  const [isLastPage, setIsLastPage] = useState(false); // 마지막 페이지 여부

  const trigger = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      async (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        const element = entries[0];
        if (element.isIntersecting && trigger.current) {
          observer.unobserve(trigger.current);
          setIsLoading(true); //로딩 시작

          //새 상품 목록 조회
          const newProducts = await getMoreProducts(page + 1);
          if (newProducts.length !== 0) {
            setPage((prev) => prev + 1);
            setProduct((prev) => [...prev, ...newProducts]);
          } else {
            setIsLastPage(true);
          }

          setIsLoading(false); //로딩 종료
        }
        console.log(entries[0].isIntersecting);
      },
      {
        threshold: 1.0,
      }
    );
    if (trigger.current) {
      observer.observe(trigger.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [page]);

  return (
    <div className="p-5 flex flex-col gap-5">
      {products.map((product) => (
        <ListProduct key={product.id} {...product}></ListProduct>
      ))}
      {isLastPage ? null : (
        <span
          ref={trigger}
          className="text-sm font-semibold bg-orange-500 w-fit mx-auto px-3 py-2 rounded-md hover:opacity-90 active:scale-95"
        >
          Laod
        </span>
      )}
    </div>
  );
}
