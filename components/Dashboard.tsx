'use client';

import { signOut, useSession } from 'next-auth/react';

export default function Dashboard() {
    const { data: session, status } = useSession();
    console.log(session)

    return (
        <div className="max-w-md mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p className="mb-4">Welcome to your dashboard!</p>
            <p className="mb-4">Name: {session?.user?.name}</p>
            <p className="mb-4">Email: {session?.user?.email}</p>
            <button
                onClick={() => {
                    window.location.href = '/api/auth/signout'
                }}
                className="w-full bg-red-600 text-white p-2 rounded"
            >
                Logout
            </button>
        </div>
    );
}