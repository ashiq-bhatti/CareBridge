import React from "react";
import fe from "../imgHelpTodat/femaledoc.avif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BookAppointment() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(`Slider Changed to: ${index + 1}`);
    }
  };

  return (
    <>
      <div className="bg-slate-50 py-5">
        <div className="drCard bg-white flex justify-between items-center shadow-sm border rounded w-[60%] m-auto ">
          <div className="flex gap-9">
            <div className="bg-slate-500 rounded-full w-24 h-24 flex items-center justify-center">
              <img className="w-24 h-24 rounded-full mx-auto" src={fe} alt="Doctor" />
            </div>
            <div>
              <div className="py-3">
                <h1 className="text-xl font-semibold">Prof. Dr. Ambreen Akhtar</h1>
                <p className="py-2"> Video Consultation (Online) </p>
                <p className="font-semibold">Fee: Rs. 1,400</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border shadow-md bg-gray-300 rounded w-[60%] h-2 m-auto p-8">
          <div className="slider-container">
            <Slider {...settings} >
              <div>
                <h3> Today, 12</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
              <div>
                <h3>7</h3>
              </div>
              <div>
                <h3>8</h3>
              </div>
              <div>
                <h3>9</h3>
              </div>
            </Slider>
          </div>
        </div>
        <div className="border shadow-md rounded w-[60%] m-auto p-8">
          <h1 className="text-slate-500 pb-5">Morning Slots</h1>
          <div className="flex flex-wrap space-x-8">
            <button
              type="button"
              className="rounded border border-yellow-400 hover:border-blue-900 py-2 px-4"
            >
              10:00 AM
            </button>
            <button
              type="button"
              className="rounded border border-yellow-400 hover:border-blue-900 py-2 px-4"
            >
              10:00 AM
            </button>
            <button
              type="button"
              className="rounded border border-yellow-400 hover:border-blue-900 py-2 px-4"
            >
              10:00 AM
            </button>
            <button
              type="button"
              className="rounded border border-yellow-400 hover:border-blue-900 py-2 px-4"
            >
              10:00 AM
            </button>
          </div>
        </div>
        <div className="border shadow-md rounded w-[60%] m-auto p-8">
          <h1 className="text-slate-500 pb-5">Afternoon Slots</h1>
          <div className="flex flex-wrap space-x-8">
            <button
              type="button"
              className="rounded border border-yellow-400 hover:border-blue-900 py-2 px-4"
            >
              10:00 AM
            </button>
            <button
              type="button"
              className="rounded border border-yellow-400 hover:border-blue-900 py-2 px-4"
            >
              10:00 AM
            </button>
            <button
              type="button"
              className="rounded border border-yellow-400 hover:border-blue-900 py-2 px-4"
            >
              10:00 AM
            </button>
            <button
              type="button"
              className="rounded border border-yellow-400 hover:border-blue-900 py-2 px-4"
            >
              10:00 AM
            </button>
          </div>
        </div>
        <div className="border shadow-md rounded w-[60%] m-auto p-8">
          <h1 className="text-slate-500 pb-5">Evening Slots</h1>
          <div className="flex flex-wrap space-x-8">
            <button
              type="button"
              className="rounded border border-yellow-400 hover:border-blue-900 py-2 px-4"
            >
              10:00 AM
            </button>
            <button
              type="button"
              className="rounded border border-yellow-400 hover:border-blue-900 py-2 px-4"
            >
              10:00 AM
            </button>
            <button
              type="button"
              className="rounded border border-yellow-400 hover:border-blue-900 py-2 px-4"
            >
              10:00 AM
            </button>
            <button
              type="button"
              className="rounded border border-yellow-400 hover:border-blue-900 py-2 px-4"
            >
              10:00 AM
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookAppointment;
