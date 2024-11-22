"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    // Uncomment if you want to validate the password length
    // if (formData.password.length < 10) {
    //   newErrors.password = "Password must be at least 10 characters long.";
    // }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Successfully submitted");
      console.log("Submitted Data:", formData);

      fetch("https://localhost:3000/loginPage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (response.data.Status === "Login Successful") {
            alert("You are already logged in");
          } else {
            alert("Invalid credentials");
          }
        })
        .catch((err) => console.error(err.message));
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-3/4 bg-[#feffdf] rounded-md shadow-2xl overflow-hidden w-full max-w-3xl">
      {/* Picture Section */}
      <div className="w-full md:w-1/2 h-full md:h-auto relative">
        {/* <img
          src={DiscoverYouImage} // Use the imported image
          alt="Login Illustration"
          className="object-cover w-full h-full"
        /> */}
        h
      </div>
      {/* Form Section */}
      <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            DiscoverYou Login
          </h2>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border text-black border-gray-400 rounded-lg bg-[#feffdf] mt-1"
              required
              title="Please enter a valid email address."
            />
            {errors.email && (
              <p className="text-red-500 mt-1 text-xs">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="•••••••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border text-black border-gray-400 rounded-lg bg-[#feffdf] mt-1"
              // minLength="10"
              // maxLength="36"
              required
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-black">
                  Remember me
                </label>
              </div>
            </div>

            {/* Forgot Password */}
            <a
              href="#"
              className="text-sm font-medium text-blue-800 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <div className="mb-4 mt-5">
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
