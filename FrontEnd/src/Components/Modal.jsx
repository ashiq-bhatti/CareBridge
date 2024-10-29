import React, { useState } from "react";

function BookAppointment() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
     

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative p-12 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 border-b rounded-t">
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 1"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-">
                <div className="p-4 ">
                  <h1 className="text-xl font-semibold text-center pb-3 pt-6">
                    Enter your Phone Number
                  </h1>
                  <p className="pb-4 text-slate-400">
                    We share this information with the doctor
                  </p>
                  <div className="flex rounded border my-10 p-1">
                    <div className="">
                      <button
                        type="button"
                        className="bg-gray-500 py-2 px-2 rounded "
                      >
                        +92{" "}
                      </button>
                    </div>
                    <input
                      type="number"
                      name=""
                      id=""
                      className='w-full rounded border-none outline-none p-2 text-lg" placeholder="No border input"'
                    />
                  </div>
                  <div>
                    <p className="font-semibold py-1">Your appointment</p>
                    <div className="flex gap-28">
                      <div className="flex gap-9">
                        <div className="bg-slate-500 rounded-full w-12 h-12 flex items-center justify-center">
                          <img
                            className="w-12 h-12 rounded-full mx-auto"
                            src={fe}
                            alt="Doctor"
                          />
                        </div>
                        <div className="py-3">
                          <h1 className="text-sm font-semibold">
                            Prof. Dr. Ambreen Akhtar
                          </h1>
                        </div>
                      </div>
                      <div>Time show here</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="bg-blue-950 text-white text-center rounded py-3 mt-16 mb-8 w-full "
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BookAppointment;
