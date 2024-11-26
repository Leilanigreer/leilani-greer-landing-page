import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Projects } from "./Projects";
import LandingPage from "./LandingPage";
import AboutMe from "./components/AboutMe";


const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header /> 
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/AboutMe",
        element: <AboutMe />,
      },
      {
        path: "/projects",
        element: <Projects />,
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;