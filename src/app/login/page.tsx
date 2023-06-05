
"use client";
import React, { FormEvent } from "react";
import Image from "next/image";
import logo from "../Assets/logo.png";
import { Button } from "app/Components";
import useInput from "../hooks/useInput";
import Link from "next/link";

export default function Login() {

  // en prop pasar condition
  // let href = "";
  // condition ? (href = "home") : (href = "GestionarPedidos");

  const email = useInput();
  const password = useInput();

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(email.value);
    console.log(password.value);
  };

  return (
    <div className="flex flex-col justify-center m-auto items-center">
      <div className="mt-8">
        <Image src={logo} alt="logo" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-90 mx-auto flex flex-col justify-start mt-8 items-center"
      >
        <div className="py-2 w-90 mx-auto">
          <h1 className="text-md text-yellow-400">Username</h1>
          <input
            type="text"
            id="username"
            className="border-b-2 border-blue-500 focus:outline-none w-full"
            placeholder="user@email.com"
            {...email}
            required
          />
        </div>
        <div className="py-2 w-90 mx-auto">
          <h1 className="text-md text-yellow-400">Contraseña</h1>
          <input
            type="password"
            id="password"
            className="border-b-2 border-blue-500 focus:outline-none w-full"
            placeholder="Contraseña"
            {...password}
            required
          />
        </div>
        <Link href="home">
          {/* <Link href={href}> */}
          <Button buttonText="INGRESAR" />
        </Link>
        <button className="text-[#217BCE] my-2 font-sans">
          Recuperar Contraseña
        </button>
        <Link href="register">
          <button className="text-[#217BCE] my-2 font-sans font-bold">
            Registrarse
          </button>
        </Link>
      </div>
    </div>
  );
}
