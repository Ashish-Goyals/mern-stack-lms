import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import Course from "./Course.jsx";
// import { useGetPublishedCourseQuery } from "@/features/api/courseApi";

const Courses = () => {
  // const { data, isLoading, isError } = useGetPublishedCourseQuery();

  const isError = false;
  const isLoading = false;

  const data = {
    courses: [
      {
        _id: "1",
        courseTitle: "React for Beginners",
        courseThumbnail: "https://via.placeholder.com/300",
        creator: {
          name: "John Doe",
          photoUrl: "https://via.placeholder.com/50",
        },
        courseLevel: "Beginner",
        coursePrice: 4999,
      },
      {
        _id: "2",
        courseTitle: "Advanced Node.js",
        courseThumbnail: "https://via.placeholder.com/300",
        creator: {
          name: "Jane Smith",
          photoUrl: "https://via.placeholder.com/50",
        },
        courseLevel: "Advanced",
        coursePrice: 5999,
      },
      {
        _id: "3",
        courseTitle: "Full Stack Development",
        courseThumbnail: "https://via.placeholder.com/300",
        creator: {
          name: "Robert Brown",
          photoUrl: "https://via.placeholder.com/50",
        },
        courseLevel: "Intermediate",
        coursePrice: 7999,
      },
      {
        _id: "4",
        courseTitle: "UI/UX Design Fundamentals",
        courseThumbnail: "https://via.placeholder.com/300",
        creator: {
          name: "Emily White",
          photoUrl: "https://via.placeholder.com/50",
        },
        courseLevel: "Beginner",
        coursePrice: 3999,
      },
    ],
  };
  if (isError) return <h1>Some error occurred while fetching courses.</h1>;

  return (
    <div className="bg-gray-50 dark:bg-[#141414]">
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-3xl text-center mb-10">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <CourseSkeleton key={index} />
              ))
            : data?.courses &&
              data.courses.map((course) => (
                <Course key={course._id} course={course} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

const CourseSkeleton = () => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
      <Skeleton className="w-full h-36" />
      <div className="px-5 py-4 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  );
};
