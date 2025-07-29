import "./App.css";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import NotFound from "./components/NotFound/NotFound";
import Dogs from "./components/Dogs/Dogs";
import Gallery from "./components/Gallery/Gallery"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: '/gallery',
          element: <Gallery />,
          children: [
            { path: 'dogs', element: <Dogs /> },
          ]
        },
        { path: '/hero', element: <Hero /> },
        { path: '*', element: <NotFound /> },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
