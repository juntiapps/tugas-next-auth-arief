import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-md mx-auto mt-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Auth App</h1>
      <p className="mb-6">Please login or register to continue</p>
      <div className="space-x-4">
        <Link href="/login">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}