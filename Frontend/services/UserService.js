import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import React from "react";

const cookies = new Cookies();

class UserService {
  constructor() {
    this.router = useRouter();
  }
  async register(data) {
    console.log(data);
    await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `auth/registration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        console.log(response);
        if (response.ok)
          setTimeout(() => {
            alert("Registrasi Berhasil! anda akan diarahkan ke login page");
            this.router.push("/auth/login");
          }, 3000);
        else {
          let resp = await response.json();
          alert(resp.message);
        }
      })
      .catch((error) => console.error(error));
  }

  async login(data) {
    console.log(data);
    await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // debug
        console.log(data);

        if (!data.success) {
          alert(data.message);
        } else {
          // display message
          if (data.message) alert(data.message);
          cookies.set("token", data.token, { path: "/" });
          cookies.set("user", data.user, { path: "/" });
          console.log(cookies.get("token"));
          console.log(cookies.get("user"));
          return true;
        }
      })
      .catch((error) => console.error(error));
  }
  // function to check if cookies has token
  async middleware(data) {
    const { token } = cookies.getAll();
    if (token) console.log("Token telah ada");
  }
}

export default UserService;
