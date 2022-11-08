import { Fragment } from "react";
import Link from "next/link";

const Header = (props) => {
  return (
    <nav className="w-screen absolute flex flex-row justify-between py-6 px-14 z-50">
      <span className="text-3xl font-semibold drop-shadow-lg">{props.title}</span>
      {/* landing page */}
      <Link href="/">
        <span id="index" className="w-full absolute flex justify-center">
          <img id="logo" src="/img/logo.png" className="w-25 h-16 "></img>
        </span>
      </Link>
      <span className="w-auto flex flex-cols gap-5">
        {/* Role */}
        <span className="w-auto flex justify-end self-center">
          <span id="clone" className="bg-red-800 w-auto h-12 my-2 px-5 absolute -mt-0.5 rounded-xl overflow-hidden">
            <span className="uppercase font-semibold self-center text-red-800">{props.role}</span>
          </span>
          <span id="real" className="drop-shadow flex justify-center self-end w-auto h-12 my-2 px-5 bg-white grid rounded-xl ">
            <span className="uppercase font-semibold self-center z-40">{props.role}</span>
          </span>
        </span>
        {/* Account Logo */}
        <span id="iconLogin" className="w-14 flex items-center ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-14 h-14 fill-red-800 -mt-2">
            <path
              fill-rule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </span>
    </nav>
  );
};
export default Header;
