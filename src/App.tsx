import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootPage from "./Pages/Root/Root";
import HomePage from "./Pages/Home/Home";
import MoviePage from "./Pages/Movie/Movie";
import PersonPage from "./Pages/Person/Person";
const routers = createBrowserRouter([
  {
    //1
    path: "/",
    element: <RootPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/movie/:id", element: <MoviePage /> },
      { path: "/person/:name", element: <PersonPage /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
