import React from "react";

export default function Hero() {
  return (
    <section className="bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl ">
            Let us find your
            <strong className="font-extrabold text-red-700 sm:block">
              {" "}
              Fovourite products{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed ">
            This is an e-commerce website where you will get the 
            high qulity products. So what you are waiting for!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium bg-blue-600  shadow hover:bg-blue-800 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
