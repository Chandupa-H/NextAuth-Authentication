"use client";

import { useSession, signOut } from "next-auth/react";
import ClientProvider from "./ClientProvider";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function Home() {
  const router = useRouter();
  console.log("Home component rendering");
  return (
    <ClientProvider>
      <InnerHome />
    </ClientProvider>
  );
}

function InnerHome() {
  const { data: session } = useSession();
  console.log("InnerHome rendering with session:", session);

  return (
    <div>
      <Navbar />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f3f4f6",
        }}
      >
        <h1
          style={{
            fontSize: "1.875rem",
            fontWeight: "700",
            marginBottom: "2rem",
          }}
        >
          Welcome to the App
        </h1>
        <p>
          Session:{" "}
          {session ? `Logged in as ${session.user.email}` : "Not logged in"}
        </p>
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
    </div>
  );
}
