"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface navbar_items {
  label: string;
  page: string;
}
const items: navbar_items[] = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];
const name: string = "Mohammed Arbaz";

export default function NavBar() {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <header
      className={`w-full mx-auto  px-4 sm:px-20 fixed top-0 md:py-8 md:text-2xl z-50 shadow text-white bg-gray-900`}
    >
      <div className="justify-between md:items-end md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:block">
            <div className="md:hidden ml-auto">
              <button
                onClick={toggleNav}
                className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
              >
                {nav ? <IoMdClose /> : <IoMdMenu />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${
            nav ? "block" : "hidden"
          } md:flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0`}
        >
          <div className="items-center  justify-center  space-y-8 md:flex md:space-x-6 md:space-y-0 ">
            {items.map((item, idx) => (
              <Link
                key={idx}
                href={`#${item.page}`}
                className={"block px-20 text-white text-opacity-80 "}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
