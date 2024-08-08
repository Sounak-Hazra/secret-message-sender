import { NextResponse } from 'next/server'
import { usePathname } from 'next/navigation'
 
export function middleware(request) {
  const path = request.nextUrl.pathname
  console.log(path)
  if (path === "/messages" || path==="/sender") {
    return NextResponse.redirect(new URL('/', request.url))
  }
  
}
 
export const config = {
  matcher: ['/messages','/sender'],
}