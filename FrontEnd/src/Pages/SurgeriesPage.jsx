import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Surgery } from "../StaticAPI/ApiData";
import HOC from "../Components/HOC";

function SurgeriesPage() {
  const [searchsurgery, setSearchsurgery] = useState("");

  const filterSurgery = Surgery.filter((e) => {
    return e.name.toLowerCase().includes(searchsurgery.toLowerCase());
  });
  const handleSearch = (e) => {
    setSearchsurgery(e.target.value);
  };
  return (
    <>
      <div className="bg-sky-100 w-[80%] m-auto rounded-md mt-10 ">
        <div className="flex justify-between gap-10 px-16 pt-16  ">
          <div className="">
            <h1 className="text-3xl font-bold">
              Discounted booking with{" "}
              <span className="text-yellow-300 font-bold">
                {" "}
                Leading Surgeons
              </span>{" "}
              Anytime, Anywhere
            </h1>
            <div className="  flex rounded  border border-blue-900 my-10 ">
              <input
                type="text"
                placeholder="Search for surgeries or Procedures"
                name=""
                id=""
                value={searchsurgery}
                onChange={handleSearch}
                className='w-full rounded border-none outline-none p-2 text-lg" placeholder="No border input"'
              />
              <button type="submit" className="px-4">
                {" "}
                <IoSearchSharp className="text-xl " />
              </button>
            </div>
          </div>
          <div className="w-[30%] h-full">
            <img
              src="https://d1t78adged64l7.cloudfront.net/dist/images/surgery-doc.webp?v=1720447870448"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-[80%] m-auto my-8">
      <h1 className="text-xl font-semibold pb-3">Choose Surgery Kind</h1>
        <div className="p-7 border rounded shadow">
        <div className="flex flex-wrap justify-between gap-16">
          {/* when i simply show all suegery items so i will replace Surgery insted of filterSurgery  */}
          {filterSurgery.map((e) => (
            <div key={e.id} className=" w-24 px- flex  flex-col  justify-center items-center cursor-pointer ">
              <div className="w-20 h-20 flex justify-center rounded-full bg-blue-50 items-center">
              <img src={e.image} alt="" className=" w-12 h-12 " />
              </div>
              <p className="text-center">{e.name}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
}

export default HOC(SurgeriesPage);
