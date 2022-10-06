import { Fragment } from "react";

const Header = () => {
  return (
    <nav className="w-screen gap-5 fixed flex flex-row justify-center mt-6 z-50 -mx-8">
      <span className="w-6/12 flex justify-end">
        <img id="logo" src="/img/logo.png" className="w-25 h-16 "></img>
      </span>
      <span className=" flex justify-end w-3/12 ">
        <span id="clone" className="bg-red-800 w-32 h-12 my-2 px-5 fixed -mt-0.5 rounded-xl overflow-hidden"></span>
        <span id="real" className="drop-shadow flex justify-center w-32 h-12 my-2 px-5 bg-white grid rounded-xl">
          <span className="uppercase font-semibold self-center z-40 ">adkesmah</span>
        </span>
      </span>
      <span id="iconLogin" className="w-14 flex items-center justify-end ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-14 h-14 fill-red-800 -mt-2">
          <path
            fill-rule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </nav>
  );
};
export default Header;
