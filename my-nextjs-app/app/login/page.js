"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { jwtVerify } from "jose"; // Import jwtVerify from jose

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include", // Required for cookies
      });

      if (response.status === 401 || response.status === 500) {
        window.alert("Invalid Login");
        console.log("Invalid Login");
      } else {
        const data = await response.json();
        const token = data.logged;

        // Verify token using jose
        try {
          const { payload } = await jwtVerify(
            token,
            new TextEncoder().encode("1234") // Replace "1234" with your actual secret key
          );
          // Store the token in local storage
          localStorage.setItem("token", token);
          window.alert("Login Successful");
          router.push("/dashboard");
        } catch (error) {
          console.error("Invalid token:", error);
          window.alert("Invalid token received");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full p-4 bg-cover bg-center relative">
      <div className="absolute inset-0 z-[-1]"></div>
      <div className="w-96 rounded-lg p-8 text-center border border-[#f1fd02] backdrop-blur-md">
        <form action="POST" onSubmit={handleSubmit} className="flex flex-col">
          <h2 className="text-2xl mb-5 text-[#f1fd02]">Login</h2>

          <div className="relative border-b-2 border-[#f1fd02] my-5 input-field">
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <label>Enter your email</label>
          </div>

          <div className="relative border-b-2 border-[#f1fd02] my-5 input-field">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Enter your password</label>
          </div>

          <button
            type="submit"
            className="bg-[#f1fd02] text-black mt-4 font-bold py-3 px-5 cursor-pointer rounded transition ease-in-out duration-300 hover:bg-[#c5ff32] border-2 border-transparent"
          >
            Log In
          </button>
        </form>

        <div className="flex items-center justify-between my-6 text-[#f1fd02]">
          <label htmlFor="remember" className="flex items-center">
            <input type="checkbox" id="remember" className="accent-[#f1fd02]" />
            <p className="ml-2">Remember me</p>
          </label>
          <a href="#" className="hover:underline">
            Forgot password?
          </a>
        </div>

        <div className="text-center mt-8 text-[#f1fd02]">
          <p>
            Don't have an account?{" "}
            <Link href="/register" className="hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
