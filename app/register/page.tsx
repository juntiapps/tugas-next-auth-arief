'use client';

   import { useSession } from 'next-auth/react';
   import { useRouter } from 'next/navigation';
   import { useEffect } from 'react';
   import RegisterForm from '@/components/RegisterForm';

   export default function RegisterPage() {
     const { data: session, status } = useSession();
     const router = useRouter();

     useEffect(() => {
       if (status === 'authenticated') {
         router.replace('/dashboard');
       }
     }, [status, router]);

     if (status === 'loading') {
       return <div>Loading...</div>;
     }

     if (status === 'authenticated') {
       return null; // Prevent rendering while redirecting
     }

     return (
       <div className="max-w-md mx-auto mt-8">
         <h1 className="text-2xl font-bold mb-4">Register</h1>
         <RegisterForm />
       </div>
     );
   }