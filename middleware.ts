import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req, res })

  // Refresh session if expired - required for Server Components
  const {data: {user}} = await supabase.auth.getUser()

  if (user && req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/watch-list', req.url))
  }

  if (!user && req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return res
}

// Ensure the middleware is only called for relevant paths.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/', '/watch-list',
  ],
}