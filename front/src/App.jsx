import "./App.css";
import { Button } from "./components/ui/button.jsx";
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./pages/student/HeroSection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Courses from "./pages/student/Courses.jsx";
import MyLearning from "./pages/student/MyLearning";
import Profile from "./pages/student/Profile";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            {" "}
            <HeroSection />
            <Courses />
          </>
        ),
      },
      { path: "login", element: <Login /> },
      { path: "my-learning", element: <MyLearning /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
