import { Fragment, useState } from "react";
import Header from "../components/Navbar";
import { SectionOne } from "../components/SectionOne";
import { SectionTwo } from "../components/SectionTwo";
import Cookies from "universal-cookie";
import Link from "next/link";
import * as cookie from "cookie";

const ck = new Cookies();

function HomePage({ data, ck, dept }) {
  const click = [
    {
      title: "Pemantauan Dana",
      icon: <embed src="/svg/one.svg"></embed>,
      link: "/cashflow",
    },
    {
      title: "RAB",
      icon: <embed src="/svg/two.svg"></embed>,
      link: "/rab/upload",
    },
    {
      title: "Kelengkapan SPJ",
      icon: <embed src="/svg/three.svg"></embed>,
      link: "/spj",
    },
  ];
  return (
    <Fragment>
      <script src="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"></script>
      <Header title="" dept={dept} />
      <div className="text-lg flex flex-col w-screen h-screen justify-center items-center pt-28">
        <embed className="w-full fixed z-0 mt-14" src="/svg/index.svg"></embed>
        <div className="container h-auto w-full mt-20 px-9 flex flex-col justify-between">
          <SectionOne />
          {dept === "bph" ? <SectionTwo /> : ""}
          <div className="flex flex-row justify-self-end justify-evenly w-full h-1/3 my-5 mt-20 items-center gap-x-10">
            {click.map((data, index) => (
              <Link href={data.link}>
                <button key={index} className="bg-gray-200 hover:bg-gray-500 drop-shadow-md rounded-md grid grid-rows-3 justify-center items-center gap-20 p-10 w-44 h-44 grid-flow-cols">
                  <div className="text-center font-semibold">{data.title}</div>
                  <div className="justify-self-center">{data.icon}</div>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <footer className="mx-32">
        <embed src="/svg/mainPageIcon.svg"></embed>
      </footer>
      <script src="https://cdn.tailwindcss.com"></script>
    </Fragment>
  );
}
export async function getServerSideProps(context) {
  // fetch departement from cookies
  const ck = cookie.parse(context.req.headers.cookie);
  const user = JSON.parse(ck.user);
  const dept = user.dept;

  // if dept is

  // fetch data
  const resp = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `home/spj/showAll`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${ck.token}`,
      "Content-Type": "application/json",
    },
  });
  const tmp = await resp.json();
  const data = tmp.spj;

  return {
    props: { data, ck, dept },
  };
}

export default HomePage;
