import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Header from "../../components/Navbar";
import * as cookie from "cookie";
import Link from "next/link";
import Cookies from "universal-cookie";
const ck = new Cookies();

function Record({ data, ck, dept, data2, data3 }) {
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
        <title>Cashflow</title>
        {/* Buat Ikon */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <Header title="Cashflow" role="adkesmah" />
      <main className="container flex justify-center items-center h-screen">
        <section className="bg-gray-100 w-2/3 h-3/6 p-3 rounded-lg drop-shadow-lg ">
          <table className="w-full h-auto">
          <thead>
            <tr>
              <th>No.</th>
              <th>Tanggal</th>
              <th>Nama</th>
              <th>Detail</th>
              <th>Quantity</th>
              <th>Harga Satuan</th>
              <th>Jumlah</th>
            </tr>
          </thead>
          <tbody className="text-center align-top self-start">
            {data.map((data, index) => {
              const dates = new Date(`${data.createdAt}`);
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{dates.toLocaleDateString()}</td>
                  <td>{data.note}</td>
                  <td>{data.extraNote}</td>
                  <td>{data.quantity}</td>
                  <td>{data.amount}</td>
                  <td>{data.total}</td>
                </tr>
              );
            })}
            <tr>
              {data3.map((data3, index) => {
                return(<td>total pemasukan {data3.pemasukan}</td>);
              })}
              <td>
                <Link href="/record/add">
                  <button className="bg-gray-500 px-2 text-white">&#43;</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="w-full h-auto">
          <thead>
            <tr>
              <th>No.</th>
              <th>Tanggal</th>
              <th>Nama</th>
              <th>Detail</th>
              <th>Quantity</th>
              <th>Harga Satuan</th>
              <th>Jumlah</th>
            </tr>
          </thead>
          <tbody className="text-center align-top self-start">
            {data2.map((data2, index) => {
              const dates = new Date(`${data2.createdAt}`);
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{dates.toLocaleDateString()}</td>
                  <td>{data2.note}</td>
                  <td>{data2.extraNote}</td>
                  <td>{data2.quantity}</td>
                  <td>{data2.amount}</td>
                  <td>{data2.total}</td>
                </tr>
              );
            })}
            <tr>
              {data3.map((data3, index) => {
                return(<td>total pengeluaran {data3.pengeluaran}</td>);
              })}
              <td>
                <Link href="/record/add">
                  <button className="bg-gray-500 px-2 text-white">&#43;</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        {data3.map((data3, index) => {
          return(<td>total pemasukan {data3.pemasukan}</td>);
        })}
        {data3.map((data3, index) => {
          return(<td>total pengeluaran {data3.pengeluaran}</td>);
        })}
        {data3.map((data3, index) => {
          return(<td>selisih {data3.selisih}</td>);
        })}
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
  const resp = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `home/record/showplus`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${ck.token}`,
      "Content-Type": "application/json",
    },
  });
  const tmp = await resp.json();
  const data = tmp.records;

  const resp1 = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `home/record/showminus`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${ck.token}`,
      "Content-Type": "application/json",
    },
  });
  const tmp1 = await resp1.json();
  const data2 = tmp1.records;

const resp2 = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `home/record/info`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${ck.token}`,
      "Content-Type": "application/json",
    },
  });
  const tmp2 = await resp2.json();
  const data3 = tmp2.data;
  console.log(data3)

  return {
    props: { data, ck, dept, data2, data3 },
  };
}
export default Record;