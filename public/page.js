"use client";

import ClientProvider from "../ClientProvider";

export default function PublicPage() {
  console.log("PublicPage component rendering");
  return (
    <ClientProvider>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold mb-8">Public Page</h1>
        <p>This is a public page accessible to everyone.</p>
      </div>
    </ClientProvider>
  );
}
