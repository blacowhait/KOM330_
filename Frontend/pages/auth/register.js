import { Fragment } from "react";

async function signup() {
  const URL = "https://truends.com/api/v1/login";
  await fetch(URL, {
    method: "GET",
  })
    .then((response) => response.json)
    .then((data) => console.log(data));
}

function Register() {
  return (
    <Fragment>
      <div className="text-lg flex flex-col w-screen h-screen justify-center items-center">
        <div className="font-semibold text-3xl">SIGN UP</div>
        <div className="w-2/6 h-7/12 z-40 ">
          <form method="GET" action="" className="grid grid-rows-6 gap-2 ">
            <label for="username" className="w-full self-end font-semibold text-2xl">
              Username{" "}
            </label>
            <input type="text" id="username" name="username" className="w-full bg-gray-200 border-2 border-gray-300 rounded-full px-5 h-14" required autoFocus></input>
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

            <input type="button" onClick={signup} className="w-full h-16 text-white text-2xl bg-blue-900 border-2 border-gray-300 rounded-full px-5 h-14" value="Login"></input>
          </form>
        </div>
        <embed className="w-full fixed border-4 border-red-900 mt-14 " src="/svg/register.svg"></embed>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
    </Fragment>
  );
}
export default Register;
