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
  const format = (price) => {
    let idr = new Intl.NumberFormat("en-EN");
    return "Rp. " + idr.format(price) + ",-";
  };
  return (
    <Fragment>
      <Head>
        <title>Cashflow</title>
        {/* Buat Ikon */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <Header title="Cashflow" dept={dept} />
      <main className="container flex flex-col justify-center items-center h-auto gap-20 pt-20">
        <div className="w-2/3 h-auto">
          <div className="flex flex-row justify-between">
            {/* Pendapatan Label */}
            <span className="w-2/3 flex justify-start self-center ">
              <span id="real" className="drop-shadow flex justify-center self-end w-auto h-12 my-2 px-5 bg-green-500 grid rounded-xl">
                <span id="dept" className="uppercase font-semibold self-center z-40 ">
                  Pendapatan
                </span>
              </span>
            </span>
            <span className="self-center">
              <Link href={`/cashflow/upload/${encodeURIComponent("+")}`}>
                <button className="bg-gray-500 px-2 text-white">&#43;</button>
              </Link>
            </span>
          </div>
          {/* Tabel Pendapatan */}
          <section className="bg-gray-100 h-auto p-3 rounded-lg drop-shadow-lg ">
            <table className="w-full h-auto">
              <thead className="border-y-2 border-gray-500">
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
                      <td>{format(data.amount)}</td>
                      <td>{format(data.total)}</td>
                    </tr>
                  );
                })}
                <tr className="font-bold mt-30 border-y-2 border-gray-500">
                  {data3.map((data3, index) => {
                    return (
                      <>
                        <td>Total Pemasukan</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{format(data3.pemasukan)}</td>
                      </>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </section>
        </div>
        <div className="w-full w-2/3 h-auto gap-2">
          <div className="flex flex-row justify-between">
            {/* Pengeluaran Label */}
            <span className="w-2/3 flex justify-start self-center test">
              <span id="real" className="drop-shadow flex justify-center self-end w-auto h-12 my-2 px-5 bg-red-500 grid rounded-xl">
                <span id="dept" className="uppercase font-semibold self-center z-40 ">
                  Pengeluaran
                </span>
              </span>
            </span>
            <span className="self-center">
              <Link href={`/cashflow/upload/${encodeURIComponent("-")}`}>
                <button className="bg-gray-500 px-2 text-white">&#43;</button>
              </Link>
            </span>
          </div>
          {/* Tabel Pengeluaran */}
          <section className="bg-gray-100 h-3/6 p-3 rounded-lg drop-shadow-lg ">
            <table className="w-full h-auto ">
              <thead className="border-y-2 border-gray-500">
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
                      <td>{format(data2.amount)}</td>
                      <td>{format(data2.total)}</td>
                    </tr>
                  );
                })}
                <tr className="font-bold mt-30 border-y-2 border-gray-500">
                  {data3.map((data3, index) => {
                    return (
                      <>
                        <td>Total Pengeluaran</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{format(data3.pengeluaran)}</td>
                      </>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        <div className="flex flex-col justify-start w-2/3 my-5 mb-20 gap-x-20">
          <div className="flex flex-col gap-2">
            <span>
              <strong className="text-med">Pemasukan &nbsp;&nbsp;&nbsp;:&nbsp; </strong>
              {format(data3[0].pemasukan)}
            </span>
            <span>
              <strong className="text-med">Pengeluaran &nbsp;:&nbsp; </strong>
              {format(data3[0].pengeluaran)}
            </span>
            <span>
              <strong className="text-med">Selisih &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </strong>
              {format(data3[0].selisih)}
            </span>
          </div>
        </div>
      </main>
      {/* Buat Tailwind */}
      <script src="https://cdn.tailwindcss.com"></script>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  // fetch departement from cookies
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

  return {
    props: { data, ck, dept, data2, data3 },
  };
}
export default Record;
