import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const refreshToken = request.cookies.get('refresh-token');
  const accessToken = request.cookies.get('accessToken');

  const hasTokens = refreshToken && accessToken;
  const path = new URL(request.url).pathname;

  const protectedRoutes = ['/dashboard', '/profile', '/settings', '/logout'];
  const isProtectedRoute = protectedRoutes.includes(path);

  if (isProtectedRoute && !hasTokens) {
    // If the user is trying to access a protected route and they're not logged in, redirect them to the login page
    return NextResponse.redirect(new URL('/login', request.url));
  } else if (path === '/login' && hasTokens) {
    // If the user is trying to access the login page and they're already logged in, redirect them to the dashboard
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
};
