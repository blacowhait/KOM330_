import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Header from "../../components/Navbar";
import Cookies from "universal-cookie";
import Link from "next/link";

function Spj() {
  const [data, setData] = useState({});
  const [elmnt, setElmnt] = useState(null);
  const [date, setDate] = useState(null);

  const element = () => {
    console.log("Fungsi Element", data);
    return (
      <Fragment>
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
          <tbody className="text-center align-top self-start">
            {data.map((data, index) => {
              setDate(null);
              setDate(new Date(`${data.createdAt}`));
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{date.toLocaleDateString()}</td>
                  <td>{data.status}</td>
                  <td>{data.comment}</td>
                  <td className="text-lg px-3 ">
                    <Link href={`uploads/spj/${data.spjFile}`}>
                      <a className="fa fa-download"></a>
                    </Link>
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
      </Fragment>
    );
  };
  useEffect(() => {
    const ck = new Cookies();
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `home/spj/showAll`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ck.get("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setData(result.spj);
        setElmnt(element(result.spj));
      });
    // .catch((err) => alert(err));
  }, [data]);

  return (
    <Fragment>
      <Head>
        <title>Kelengkapan SPJ</title>
        {/* Buat Ikon */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <Header title="Kelengkapan SPJ" />
      <main className="container flex justify-center items-center h-screen">
        <section className="bg-gray-100 w-2/3 h-3/6 p-3 rounded-lg drop-shadow-lg">{elmnt}</section>
      </main>
      {/* Buat Tailwind */}
      <script src="https://cdn.tailwindcss.com"></script>
    </Fragment>
  );
}
export default Spj;
