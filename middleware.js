import { NextResponse } from "next/server";

export function middleware(request) {
  const myCookie = request.cookies.get("session")?.value;

  const currentUser = myCookie ? JSON.parse(myCookie) : null;

  if (!currentUser.isAdmin || !currentUser) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/admin",
};
