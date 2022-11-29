import { useRouter } from "next/router";
import { Fragment } from "react";
import Cookies from "universal-cookie";

export default function GivePage() {
  const ck = new Cookies();

  const send = async (data, event) => {
    const tkn = ck.get("token");
    const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `auth/give`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tkn}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const body = await response.json();
    if (body.success) {
      alert("Berhasil Menambahkan");
      event.target.email.value = "";
      event.target.title.value = "";
      return;
    }
    alert("Gagal");
    return;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      title: event.target.title.value,
    };
    send(data, event);
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
            <label for="title" className="w-full self-end font-semibold text-2xl">
              Title{" "}
            </label>
            <input type="text" id="title" name="title" className="w-full bg-gray-200 border-2 border-gray-300 rounded-full px-5 h-14" required autoFocus></input>

            <input type="submit" className="w-full h-16 text-white text-2xl bg-blue-900 border-2 border-gray-300 rounded-full px-5 h-14" value="Assign"></input>
          </form>
        </div>
        <p className="font-semibold text-2xl w-3/6 mt-10 z-40 text-center">
          <strong>Admin Page.</strong> Silahkan tambahkan title menggunakan email
        </p>
        <embed className="w-full fixed border-4 border-red-900 mt-14" src="/svg/login.svg"></embed>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
    </Fragment>
  );
}
