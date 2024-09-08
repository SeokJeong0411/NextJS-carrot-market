import { NextRequest, NextResponse } from "next/server";
import getSession from "./lib/session";

interface Routes {
  [key: string]: boolean;
}

const publicOnlyUrls: Routes = {
  "/": true,
  "/login": true,
  "/sms": true,
  "/create-account": true,
};

export async function middleware(request: NextRequest) {
  const session = await getSession();
  const exist = publicOnlyUrls[request.nextUrl.pathname];

  if (!session.id) {
    if (!exist) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (exist) {
      return NextResponse.redirect(new URL("/products", request.url));
    }
  }
}

// 실행 위치와 실행하지 않을 위치를 설정
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
