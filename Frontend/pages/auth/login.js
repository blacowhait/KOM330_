import { Fragment } from "react";
import { useEffect, useState } from "react";

// async function login() {
//   const URL = "https://localhost:3000/api/auth/registration";
//   const data ={
//     "name": "wawa",
//     "email": "wawa@wawa.com",
//     "password": "Wawawawa1"
//   }
//   await fetch(URL, {
//     method: "POST",
//   })
//     .then((response) => response.json)
//     .then((data) => console.log(data));
// }

function Login() {
  const URL = "https://localhost:3000/api/auth/login";
  const [data] = useState();
  useEffect(() => {
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  });
  return (
    <Fragment>
      <div className="text-lg flex flex-col w-screen h-screen justify-center items-center">
        <div className="w-2/6 h-7/12 z-40 ">
          <form method="GET" action="" className="grid grid-rows-6 gap-2 ">
            <label for="email" className="w-full self-end font-semibold text-2xl">
              Email/Username{" "}
            </label>
            <input type="text" id="email" name="email" className="w-full bg-gray-200 border-2 border-gray-300 rounded-full px-5 h-14" required autoFocus></input>
            <label for="password" className="w-full self-end font-semibold text-2xl">
              Password{" "}
            </label>
            <input type="text" id="password" name="password" className="w-full bg-gray-200 border-2 border-gray-300 rounded-full px-5 h-14" required autoFocus></input>
            <div className="font-semibold text-2xl mt-3">
              Don’t have an account? <a href="#">Sign Up</a>
            </div>

            <input type="button" onClick={() => setData} className="w-full h-16 text-white text-2xl bg-blue-900 border-2 border-gray-300 rounded-full px-5 h-14" value="Login"></input>
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
