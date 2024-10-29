import React from "react";
import { IoIosStarOutline } from "react-icons/io";

function CustomerReview() {
  return (
    <>
        <div className=" shadow flex flex-col justify-center rounded-md p-5 bg-gradient-to-l from-blue-50 to-blue-200 ">
          <p className="pb-5">
            Great platform, very efficient and works really well on both phone
            and web. I think this is the most easiest way of booking
            appointments in Pakistan as it has made the whole process much more
            efficient.
          </p>
          <div className="flex  justify-center text-blue-950 ">
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
          </div>
        </div>
    </>
    
  );
}

export default CustomerReview;
