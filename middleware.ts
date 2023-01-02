import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(request: NextRequest) {

    const redirects = await fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
    .then(data => data.redirects)

    const red = redirects.data.findIndex((redirect: any) => redirect.source === request.nextUrl.pathname)

    return  NextResponse.redirect(new URL(redirects.data[red].destination, request.url))
  }

  export const config = {
    matcher: '/blogs/:path*',
  }