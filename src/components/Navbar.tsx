import { useState } from "react";
import menuIcon from "../assets/menu.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between max-w-screen-xl mx-auto mt-6 px-5 flex-wrap">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="/" className="text-2xl">
            Anas Obaid
          </a>
        </div>
        <div className="hidden md:flex space-x-6">
          <ul className="flex gap-10 items-center">
            <li>
              <a href="/work" className="text-xl">
                Work
              </a>
            </li>
            <li>
              <a href="/about" className="text-xl">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="text-xl">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden cursor-pointer">
          <img
            src={menuIcon}
            width={32}
            className="text-xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            alt=""
          />
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden w-full p-3">
          <ul className="flex flex-col gap-5 items-center justify-center mx-auto">
            <li>
              <a href="/work" className="text-2xl">
                Work
              </a>
            </li>
            <li>
              <a href="/about" className="text-2xl">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="text-2xl">
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
