import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import AddComment from "./comments/AddComment";

export default function TastingModal({setCurrentUser}) {
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuthContext;

  return (
    <>
      <button
        className="bg-amber-500 hover:bg-amber-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Tasting
      </button>
      {showModal ? (
        <>
          <div className="md:min-w-96 mx-6 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="bg-orange-200 flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <span className="text-3xl font-semibold">Add Tasting</span>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <AddComment
                    setShowModal={setShowModal}
                    setCurrentUser={setCurrentUser}
                  ></AddComment>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
