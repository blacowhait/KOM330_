import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Header from "../../components/Navbar";
import * as cookie from "cookie";
import Link from "next/link";
import Cookies from "universal-cookie";
const ck = new Cookies();

const download = (id) => {
  fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `home/spj/download/` + id, {
    method: "GET",
    headers: { Authorization: `Bearer ${ck.get("token")}` },
  })
    .then((resp) => resp.blob())
    .then((blob) => {
      var file = window.URL.createObjectURL(blob);
      window.location.assign(file);
    });
  return;
};
function Spj({ data, ck, dept }) {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    // This forces a rerender, so the date is rendered
    // the second time but not the first
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
  }
  return (
    <Fragment>
      <Head>
        <title>Kelengkapan SPJ</title>
        {/* Buat Ikon */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <Header title="Kelengkapan SPJ" dept={dept} />
      <main className="container flex justify-center items-center h-screen">
        <section className="bg-gray-100 w-2/3 h-3/6 p-3 rounded-lg drop-shadow-lg">
          <table className="w-full h-auto">
            <thead>
              <tr>
                <th>No.</th>
                <th>Nama Proker</th>
                <th>Tanggal Upload</th>
                <th>Status</th>
                <th>Komen</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody id="body" className="text-center align-top self-start">
              {data.map((data, index) => {
                const dates = new Date(`${data.createdAt}`);
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{dates.toLocaleDateString()}</td>
                    <td>{data.status}</td>
                    <td>{data.comment}</td>
                    <td className="text-lg px-3 ">
                      <button onClick={download(data._id)} className="fa fa-download"></button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td>
                  <Link href="/spj/upload">
                    <button className="bg-gray-500 px-2 text-white">&#43;</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
      {/* Buat Tailwind */}
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
  const dept = user.dept;

  // fetch data
  const resp = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `home/spj/showAll`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${ck.token}`,
      "Content-Type": "application/json",
    },
  });
  const tmp = await resp.json();
  console.log(tmp)
  const data = tmp.spj;

  return {
    props: { data, ck, dept },
  };
}
export default Spj;