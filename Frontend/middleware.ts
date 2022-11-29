import jwt_decode from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const uri = req.nextUrl.pathname;
  if (uri.startsWith("/auth")) {
    console.log(req.cookies.has("token"));
    if (req.cookies.has("token")) {
      const url = req.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }
  if (uri === "/" || uri.startsWith("/spj") || uri.startsWith("/rab") || uri.startsWith("/cashflow")) {
    if (!req.cookies.has("token")) {
      const url = req.nextUrl.clone();
      url.pathname = "/auth/login";
      return NextResponse.redirect(url);
    }
  }
  if (uri === "/admin" && req.cookies.has("token")) {
    const tkn = jwt_decode(req.cookies.get("token"));
    if (tkn.privilege !== "pusat") {
      const url = req.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}
