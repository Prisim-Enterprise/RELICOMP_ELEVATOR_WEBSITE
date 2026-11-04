import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const APEX_HOST = "relicompelevator.com";
const CANONICAL_HOST = "www.relicompelevator.com";

/**
 * Collapse the apex host onto www in a single hop.
 * Vercel still upgrades http to https before this runs.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();
  if (host !== APEX_HOST) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.protocol = "https";
  url.hostname = CANONICAL_HOST;
  url.port = "";
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
