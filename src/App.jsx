import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import LandingPage from "./LandingPage";
import { Projects } from "./Projects";
import LandingPage2 from "./LandingPage2";
import LandingPage4 from "./LandingPage4";
import LandingPage5 from "./LandingPage5";


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
        path: "/2",
        element: <LandingPage2 />,
      },
      {
        path: "/4",
        element: <LandingPage4 />,
      },
      {
        path: "/5",
        element: <LandingPage5 />,
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