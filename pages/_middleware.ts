import { NextResponse } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (signedinPages.includes(req.nextUrl.pathname)) {
    const token = req.cookies.TRACK_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}
