import Cookies from "universal-cookie";

const cookies = new Cookies();

async function register(data) {
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
    .then((response) => response.json())
    .then((data) => {
      if (data.success == false) {
        alert("Password harus mengandung Kapital dan Angka");
      } else {
        alert("Registrasi Berhasil");
      }
      console.log("Data: ", data);
      return data.success;
    })
    .catch((error) => console.error(error));
}

async function login(data) {
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

export { register, login };
