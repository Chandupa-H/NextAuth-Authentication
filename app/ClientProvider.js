"use client";

import { SessionProvider } from "next-auth/react";

export default function ClientProvider({ children }) {
  console.log("ClientProvider rendering with children");
  return <SessionProvider>{children}</SessionProvider>;
}
