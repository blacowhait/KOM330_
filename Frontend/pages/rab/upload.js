import { Fragment } from "react";
import Header from "../../components/Navbar";
import * as cookie from "cookie";
import Link from "next/link";

function UploadFile({ tkn, dept }) {
  const send = async (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("rabFile", document.getElementById("file").files[0]);
    form.append("name", e.target.name.value);

    const resp = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `home/rab/add`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tkn}`,
      },
      body: form,
    });
    const body = await resp.json();
    if (resp.ok) {
      alert("Upload Berhasil");
      e.target.file.value = null;
      e.target.name.value = null;
    } else alert(body.message);
    console.log(resp, body);
  };
  return (
    <Fragment>
      <nav>
        <Header title="Upload File SPJ" dept={dept} />
      </nav>
      <div className=" h-screen bg-white-2300 flex flex-row justify-evenly items-center pt-40">
        <div className="flex flex-col justify-center items-center bg-gray-300 w-8/12 h-3/6 p-3 rounded-lg drop-shadow-lg align-top self-start">
          <form onSubmit={send} className="h-full w-full flex flex-col items-center place-content-center gap-5">
            <div>
              <label for="name" className="mx-2">
                Nama Proker
              </label>
              <input id="name" type="text" name="name" required autoFocus />
            </div>
            <div>
              <label for="file">Upload File</label> <br></br>
              <input id="file" type="file" name="file" required autoFocus />
            </div>
            <div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring mr-10 px-6 py-2 rounded-lg">
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
export async function getServerSideProps(context) {
  console.log("Pre-Renders");
  // fetch departement from cookies
  console.log(context.req.headers.cookie);
  const ck = cookie.parse(context.req.headers.cookie);
  const user = JSON.parse(ck.user);
  const tkn = ck.token;
  const dept = user.dept;

  return {
    props: { tkn, dept },
  };
}
export default UploadFile;
