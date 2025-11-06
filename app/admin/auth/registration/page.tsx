import React from "react";
export default function RegistrationPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <section className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Admin Registration
        </h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="border rounded px-3 py-2 focus:outline-none focus:ring"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-3 py-2 focus:outline-none focus:ring"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded px-3 py-2 focus:outline-none focus:ring"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </section>
    </main>
  );
}
