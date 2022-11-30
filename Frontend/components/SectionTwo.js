import { useRouter } from "next/router";
import Cookies from "universal-cookie";

const ck = new Cookies();

export const SectionTwo = () => {
  const router = useRouter();
  const setDept = (dept) => {
    ck.set("dept", dept);
    alert(`Departemen ` + dept + ` dipilih!`);
  };
  const deptr = ["psdm", "medbrand", "imbang", "dpor", "sainpres", "bismit", "ekris", "bph"];
  return (
    <div className="flex flex-row justify-center w-full h-full my-5">
      {deptr.map((data) => (
        <button onClick={() => setDept(data)} className="w-2/3 flex justify-start self-center ">
          <span id="real" className="drop-shadow flex justify-center self-end w-auto h-12 my-2 px-5 bg-white grid rounded-xl  border border-sky-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring mr-10">
            <span id="dept" className="uppercase font-semibold self-center z-40 ">
              {data}
            </span>
          </span>
        </button>
      ))}
    </div>
  );
};
