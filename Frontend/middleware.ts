import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { NextCookies } from "next/dist/server/web/spec-extension/cookies";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/auth/login")) {
  }
  if (req.nextUrl.pathname.startsWith("/")) {
    console.log("Cookies: ", req.cookies.get("token"));
    if (req.cookies.get("token")) {
      console.log(req.cookies.get("token"));
      NextResponse.next();
    }
    NextResponse.redirect(process.env.NEXT_PUBLIC_FRONTEND_URL + "/auth/login");
  }
}
