import Footer from "./components/footer";
import Header from "./components/header";
import ErrorPage from "./components/error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="main-container1">
        <Header />
        <Footer></Footer>
      </div>
    ),
  },
  { path: "/404", element: <ErrorPage /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
