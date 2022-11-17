import { Fragment } from "react";
import { register } from "../../services/UserService";
import { useRouter } from "next/router";

function Register() {
  const router = useRouter();
  const handleSubmit = (event) => {
    // stop the form from submmiti2ng and refreshing the page
    event.preventDefault();
    // get data from the form
    const data = {
      name: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    // use register function
    const result = register(data);
    if (result) {
      // clear form value
      event.target.username.value == null;
      event.target.email.value == null;
      event.target.password.value == null;
      // redirect to welcome page
      setTimeout(() => {
        alert("You will be redirected to Login Page");
        router.push("/auth/login");
      }, 3000);
    }
  };
  return (
    <Fragment>
      <div className="text-lg flex flex-col w-screen h-screen justify-center items-center">
        <div className="font-semibold text-3xl">SIGN UP</div>
        <div className="w-2/6 h-7/12 z-40 ">
          <form onSubmit={handleSubmit} method="GET" className="grid grid-rows-6 gap-2 ">
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

            <input type="submit" className="w-full h-16 text-white text-2xl bg-blue-900 border-2 border-gray-300 rounded-full px-5 h-14" value="Register"></input>
          </form>
        </div>
        <embed className="w-full fixed border-4 border-red-900 mt-14 " src="/svg/register.svg"></embed>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
    </Fragment>
  );
}
export default Register;
