import React from "react";
import { Link } from "react-router-dom";
import a from '../imgDr/a.jfif';
import { Blog } from "../StaticAPI/ApiData";
import HOC from "./HOC";
import HealthBlog from "./HealthBlog";

function SingleBlogPage() {
  return (
    <>
      <div className="w-[60%] mx-auto mt-20">
        <div>
          <h1 className="text-4xl font-bold">
            Sensory Integration Therapy And Its Effectiveness In Autism
          </h1>
          <h4 className="text-blue-700 py-4">
            <Link to="#">Dr. Ahmad Naseer</Link>
          </h4>
          <p className="text-gray-600">Published On May 13, 2024</p>
        </div>

        <div className="py-6">
          <img className="w-full h-[450px] object-cover" src={a} alt="Sensory Integration Therapy" />
        </div>
        <div>
          <p className="text-lg leading-7 py-4">
            Sensory integration therapy (SIT) has gained attention as a
            potential intervention for individuals with autism spectrum disorder
            (ASD). Read more about sensory integration therapy and its
            effectiveness in autism below.
          </p>
          <div className="text-sm py-2">
            <p className="py-1">Table of Contents</p>
            <ul>
              <li><p>What Is Sensory Integration Therapy?</p></li>
              <li><p>Effectiveness of Sensory Integration Therapy in Autism Treatment</p></li>
              <li><p>Conclusion</p></li>
            </ul>
          </div>
          <h1 className="text-4xl underline">
            What Is Sensory Integration Therapy?
          </h1>
          <p className="text-lg leading-7 py-4">
            Sensory integration therapy is based on the theory that individuals
            with autism may experience difficulties processing and responding to
            sensory information from their environment. This can manifest as
            hypersensitivity or hyposensitivity to sensory stimuli, leading to
            sensory seeking or avoidance behaviors.
          </p>
          <p className="text-lg leading-7 py-4">
            The goal of sensory integration therapy is to help individuals with
            autism regulate their responses to sensory input, improve sensory
            processing abilities, and enhance overall functioning. Therapists
            use a combination of sensory-rich activities, movement exercises,
            and environmental modifications to achieve these objectives.
          </p>
          <h1 className="text-4xl underline">
            Effectiveness of Sensory Integration Therapy in Autism Treatment
          </h1>
          <p className="text-lg leading-7 py-4">
            Research on the efficacy of sensory integration therapy in autism
            treatment has yielded mixed findings. While some studies suggest
            positive outcomes, others report limited or inconsistent benefits.
            Factors contributing to variability in study results include
            differences in intervention protocols, participant characteristics,
            and outcome measures.
          </p>
        </div>
      </div>
      <div className="bg-slate-200 flex flex-wrap gap-4 justify-center py-7">
        {Blog.length > 0 ? (
          Blog.map((article)=> (
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
      </div>
    </>
  );
}

export default HOC(SingleBlogPage);
