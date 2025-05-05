"use client";

import { signIn } from "next-auth/react";
import ClientProvider from "../../ClientProvider";

export default function SignUp() {
  console.log("SignUp component rendering");
  return (
    <ClientProvider>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold mb-8">Sign Up</h1>
        <div className="space-y-4">
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-64 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Sign in with Google
          </button>
          <button
            onClick={() => signIn("apple", { callbackUrl: "/" })}
            className="w-64 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Sign in with Apple
          </button>
        </div>
      </div>
    </ClientProvider>
  );
}
