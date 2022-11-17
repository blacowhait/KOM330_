import { Fragment } from "react";
import { useEffect, useState } from "react";
import { login } from "../../services/UserService";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // debug
    // console.log(event);
    // ambil data form
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    // send and convert data
    const result = login(data);
    if (result) {
      // make alert and redirect
      alert("Anda akan diarahkan ke landing page");
      setTimeout(() => router.push("/"), 3000);
    }
  };
  return (
    <Fragment>
      <div className="text-lg flex flex-col w-screen h-screen justify-center items-center">
        <div className="w-2/6 h-7/12 z-40 ">
          <form onSubmit={handleSubmit} method="GET" className="grid grid-rows-6 gap-2 ">
            <label for="email" className="w-full self-end font-semibold text-2xl">
              Email{" "}
            </label>
            <input type="email" id="email" name="email" className="w-full bg-gray-200 border-2 border-gray-300 rounded-full px-5 h-14" required autoFocus></input>
            <label for="password" className="w-full self-end font-semibold text-2xl">
              Password{" "}
            </label>
            <input type="password" id="password" name="password" className="w-full bg-gray-200 border-2 border-gray-300 rounded-full px-5 h-14" required autoFocus></input>
            <div className="font-semibold text-2xl mt-3">
              Don’t have an account? <a href="#">Sign Up</a>
            </div>

            <input type="submit" className="w-full h-16 text-white text-2xl bg-blue-900 border-2 border-gray-300 rounded-full px-5 h-14" value="Login"></input>
          </form>
        </div>
        <p className="font-semibold text-2xl w-3/6 mt-10 z-40 text-center">
          <strong>Truends</strong> adalah sebuah website yang berfungsi <br></br> untuk mengelola laporan keuangan BEM FMIPA IPB.
        </p>
        <embed className="w-full fixed border-4 border-red-900 mt-14" src="/svg/login.svg"></embed>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
    </Fragment>
  );
}

export default Login;
