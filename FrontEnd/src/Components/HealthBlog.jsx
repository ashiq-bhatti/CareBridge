import React, { useState } from "react";
import { MdOutlineBookmarks } from "react-icons/md";
import { Blog } from "../StaticAPI/ApiData";
import { Link } from "react-router-dom";

function HealthBlog() {
  const [displayedArticles, setDisplayedArticles] = useState(Blog);

  return (
    <>


        {/* <div className="flex flex-wrap gap-4 justify-center ">
          {displayedArticles.map((article) => (
            <div
              key={article.id}
              className="border rounded shadow overflow-hidden w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/3"
            >
              <Link to="/singleBlogPage">
                <img
                  className="w-full h-44 object-cover "
                  src={article.img}
                  alt={article.title}
                />
              </Link>
              <div className="px-5 py-2">
                <h1 className="py-2 font-bold cursor-pointer">
                  {article.title}
                </h1>
                <p>
                  {article.content.slice(0, 90)}
                  {" . . . ."}
                </p>
                <div className="w-full flex justify-between pt-5">
                  <p>{article.date}</p>
                  <MdOutlineBookmarks className="text-2xl cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div> */}

<div className="flex flex-wrap gap-4 justify-center ">
          {displayedArticles.map((article) => (
            <div
              key={article.id}
              className="border rounded shadow overflow-hidden w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/3"
            >
              <Link to="/singleBlogPage">
                <img
                  className="w-full h-44 object-cover "
                  src={article.img}
                  alt={article.title}
                />
              </Link>
              <div className="px-5 py-2">
                <h1 className="py-2 font-bold cursor-pointer">
                  {article.title}
                </h1>
                <p>
                  {article.content.slice(0, 90)}
                  {" . . . ."}
                </p>
                <div className="w-full flex justify-between pt-5">
                  <p>{article.date}</p>
                  <MdOutlineBookmarks className="text-2xl cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  );
}

export default HealthBlog;
