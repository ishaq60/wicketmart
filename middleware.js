import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// Load secret from environment
const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(request) {
  const token = await getToken({ req: request, secret });
  const { pathname } = request.nextUrl;

  const protectedRoutes = ["/checkout","/orders", "/dashboard/admin"];

  // 🔒 If no token and accessing a protected route
  if (!token && protectedRoutes.some((route) => pathname.startsWith(route))) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname); // ✅ preserve destination
    return NextResponse.redirect(loginUrl);
  }

  // 🔐 Restrict /dashboard/admin to admin users
  if (pathname.startsWith("/dashboard/admin") && token?.type !== "admin") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  // ✅ Allow access
  return NextResponse.next();
}

// ✅ Define routes where middleware runs
export const config = {
  matcher: [
    "/checkout",
    "/dashboard/admin/:path*",
  ],
};
