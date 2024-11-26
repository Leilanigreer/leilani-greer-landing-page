import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import LandingPageOriginal from "./LandingPageOriginal";
import { Projects } from "./Projects";
import LandingPage2 from "./LandingPage2";
import LandingPage from "./LandingPage";
import LandingPage5 from "./LandingPage5";
import AboutMe from "./components/AboutMe";
import AboutMe2 from "./components/AboutMe";


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
        path: "/original",
        element: <LandingPageOriginal />,
      },
      {
        path: "/2",
        element: <LandingPage2 />,
      },
      {
        path: "/5",
        element: <LandingPage5 />,
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