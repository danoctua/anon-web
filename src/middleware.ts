import { NextRequest, NextResponse } from "next/server";

const DEFAULT_LOCALE = "en";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Allow requests to static files or API routes
    if (["_next", "api", "images", "icons", "favicon.ico"].some((segment) => pathname.startsWith(`/${segment}`))) {
        return NextResponse.next();
    }

    const response = NextResponse.next();

    // Set the locale in a cookie if it's not already set
    if (!req.cookies.has("NEXT_LOCALE")) {
        response.cookies.set("NEXT_LOCALE", DEFAULT_LOCALE, { path: "/", httpOnly: true, secure: true });
    }

    return response;
}

// Apply middleware to all routes except static files
export const config = {
    matcher: "/((?!_next/static|_next/image|favicons|logos|images|icons).*)",
};
