import { Fragment } from "react";
import Header from "../../components/Navbar";
import * as cookie from "cookie";
import Link from "next/link";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";

const ck = new Cookies();

function UploadFile({ tkn, dept }) {
  const router = useRouter();
  const send = async (e) => {
    e.preventDefault();

    const id = ck.get("id");
    const data = {
      status: e.target.status.value,
      notes: e.target.notes.value,
    };
    const resp = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `home/spj/check/` + id, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tkn}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const body = await resp.json();
    if (resp.ok) {
      alert("Upload Berhasil");
      ck.remove("id");
      e.target.status.value = null;
      e.target.notes.value = null;
      router.push("/spj");
    } else alert(body.message);
    console.log(resp, body);
  };
  return (
    <Fragment>
      <nav>
        <Header title="Revisi SPJ" dept={dept} />
      </nav>
      <div className=" h-screen bg-white-2300 flex flex-row justify-evenly items-center pt-40">
        <div className="flex flex-col justify-center items-center bg-gray-300 w-8/12 h-3/6 p-3 rounded-lg drop-shadow-lg align-top self-start">
          <form onSubmit={send} className="h-full w-full flex flex-col items-center place-content-center gap-5">
            <div>
              <label for="status" className="mx-2">
                Status
              </label>
              <input id="status" type="text" name="status" required autoFocus />
            </div>
            <div>
              <label for="notes" className="mx-2">
                Notes
              </label>
              <input id="notes" type="text" name="notes" required autoFocus />
            </div>
            <div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring mr-10 px-6 py-2 rounded-lg">
                Upload Revisi
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
export async function getServerSideProps(context) {
  console.log("Pre-Renders");
  // fetch departement from cookies
  console.log(context.req.headers.cookie);
  const ck = cookie.parse(context.req.headers.cookie);
  const user = JSON.parse(ck.user);
  const tkn = ck.token;
  const dept = user.dept;
  const id = user.id;

  return {
    props: { tkn, dept, id },
  };
}
export default UploadFile;
