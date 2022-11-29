import { Fragment } from "react";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.dept = ["psdm", "medbrand", "imbang", "dpor", "sainpres", "bismit", "ekris", "bph"];
    // Option for departemen
    this.Depart = this.dept.map((name) => (
      <option id={name} value={name}>
        {name}
      </option>
    ));
  }
  componentDidMount() {}
  handleSubmit = async (event) => {
    // stop the form from submmiti2ng and refreshing the page
    event.preventDefault();
    // get data from the form
    const data = {
      name: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      dept: event.target.dept.value,
    };
    const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `auth/registration`, {
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
      const router = useRouter();
      // set time for redirecting to login page
      setTimeout(() => {
        alert("Registrasi Berhasil! Silahkan cek email anda untuk verifikasi email");
        router.push("/auth/login");
      }, 3000);
    } else alert(body.message);
  };
  render() {
    return (
      <Fragment>
        <div className="text-lg flex flex-col w-screen h-screen justify-center items-center">
          <div className="font-semibold text-3xl">SIGN UP</div>
          <div className="w-2/6 h-7/12 z-40 ">
            <form onSubmit={this.handleSubmit} method="GET" className="grid grid-rows-6 gap-2 ">
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
              <label for="departemen" className="w-full self-end font-semibold text-2xl">
                Departemen
              </label>
              <label className="w-full self-end font-semibold text-sm">Silahkan isi sesuai list</label>
              <input list="dept" name="dept" required autoFocus />
              <datalist id="dept">{this.Depart}</datalist>
              <div className="font-semibold text-2xl mt-3">
                Already have an account? <tab></tab>
                <span className="underline">
                  <Link href="/auth/login">Sign In</Link>
                </span>
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
}
export default Register;
