export const SectionOne = ({ stat }) => {
  const data = [
    {
      title: "Pemasukan",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 stroke-1 stroke-yellow-500 fill-yellow-500 opacity-80">
          <path
            fill-rule="evenodd"
            d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z"
            clip-rule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Selisih",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-1 stroke-yellow-500 fill-yellow-500 opacity-80">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
    },
    {
      title: "Pengeluaran",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-8 h-8 stroke-2 stroke-yellow-500  fill-white  opacity-80">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
        </svg>
      ),
    },
  ];
  return (
    <div className="flex flex-row justify-evenly w-full my-5 mb-20 gap-x-20">
      {data.map((data, index) => (
        <div className="drop-shadow bg-yellow-100 z-40 w-3/12 rounded-xl opacity-80 grid grid-rows-3 grid-flow-col p-5 w-4/12">
          <div className="row-span-3 col-span-1 w-20 h-20 self-center mx-auto bg-white rounded-full grid justify-center items-center">{data.icon}</div>
          <div className="font-medium text-xl">{data.title}</div>
          <div className=" row-span-2 flex items-center">
            <strong className="text-2xl">
              Rp {index == 0 ? stat[0].pemasukan : ""}
              {index == 2 ? stat[0].pengeluaran : ""}
              {index == 1 ? stat[0].selisih : ""}
              ,-
            </strong>
          </div>
        </div>
      ))}
    </div>
  );
};
