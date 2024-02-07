import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./../src/App.css"
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"*",
        element:<NotFound/>
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
