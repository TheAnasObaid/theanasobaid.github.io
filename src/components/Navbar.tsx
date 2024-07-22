import { useState } from "react";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isActive, setActive] = useState(false);

  return (
    <nav className="flex justify-between my-6 flex-wrap">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-2xl">
            Anas Obaid
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <ul className="flex gap-10 items-center">
            <li>
              <Link to="/work" className="text-xl">
                Work
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-xl">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-xl">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden cursor-pointer">
          <img
            src={isActive ? closeIcon : menuIcon}
            width={isActive ? 24 : 32}
            className="text-xl focus:outline-none"
            onClick={() => {
              setOpen(!isOpen);
              setActive(!isActive);
            }}
            alt=""
          />
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden w-full py-20 mt-10 bg-[#fcfbf7] z-10 absolute left-0">
          <ul className="flex flex-col gap-10 items-center mx-auto">
            <li>
              <a href="/work" className="text-6xl">
                Work
              </a>
            </li>
            <li>
              <a href="/about" className="text-6xl">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="text-6xl">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
