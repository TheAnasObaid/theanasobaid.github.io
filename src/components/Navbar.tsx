import { useState } from "react";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isActive, setActive] = useState(false);

  const links = [
    {
      slug: "/work",
      text: "Work",
    },
    {
      slug: "/about",
      text: "About",
    },
    {
      slug: "mailto:anasobaidpk@gmail.com",
      text: "Contact",
    },
  ];

  return (
    <nav className="flex justify-between my-6 flex-wrap">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl"
          onClick={() => {
            setOpen(!isOpen);
            setActive(!isActive);
          }}
        >
          Anas Obaid
        </Link>
        <div className="hidden md:flex space-x-6">
          <ul className="flex gap-10 items-center">
            {links.map((link) => (
              <li>
                <Link
                  className="text-xl hover:border-b-2 border-neutral-800 transition-all duration-100"
                  to={link.slug}
                >
                  {link.text}
                </Link>
              </li>
            ))}
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
            {links.map((link) => (
              <li>
                <Link
                  onClick={() => {
                    setOpen(!isOpen);
                    setActive(!isActive);
                  }}
                  to={link.slug}
                  className="text-6xl hover:border-b-2 border-neutral-800 transition-all duration-100"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
