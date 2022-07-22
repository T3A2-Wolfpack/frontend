import { useState } from "react";
import AddComment from "./comments/AddComment";
import Rating from "@mui/material/Rating";

export default function TastingDetailsModal({ comment }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Show modal */}
      <button
        className="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        View
      </button>
      {showModal ? (
        <>
          <div className="md:min-w-96 mx-6 mt-10 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="bg-orange-200 flex flex-col items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <Rating
                    value={comment.finalRating}
                    precision={0.25}
                    readOnly
                  ></Rating>
                  <span className="text-3xl font-semibold mt-2">
                    User name's Tasting
                  </span>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto flex-col">
                  <div className="flex justify-between">
                    <span>Visual</span>
                    <Rating
                      value={comment.visual.rating}
                      precision={0.25}
                      readOnly
                    ></Rating>
                  </div>
                  <p className="text-sm my-1">{comment.visual.comment}</p>

                  <div className="flex justify-between">
                    <span>Nose</span>
                    <Rating
                      value={comment.nose.rating}
                      precision={0.25}
                      readOnly
                    ></Rating>
                  </div>
                  <p className="text-sm my-1">{comment.nose.comment}</p>

                  <div className="flex justify-between">
                    <span>Palate</span>
                    <Rating
                      value={comment.palate.rating}
                      precision={0.25}
                      readOnly
                    ></Rating>
                  </div>
                  <p className="text-sm my-1">{comment.palate.comment}</p>

                  <div className="flex justify-between">
                    <span>Finish</span>
                    <Rating
                      value={comment.finish.rating}
                      precision={0.25}
                      readOnly
                    ></Rating>
                  </div>
                  <p className="text-sm my-1">{comment.finish.comment}</p>

                  <div className="flex justify-between">
                    <span >
                      Final Rating
                    </span>
                    <Rating
                      value={comment.finalRating}
                      precision={0.25}
                      readOnly
                    ></Rating>
                  </div>
                  <p className="text-sm my-1">{comment.finalComment}</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
