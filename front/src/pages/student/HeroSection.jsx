import React from "react";

import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 bg-indigo-600 dark:from-gray-800 dark:to-gray-900 py-16 px-4 text-center mt-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-4">
          Find the Best Course For You
        </h1>
        <p className="mt-4 text-xl text-gray-200 dark:text-gray-400">
          Discover the power of E-Learning and create a seamless learning
          experience for your students.
        </p>
        <form
          action=""
          className="flex items-center bg-white dark:bg-gray-800 rounded-md shadow-md"
        >
          <input
            className="w-full px-4 py-2 rounded-l-md text-sm bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="text"
            placeholder="Search for courses..."
          />
          <button
            className="flex items-center px-4 py-2 rounded-r-md text-sm bg-indigo-500 dark:bg-gray-800 dark:text-white hover:bg-indigo-600 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="submit"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            Search
          </button>
        </form>
        <Button className="bg-white dark:bg-gray-800 text-blue-600 rounded-full mt-3 hover:bg-gray-200">
          Explore Courses
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
