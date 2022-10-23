import { Fragment } from "react";
import Head from "next/head";
import Header from "../../components/Navbar";
import Table from "../../components/Table";

function DetailSpj() {
  return (
    <Fragment>
      <Head>
        <title>Detail Kelendgkapan SPJ</title>
        {/* buat ikon */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <Header title="Detail Kelengkapan SPJ" role="adkesmah" />
      <main className="container flex justify-center items-center h-screen">
        <section className="bg-gray-100 w-2/3 h-3/6 p-3 rounded-lg drop-shadow-lg ">
          <Table title="detail" />
        </section>
      </main>
      {/* Buat Tailwind */}
      <script src="https://cdn.tailwindcss.com"></script>
    </Fragment>
  );
}
export default DetailSpj;
