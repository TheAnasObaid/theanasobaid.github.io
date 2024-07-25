import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <>
      <div className="px-3 max-w-screen-xl mx-auto">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
};

export default Root;
