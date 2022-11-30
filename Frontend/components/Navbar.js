import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import Cookies from "universal-cookie";
import * as cookie from "cookie";
import { useRouter } from "next/router";

const cks = new Cookies();

const Header = ({ title, dept }) => {
  const router = useRouter();

  const logout = () => {
    console.log("MASUK");
    cks.remove("token");
    cks.remove("user");
    if (cks.get("dept")) cks.remove("dept");
    if (cks.get("id")) cks.remove("id");
    router.push("/auth/login");
  };
  return (
    <nav className="w-screen absolute flex flex-row justify-between py-6 px-14 z-50">
      <span className="text-3xl font-semibold drop-shadow-lg">{title}</span>
      {/* landing page */}
      <span id="index" className="w-full absolute flex justify-center">
        <Link href="/">
          <button>
            <img id="logo" src="/img/logo.png" className="w-25 h-16 "></img>
          </button>
        </Link>
      </span>
      <span className="w-auto flex flex-cols gap-5">
        {/* Role */}
        <span className="w-auto flex justify-end self-center">
          <span id="clone" className="bg-red-800 w-auto h-12 my-2 px-5 absolute -mt-0.5 rounded-xl overflow-hidden">
            <span id="dept" className="uppercase font-semibold self-center text-red-800">
              {dept === "bph" ? "Bendahara Umum" : dept}
            </span>
          </span>
          <span id="real" className="drop-shadow flex justify-center self-end w-auto h-12 my-2 px-5 bg-white grid rounded-xl ">
            <span id="dept" className="uppercase font-semibold self-center z-40">
              {dept === "bph" ? "Bendahara Umum" : dept}
            </span>
          </span>
        </span>
        {/* Account Logo */}
        <span id="iconLogin" className="w-14 flex items-center ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 fill-red-800 -mt-2">
            <path
              fill-rule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        {/* Logout Button */}
        <button onClick={logout} className="w-auto flex justify-end self-center">
          <span id="real" className="drop-shadow flex justify-center self-end w-auto h-12 my-2 px-5 bg-white grid rounded-xl ">
            <span className="uppercase font-semibold self-center z-40">Logout</span>
          </span>
        </button>
      </span>
    </nav>
  );
};
export default Header;
