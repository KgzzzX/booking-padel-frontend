/*
  Import Router Provider
*/
import { RouterProvider } from "react-router-dom";

/*
  Import router configuration
*/
import router from "./routes";

function App() {

  /*
    RouterProvider:
    digunakan untuk menjalankan semua routing
  */
  return <RouterProvider router={router} />;
}

export default App;