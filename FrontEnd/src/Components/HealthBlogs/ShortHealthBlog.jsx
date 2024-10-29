import React from 'react'
import ApiData from "../DumiApi/ApiBlog";

function ShortHealthBlog() {
  return (
    <>
            {/* <div className="bg-slate-200 flex flex-wrap gap-4 justify-center py-7">
        {ApiData.length > 0 ? (
          ApiData.map((article)=> (
            <div
              key={article.id}
              className="border rounded shadow overflow-hidden w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/3"
            >
              <Link to='/singleBlogPage'>
                <img
                  className="w-full h-44 object-cover"
                  src={article.img}
                  alt={article.title}
                />
              </Link>
              <div className="px-5 py-2">
                <h1 className="py-2 font-bold cursor-pointer">{article.title}</h1>
              </div>
            </div>
          ))
        ).slice(0,3) : (
          <p>No articles available.</p>
        )}
      </div> */}
    </>
  )
}

export default ShortHealthBlog
