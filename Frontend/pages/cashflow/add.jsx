import { Fragment } from "react";
import Header from "../../components/Navbar";
import Cookies from "universal-cookie";
import Link from "next/link";

function UploadFile() {
  const send = async (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("amount", e.target.amount.value);
    form.append("quantity", e.target.quantity.value);
    form.append("note", e.target.note.value);
    form.append("extraNote", e.target.extranote.value);
    form.append("rType", e.target.rType.value);

    let ck = new Cookies();
    const resp = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `home/spj/add`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ck.get("token")}`,
      },
      body: form,
    });
    const body = await resp.json();
    if (resp.ok) {
      alert("Upload Berhasil");
      e.target.amount.value = null;
      e.target.quantity.value = null;
      e.target.note.value = null;
      e.target.extranote.value = null;
      e.target.rType.value = null;
    } else alert(body.message);
    console.log(resp, body);
  };
  return (
    <Fragment>
      <nav>
        <Header title="Menambah Catatan Keuangan" />
      </nav>
      <div classname=" h-screen bg-white-2300 flex flex-row justify-evenly items-center pt-40">
        <div classname="flex flex-col justify-center items-center bg-gray-300 w-8/12 h-3/6 p-3 rounded-lg drop-shadow-lg align-top self-start">
          <form onSubmit={send} classname="h-full w-full flex flex-col items-center place-content-center gap-5">
            <div>
              <label for="note" classname="mx-2">Nama</label>
              <input id="note" type="text" name="note" required autoFocus />
            </div>
            <div>
              <label for="extranote" classname="mx-2">detail</label>
              <input id="extranote" type="text" name="extranote" required autoFocus />
            </div>
            <div>
              <label for="quantity" classname="mx-2">quantity</label>
              <input id="quantity" type="text" name="quantity" required autoFocus />
            </div>
            <div>
              <label for="amount" classname="mx-2">amount</label>
              <input id="amount" type="text" name="amount" required autoFocus />
            </div>
            <div>
              <input type="Radio" name="rType" value="+"/>Pemasukan
              <input type="Radio" name="rType" value="-"/>Pengeluaran
            </div>
            <div>
              <button type="submit" classname="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring mr-10 px-6 py-2 rounded-lg">
                Upload
              </button>
              <Link href="/spj">
                <button classame="bg-white hover:bg-white  focus:outline-none focus:ring py-2 rounded-lg px-6 py-2">Cancel</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
    </Fragment>
  );
}

export default UploadFile;
