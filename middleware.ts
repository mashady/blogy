import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  /**
   * 
  const currentUser = request.cookies.get("authjs.session-token")?.value;
  console.log("currentUser");
  console.log(currentUser);
  if (!currentUser) {
    return NextResponse.redirect(new URL("/forbidden", request.url));
  }

   */

  // handle cors
  const res = NextResponse.next();

  // add the CORS headers to the response
  res.headers.append("Access-Control-Allow-Credentials", "true");
  res.headers.append("Access-Control-Allow-Origin", "*"); // replace this your actual origin
  res.headers.append(
    "Access-Control-Allow-Methods",
    "GET,DELETE,PATCH,POST,PUT"
  );
  res.headers.append(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  return res;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/:path*",
};

/**
export const config = {
  matcher: [
    "/settings",
    "/settings/profile",
    "/new-post",
    "/profile",
    "/api/:path*",
  ],
};


*/
