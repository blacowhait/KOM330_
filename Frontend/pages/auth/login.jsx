import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import Link from "next/link";

const ck = new Cookies();

function Login() {
  const router = useRouter();

  const Send = async (data) => {
    // set router and cookies library
    const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
      },
      body: JSON.stringify(data),
    });
    const body = await response.json();
    console.log(body);
    if (response.ok) {
      // set cookies
      ck.set("token", body.token, { path: "/" });
      ck.set("user", body.user, { path: "/" });

      // set time for redirecting to login page
      setTimeout(() => {
        alert("Login Berhasil!");
        router.push("/");
      }, 500);
    } else alert(body.message);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // ambil data form
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    Send(data);
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
              Don’t have an account? <tab></tab>
              <span className="underline">
                <Link href="/auth/register">Sign Up</Link>
              </span>
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
