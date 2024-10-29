import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineBookmarks } from "react-icons/md"; 
import HOC from "../Components/HOC";
import {Blog} from '../StaticAPI/ApiData'


const itemsPerPage = 6;

function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedArticles, setDisplayedArticles] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedArticles(Blog.slice(startIndex, endIndex));
  }, [currentPage]);

  const totalPages = Math.ceil(Blog.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  console.log(Blog);

  return (
    
    <div className="w-[90%] mx-auto py-10">
      <h1 className="text-2xl font-bold py-6 pl-32">All Articles</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {displayedArticles.map((article) => (
          <div
            key={article.id}
            className="border rounded shadow overflow-hidden w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/3"
          >
            <Link to="/singleBlogPage">
              <img
                className="w-full h-44 object-cover"
                src={article.img}
                alt={article.title}
              />
            </Link>
            <div className="px-5 py-2">
              <h1 className="py-2 font-bold cursor-pointer">{article.title}</h1>
              <p>{article.content.slice(0, 90)}...</p>
              <div className="w-full flex justify-between pt-5">
                <p>{article.date}</p>
                <MdOutlineBookmarks className="text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav aria-label="Page navigation" className="mt-10 mb-10">
        <ul className="flex items-center justify-center -space-x-px h-10 text-base">
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </button>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index}>
              <button
                onClick={() => handlePageChange(index + 1)}
                className={`flex items-center justify-center px-4 h-10 leading-tight ${
                  currentPage === index + 1
                    ? "text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100"
                    : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HOC(BlogPage);
