import React from "react";
import Course from "./Course";

const MyLearning = () => {
  // Simulated data from backend (can be replaced with API response)
  const coursesData = [
    {
      _id: "1",
      courseTitle: "React for Beginners",
      courseThumbnail:
        "https://tse4.mm.bing.net/th?id=OIP.T5ByYpZtMw6GllZVi1vzcAHaEK&pid=Api",
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
      courseThumbnail:
        "https://tse2.mm.bing.net/th?id=OIP.fKWoMnZEazMmTFqV1HmdYwHaD3&pid=Api",
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
      courseThumbnail:
        "https://tse4.mm.bing.net/th/id/OIP.W1cuTmUeYUroiCRt3umDlwHaD4?pid=Api",
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
      courseThumbnail:
        "https://tse2.mm.bing.net/th?id=OIP.dcv4RnU-g4NQy2WTMJq7yAHaE3&pid=Api",
      creator: {
        name: "Emily White",
        photoUrl: "https://via.placeholder.com/50",
      },
      courseLevel: "Beginner",
      coursePrice: 3999,
    },
  ];

  // Simulated enrolled courses
  const myLearningCourses = ["1"]; // IDs of enrolled courses
  const isLoading = false;

  // Filter enrolled courses
  const enrolledCourses = coursesData.filter((course) =>
    myLearningCourses.includes(course._id)
  );

  return (
    <div className="max-w-4xl mx-auto my-24 px-4 md:px-0">
      <h1 className="font-bold text-2xl">My Learning</h1>
      <div className="my-5">
        {isLoading ? (
          <MyLearningSkeleton />
        ) : enrolledCourses.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No courses found in your learning list.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {enrolledCourses.map((course) => (
              <Course key={course._id} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyLearning;

// Skeleton Loader Component
const MyLearningSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
      {Array.from({ length: 2 }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-300 dark:bg-gray-700 rounded-lg h-40 animate-pulse"
        ></div>
      ))}
    </div>
  );
};
