import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import Projects from "./Projects";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import { Connect } from "./Connect";


const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header /> 
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/aboutme",
        element: <AboutMe />,
      },
      {
        path: "/connect",
        element: <Connect />,
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;