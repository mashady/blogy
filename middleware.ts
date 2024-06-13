import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("authjs.session-token")?.value;
  console.log("currentUser");
  console.log(currentUser);
  if (!currentUser) {
    return NextResponse.redirect(new URL("/forbidden", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/settings", "/settings/profile", "/new-post", "/profile"],
};
