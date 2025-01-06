import { Outlet } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";

const App = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default App;
