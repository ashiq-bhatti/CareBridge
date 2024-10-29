import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import gynecologist from "../imgConsult_doct/gynecologist.png";
import blood from "../imgConsult_doct/blood.png";
import child from "../imgConsult_doct/child.png";
import ent from "../imgConsult_doct/ent.png";
import eye from "../imgConsult_doct/eye.png";
import orthopedic from "../imgConsult_doct/orthopedic.png";
import skin from "../imgConsult_doct/skin.png";
import acne from "../imgsSearchDoctorByCondition/acne.png";
import diarrhea from "../imgsSearchDoctorByCondition/diarrhea.png";
import fever from "../imgsSearchDoctorByCondition/fever.png";
import highhblood from "../imgsSearchDoctorByCondition/highblood.png";
import piles from "../imgsSearchDoctorByCondition/piles.png";
import heartAttack from "../imgsSearchDoctorByCondition/heartAttack.png";
import pregnancy from "../imgsSearchDoctorByCondition/pregnancy.png";
import Marquee from "react-fast-marquee";
import abbott from "../imgPartnerLogo/abbott.png";
import sony from "../imgPartnerLogo/sony.png";
import tcs from "../imgPartnerLogo/tcs.png";
import zameen from "../imgPartnerLogo/zameen.png";
import hbl from "../imgPartnerLogo/hbl.jfif";
import HOC from "../Components/HOC";
import CustomerReview from "../Components/CustomerReview";
import { Blog } from "../StaticAPI/ApiData";
import AllSpecialityModal from "../Components/Modals/AllSpecialityModal";
import { useSelector } from "react-redux";


