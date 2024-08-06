import { NextResponse } from 'next/server'
import { usePathname } from 'next/navigation'
 
export function middleware(request) {
  const path = request.nextUrl.pathname
  if (path === "/messages") {
    return NextResponse.redirect(new URL('/', request.url))
  }
  
}
 
export const config = {
  matcher: '/messages',
}