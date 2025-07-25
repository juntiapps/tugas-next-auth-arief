import './globals.css';
import { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import SessionProviderWrapper from '@/components/SessionProviderWrapper';

export const metadata = {
  title: 'Auth App',
  description: 'Next.js Authentication App',
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 p-4 text-white">
          <div className="container mx-auto flex justify-between">
            <a href="/" className="text-lg font-bold">Auth App</a>
            <div>
              {session ? (
                <>
                  <a href="/dashboard" className="mr-4">Dashboard</a>
                  <a href="/api/auth/signout">Logout</a>
                </>
              ) : (
                <>
                  <a href="/login" className="mr-4">Login</a>
                  <a href="/register">Register</a>
                </>
              )}
            </div>
          </div>
        </nav>
        <SessionProviderWrapper>
        <main className="container mx-auto p-4">{children}</main>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}