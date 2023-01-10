import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { MENUS } from "../lib/constants";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const router = useRouter();
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-100 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed flex items-center mr-4 py-2 whitespace-nowrap uppercase text-black"
              href="/"
            >
              <Image
                src="/favicon/logo.png"
                alt="Logo"
                height={50}
                width={50}
              />
              <div>Basic Knowledge</div>
            </Link>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <div>
                <div
                  style={{
                    width: "20px",
                    height: "3px",
                    backgroundColor: "black",
                    marginBottom: "4px",
                  }}
                ></div>
                <div
                  style={{
                    width: "20px",
                    height: "3px",
                    backgroundColor: "black",
                    marginBottom: "4px",
                  }}
                ></div>
                <div
                  style={{
                    width: "20px",
                    height: "3px",
                    backgroundColor: "black",
                  }}
                ></div>
              </div>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {MENUS.map((menu) => {
                return (
                  <li className="nav-item" key={menu.id}>
                    <Link
                      className={`px-3 py-2 flex items-center uppercase font-bold leading-snug text-black hover:opacity-60
                      ${
                        router.pathname == menu.path
                          ? "cc__navLink__active"
                          : ""
                      }
                      `}
                      href={menu.path}
                    >
                      <span className="ml-2">{menu.menuName}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
