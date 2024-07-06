"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    phone_no: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    const { name, phone_no, email, password, confirmPassword } = user;
    console.log(user);
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone_no,
          email,
          password,
          confirmPassword,
        }),
      });
      const data = await response.json();
      if (response.status === 422 || response.status === 500 || !data) {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      } else {
        window.alert("Registration Successful");
        console.log("Registration Successful");
        router.push("/login");
      }
    } catch (error) {
      console.error("An unexpected error happened:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full p-4 bg-cover bg-center relative">
      <div className="absolute inset-0 z-[-1]"></div>
      <div className="w-96 rounded-lg p-8 text-center border border-[#f1fd02] backdrop-blur-md">
        <form method="POST " onSubmit={handleSubmit} className="flex flex-col">
          <h2 className="text-2xl mb-5 text-[#f1fd02]">Register</h2>

          <div className="relative border-b-2 border-[#f1fd02] my-5 input-field">
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
              value={user.name}
              required
            />
            <label>Enter your name</label>
          </div>
          <div className="relative border-b-2 border-[#f1fd02] my-5 input-field">
            <input
              type="phone_no"
              name="phone_no"
              onChange={handleInputChange}
              value={user.phone_no}
              required
            />
            <label>Enter your phone number</label>
          </div>
          <div className="relative border-b-2 border-[#f1fd02] my-5 input-field">
            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              value={user.email}
              required
            />
            <label>Enter your email</label>
          </div>

          <div className="relative border-b-2 border-[#f1fd02] my-5 input-field">
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              required
            />
            <label>Enter your password</label>
          </div>
          <div className="relative border-b-2 border-[#f1fd02] my-5 input-field">
            <input
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <label>Confirm your password</label>
          </div>
          <button
            type="submit"
            className="bg-[#f1fd02] text-black mt-4 font-bold py-3 px-5 cursor-pointer rounded transition ease-in-out duration-300 hover:bg-[#c5ff32] border-2 border-transparent"
          >
            Submit
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
            Do you have an account?{" "}
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
