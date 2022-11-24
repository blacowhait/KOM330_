import { Fragment } from "react";
import Header from "../../components/Navbar";

function UploadFile() {
  return (
    <Fragment>
      <nav>
        <Header />
      </nav>
      <div className=" h-screen bg-white-300 flex flex-row justify-evenly items-center pt-40">
        <div className="flex flex-col justify-center items-center bg-gray-300 w-8/12 h-3/6 p-3 rounded-lg drop-shadow-lg align-top self-start">
          <form className="h-full w-full flex flex-col items-center place-content-center">
            <div>
              <input type="file" />
              <h2>Upload File</h2>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring mr-10 px-6 py-2 rounded-lg">Upload</button>
              <button className="bg-white hover:bg-white  focus:outline-none focus:ring py-2 rounded-lg px-6 py-2   ">Cancel</button>
            </div>
          </form>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
    </Fragment>
  );
}

export default UploadFile;
