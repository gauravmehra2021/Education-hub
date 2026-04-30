import { RouterProvider } from "react-router-dom";
import router from "./routes"; // 👈 tumhari routes file

function App() {
  return <RouterProvider router={router} />;
}

export default App;