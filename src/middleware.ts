import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/api") || pathname.startsWith("/_next") || pathname === "/favicon.ico") {
    return;
  }

  const extension = pathname.split(".").pop()?.toLowerCase();
  const staticExtensions = ["woff2", "woff", "ttf", "eot", "png", "jpg", "jpeg", "gif", "svg", "ico", "webp", "pdf", "json", "css", "js", "xml", "txt"];

  if (extension && staticExtensions.includes(extension)) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/ko/")) {
    const newPathname = pathname.replace("/ko", "") || "/";
    return NextResponse.redirect(new URL(newPathname, request.url));
  }

  if (pathname === "/ko") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname.startsWith("/en/")) {
    return NextResponse.next();
  }

  if (pathname === "/en") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/ko${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