const HomePage = () => {
const user = useSelector((state)=>state.Auth.user)
console.log(user)


  const [showAllSpecialityModal, setShowAllSpecialityModal] = useState(false);

  return (
    <>
      {/* Find doctor section Start*/}

      <div className="w-full h-72 bg-gradient-to-b from-sky-100  flex flex-col justify-center">
        <div className="w-[90%] md:w-[70%] mx-auto text-center text-2xl md:text-5xl mb-5 font-semibold p-4 md:p-8">
          <h1>
           Find and Book the Best{" "}
            <span className="text-blue-500">Doctors or Hospital</span> near you
          </h1>
        </div>

        {/* <div className="w-[40%] mx-auto flex rounded border my-10 p-1">
          <input
            type="text"
            placeholder="City"
            name=""
            id=""
            className='w-full rounded border-none outline-none p-2 text-lg" placeholder="No border input"'
          />
          <hr className="w-1 h-7 self-center bg-slate-600" />
          <input
            type="text"
            placeholder="Doctor , Hospital , Spacialisty"
            name=""
            id=""
            className='w-full rounded border-none outline-none p-2 text-lg" placeholder="No border input"'
          />
          <button type="submit" className="px-4">
            {" "}
            <IoSearchSharp className="text-xl " />
          </button>
        </div> */}
        {/* {
          Blog.filter((e)=>{
            if (searchItem == '') {
              return e;
            } else if(e.speciality.toLocaleLowerCase().includes(searchItem.toLowerCase())){
              return e;
            }
          })
        } */}
      </div>

      {/* How can we help you today  cardes Start*/}

      <div className="w-full">
        <div className="w-[88%] mx-auto  p-4">
          <h1 className="font-bold text-lg pb-4">How can we help you today?</h1>
          <div
            id="both-left-right-cards"
            className="flex flex-col md:flex-row gap-4"
          >
            <div id="left-cards" className="flex flex-col md:w-[50%] gap-2">
              <div className="flex flex-col md:flex-row gap-2">               
                <div onClick={()=>{setShowAllSpecialityModal(true)}}
                className="flex justify-between bg-yellow-200 rounded cursor-pointer  flex-1">
                  <div className="pl-3 pt-2">
                    <h1 className="text-blue-950 font-semibold ">
                      Video Consultation
                    </h1>
                    <p className="">PMC Verified Doctors</p>
                  </div>
                  <img
                    className="h-24 md:h-36 "
                    src="../../images/onlinedoctor.avif"
                    alt=""
                  />
                </div>
                <div className="flex justify-between bg-yellow-200 rounded  flex-1">
                  <div className="pl-3 pt-2">
                    <h1 className="text-blue-950 font-semibold">
                      In-clinic Visit
                    </h1>
                    <p>Book Appointment</p>
                  </div>
                  <img
                    className="h-24 md:h-36"
                    src="../../images/femaledoc.avif"
                    alt=""
                  />
                </div>
              </div>
              <Link to='/blogPage'>
              <div className="flex justify-between p-0 bg-green-200 rounded ">
                <div className="pl-3 pt-2">
                  <h1 className="text-blue-950 font-semibold">Health Blogs</h1>
                  <p>Read Blogs</p>
                </div>
                <img
                  className="h-20 md:h-36"
                  src="../../images/blog.png"
                  alt=""
                />
              </div>
              </Link>
            </div>
            <div id="right-cards" className="flex flex-col md:w-[50%] gap-2">
              <div className="flex justify-between bg-green-200 rounded p-0">
                <div className="pl-3 pt-2">
                  <h1 className="text-blue-950 font-semibold ">Doctors</h1>
                  <p>Find Best Doctors</p>
                </div>
                <img
                  className="h-24 md:h-36"
                  src="../../images/instant-img.avif"
                  alt=""
                />
              </div>
              <div className="flex flex-wrap gap-2  mx-2 mb-2 ">
                <div className="border-b-2  flex flex-col items-center rounded-md   p-2  md:w-32">
                  <div className="bg-yellow-200 rounded-t-md w-full flex justify-center">
                    <img
                      className="w-20"
                      src="../../images/labs-images.avif"
                      alt=""
                    />
                  </div>
                  <h1 className="text-blue-950 text-center font-bold mt-1">
                    Labs
                  </h1>
                </div>
                <div className=" border-b-2 flex flex-col items-center rounded-md bg-white p-2 md:w-32">
                  <div className="bg-yellow-200 w-full flex justify-center">
                    <img
                      className="w-20"
                      src="../../images/waight-loss-man.avif"
                      alt=""
                    />
                  </div>
                  <h1 className="text-blue-950 text-center font-bold mt-1">
                    Weight Loss
                  </h1>
                </div>
                <div className="border-b-2 flex flex-col items-center rounded-md bg-white p-2 md:w-32">
                  <img
                    className="h-24"
                    src="../../images/register-man.avif"
                    alt=""
                  />
                  <h1 className="text-blue-950 text-center font-bold mt-1">
                    Hospitals
                  </h1>
                </div>
                <Link to='/surgeriesPage'>
                <div className="border-b-2 flex flex-col items-center rounded-md bg-white p-2 md:w-32">
                  <img
                    className="h-24"
                    src="../../images/surgries.avif"
                    alt=""
                  />
                  <h1 className="text-blue-950 text-center font-bold mt-1">
                    Surgeries
                  </h1>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Consult best doctors online Start*/}

      <div className="w-[88%] m-auto ">
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold ">
            Consult best doctors online
          </h1>
            <h1 
            onClick={() => setShowAllSpecialityModal(true)}
             className="text-xl font-semibold cursor-pointer text-blue-950">View All</h1>
        </div>
        <div className="flex flex-wrap gap-16 my-10">
          <Link to="#">
            <div className="flex flex-col w-28">
              <img src={gynecologist} alt="" />
              <h1 className="py-4">Gynecologist</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col w-28">
              <img src={blood} alt="" />
              <h1 className="py-4 pl-4">Diabetes Specialist</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col w-28">
              <img src={eye} alt="" />
              <h1 className="py-4">Eye Specialist</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col w-28">
              <img src={ent} alt="" />
              <h1 className="py-4">Ent Specialist</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col w-28">
              <img src={child} alt="" />
              <h1 className="py-4">Child Specialist</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col w-28">
              <img src={orthopedic} alt="" />
              <h1 className="py-4">Orthopedic Specialist</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col w-28">
              <img src={skin} alt="" />
              <h1 className="py-4">Skin Specialist</h1>
            </div>
          </Link>
        </div>
        <AllSpecialityModal
          show={showAllSpecialityModal}
          close={() => setShowAllSpecialityModal(!showAllSpecialityModal)}
        />
      </div>

      {/* Search doctor by condition */}

      <div className="w-[88%] m-auto">
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold mb-4">
            Search doctor by condition
          </h1>
          <Link to="#">
            {" "}
            <h1 className="text-xl font-semibold text-blue-950">View All</h1>
          </Link>
        </div>
        <div className="flex flex-wrap gap-16 my-10">
          <Link to="#">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-t from-blue-50 to-blue-200 rounded-full flex items-center justify-center">
                <img className="w-9" src={acne} alt="" />
              </div>
              <h1 className="py-4">Acne</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-t from-blue-50 to-blue-200 rounded-full flex items-center justify-center">
                <img className="w-9" src={highhblood} alt="" />
              </div>
              <h1 className="py-4">High Blood Pressure</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-t from-blue-50 to-blue-200 rounded-full flex items-center justify-center">
                <img className="w-9" src={piles} alt="" />
              </div>
              <h1 className="py-4">Piles</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-t from-blue-50 to-blue-200 rounded-full flex items-center justify-center">
                <img className="w-9" src={heartAttack} alt="" />
              </div>
              <h1 className="py-4">Heart Attack</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-t from-blue-50 to-blue-200 rounded-full flex items-center justify-center">
                <img className="w-9" src={pregnancy} alt="" />
              </div>
              <h1 className="py-4">Pregnancy</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-t from-blue-50 to-blue-200 rounded-full flex items-center justify-center">
                <img className="w-9" src={diarrhea} alt="" />
              </div>
              <h1 className="py-4">Diarrhea</h1>
            </div>
          </Link>
          <Link to="#">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-t from-blue-50 to-blue-200 rounded-full flex items-center justify-center">
                <img className="w-9" src={fever} alt="" />
              </div>
              <h1 className="py-4">Fever</h1>
            </div>
          </Link>
        </div>
      </div>

      {/* Health Articals */}
      {/* <HealthBlog /> */}
      <h1 className="font-bold text-lg pl-20 py-4">Health Articals</h1>
      <div className="bg-slate-100 flex flex-wrap gap-4 justify-center py-7">
        {Blog.length > 0 ? (
          Blog.map((article) => (
            <div
              key={article.id}
              className="border rounded-md shadow overflow-hidden w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/3"
            >
              <Link to="/singleBlogPage">
                <img
                  className="w-full h-44 object-cover"
                  src={article.img}
                  alt={article.title}
                />
              </Link>
              <div className="px-5 py-2">
                <h1 className="py-2 font-bold cursor-pointer">
                  {article.title}
                </h1>
              </div>
            </div>
          )).slice(0, 3)
        ) : (
          <p>No articles available.</p>
        )}
      </div>

      {/*  Customer reviews start */}
      <div className="w-[90%] m-auto mt-4">
        <h1 className="font-bold text-lg py-5">Our Customers Love</h1>
        <div className=" flex gap-3 ">
          <CustomerReview />
          <CustomerReview />
        </div>
      </div>

      {/* marquee section start */}

      <div id="marquee-section" className="py-6">
        <div className="self-marquee w-[90%] m-auto  ">
          <h1 className="font-bold text-lg">Our Technology Partner</h1>
          <div className="p-10">
            <Marquee pauseOnClick speed={100} delay={2}>
              <div className="flex gap-20 items-center">
                <div className="w-32 ml-16">
                  <img src={sony} alt="" />
                </div>
                <div className="w-32">
                  <img src={zameen} alt="" />
                </div>
                <div className="w-32">
                  <img src={hbl} alt="" />
                </div>
                <div className="w-32">
                  <img src={abbott} alt="" />
                </div>
                <div className="w-32">
                  <img src={tcs} alt="" />
                </div>
                <div className="w-32">
                  <img src={sony} alt="" />
                </div>
                <div className="w-32">
                  <img src={zameen} alt="" />
                </div>
                <div className="w-32">
                  <img src={hbl} alt="" />
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>

      {/* new section */}
    </>
  );
};

export default HOC(HomePage);
