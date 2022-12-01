import { Fragment } from "react";
import Header from "../../../components/Navbar";
import Cookies from "universal-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import * as cookie from "cookie";

function UploadFile({ dept }) {
  const router = useRouter();
  const send = async (e) => {
    e.preventDefault();
    const data = {
      amount: Number(e.target.amount.value),
      quantity: Number(e.target.quantity.value),
      note: e.target.note.value,
      extraNote: e.target.extraNote.value,
      rType: router.query.param,
    };
    let ck = new Cookies();
    const resp = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `home/record/add`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ck.get("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const body = await resp.json();
    if (resp.ok) {
      alert("Upload Berhasil");
      e.target.amount.value = null;
      e.target.quantity.value = null;
      e.target.note.value = null;
      e.target.extraNote.value = null;
    } else alert(body.message);
    console.log(resp, body);
  };
  return (
    <Fragment>
      <Header title="Upload Cashflow" dept={dept} />

      <div className=" h-screen bg-white-2300 flex flex-row justify-evenly items-center pt-40">
        <div className="flex flex-col justify-center items-center bg-gray-300 w-8/12 h-3/6 p-3 rounded-lg drop-shadow-lg align-top self-start border-2 border-black">
          <form onSubmit={send} className="h-full w-full flex flex-col items-center place-content-center gap-5 font-semibold">
            <div className="">
              <label for="note" className="mx-2">
                Nama
              </label>
              <input id="note" type="text" name="note" required autoFocus />
            </div>
            <div>
              <label for="extraNote" className="mx-2">
                Detail
              </label>
              <input id="extraNote" type="text" name="extraNote" required autoFocus />
            </div>
            <div>
              <label for="quantity" className="mx-2">
                Quantity
              </label>
              <input id="quantity" type="number" name="quantity" required autoFocus />
            </div>
            <div>
              <label for="amount" className="mx-2">
                Amount
              </label>
              <input id="amount" type="number" name="amount" required autoFocus />
            </div>
            {/* <div>
              <input type="Radio" name="rType" value="+" required />
              Pemasukan
              <input type="Radio" name="rType" value="-" required />
              Pengeluaran
            </div> */}
            <div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring mr-10 px-6 py-2 rounded-lg">
                Upload
              </button>
              <Link href="/cashflow">
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
export async function getServerSideProps(context) {
  // fetch departement from cookies
  const ck = cookie.parse(context.req.headers.cookie);
  const user = JSON.parse(ck.user);
  const dept = user.dept;

  return {
    props: { dept },
  };
}
export default UploadFile;
