import { Fragment } from "react";
import Header from "../../components/Navbar";
import Table from "../../components/Table";
function Rabrevisi() {
  return (
    <Fragment>
      <Header />
      {/* <h1 className="relative font-serif text-5xl font-medium mx-40">Cek RAB</h1> */}
      <main className="container flex justify-center items-center h-screen">
        <section className="bg-gray-100 w-2/3 h-3/6 p-3 rounded-lg drop-shadow-lg ">
          <Table title="RabRevisi" />
        </section>
      </main>
      <script src="https://cdn.tailwindcss.com"></script>
    </Fragment>
  );
}

export default Rabrevisi;
