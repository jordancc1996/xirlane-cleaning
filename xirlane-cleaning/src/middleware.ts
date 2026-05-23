import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** 301 www → apex so crawlers consolidate on one hostname. */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host");

  if (host === "www.xirlanecleaning.com") {
    const url = request.nextUrl.clone();
    url.host = "xirlanecleaning.com";
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
