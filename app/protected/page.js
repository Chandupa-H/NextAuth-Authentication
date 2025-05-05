"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ClientProvider from "../ClientProvider";

export default function ProtectedPage() {
  console.log("ProtectedPage component rendering");
  return (
    <ClientProvider>
      <InnerProtected />
    </ClientProvider>
  );
}

function InnerProtected() {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log("InnerProtected rendering with session:", session);

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/signup");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Protected Page</h1>
      <p>Welcome, {session.user.email}! This is a protected page.</p>
      <button
        style={{
          marginTop: "1rem",
          backgroundColor: "#3b82f6",
          color: "#ffffff",
          padding: "0.5rem 1rem",
          borderRadius: "0.25rem",
          cursor: "pointer",
        }}
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        {session ? "Sign Out" : "Sign In"}
      </button>
    </div>
  );
}
