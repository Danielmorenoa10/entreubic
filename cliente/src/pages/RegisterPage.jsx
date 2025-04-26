import React from 'react';
 import { useForm } from "react-hook-form";

 function RegisterPage() {
  const { register, handleSubmit } = useForm();

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
  <div className="bg-white max-w-md w-full p-10 rounded-2xl shadow-2xl">
  <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">BIENVENIDO A ENTREUBIC</h1> {/* Added title here */}
  <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Registrarse</h1>
  <form
  onSubmit={handleSubmit((values) => {
  console.log(values);
  })}
  className="flex flex-col gap-6"
  >
  <div className="flex flex-col">
  <label htmlFor="username" className="text-gray-700 mb-1 font-semibold">Usuario</label>
  <input
  type="text"
  {...register("username", { required: true })}
  className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
  placeholder="Enter your username"
  />
  </div>

  <div className="flex flex-col">
  <label htmlFor="email" className="text-gray-700 mb-1 font-semibold">Correo</label>
  <input
  type="email"
  {...register("email", { required: true })}
  className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
  placeholder="you@example.com"
  />
  </div>

  <div className="flex flex-col">
  <label htmlFor="password" className="text-gray-700 mb-1 font-semibold">Contraseña</label>
  <input
  type="password"
  {...register("password", { required: true })}
  className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
  placeholder="********"
  />
  </div>

  <button
  type="submit"
  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
  >
  Register
  </button>
  </form>
  </div>
  </div>
  );
 }

 export default RegisterPage;