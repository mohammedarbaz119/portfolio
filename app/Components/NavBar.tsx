"use client";
// import { useState, useEffect } from "react";
// import { Link } from "react-scroll";
// import { usePathname } from "next/navigation";
// import { IoMdMenu, IoMdClose } from "react-icons/io";
// import { motion } from "framer-motion";

// interface navbar_items {
//   label: string;
//   page: string;
// }
// const items: navbar_items[] = [
//   {
//     label: "Home",
//     page: "home",
//   },
//   {
//     label: "About",
//     page: "about",
//   },
//   {
//     label: "Projects",
//     page: "projects",
//   },
// ];
// const name: string = "Mohammed Arbaz";
// export default function NavBar() {
//   const pathname = usePathname();
//   const [navbar, setNavbar] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(false);

//   const handleScroll = () => {
//     const scrollTop = window.scrollY;
//     if (scrollTop > 0) {
//       setShowNavbar(true);
//     } else {
//       setShowNavbar(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <motion.header
//       className={`w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow text-black bg-gray-200 bg-opacity-50 dark:border-b dark:border-stone-600 ${
//         showNavbar ? "opacity-100" : "opacity-0"
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: showNavbar ? 0 : -100 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="justify-between md:items-center md:flex">
//         <div>
//           <div className="flex items-center justify-between py-3 md:py-5 md:block">
//             <Link to="home">
//               <div className="container flex items-center space-x-2">
//                 <h2 className="text-2xl font-bold">{name}</h2>
//               </div>
//             </Link>
//             <div className="md:hidden">
//               <button
//                 className="p-2 text-white-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                 onClick={() => setNavbar(!navbar)}
//               >
//                 {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         <div>
//           <div
//             className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//               navbar ? "block" : "hidden"
//             }`}
//           >
//             <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
//               {items.map((item, idx) => {
//                 return (
//                   <Link
//                     key={idx}
//                     to={item.page}
//                     className={
//                       "block lg:inline-block text-black hover:text-slate-500 text-opacity-80 dark:text-black-100"
//                     }
//                     activeClass="active"
//                     spy={true}
//                     smooth={true}
//                     offset={-100}
//                     duration={500}
//                     onClick={() => setNavbar(!navbar)}
//                   >
//                     {item.label}
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.header>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { usePathname } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavbarItem {
  label: string;
  page: string;
}

const items: NavbarItem[] = [
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

const name: string = "Portfolio";

export default function NavBar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // You can add logic here if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-black text-white py-4`}
    >
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between md:block">
            <Link to="home">
              <div className="container flex items-center space-x-2">
                <h2 className="text-3xl font-bold">{name}</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? (
                  <IoMdClose size={30} />
                ) : (
                  <IoMdMenu size={30} />
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:flex md:space-x-6 md:space-y-0 ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex-1 justify-self-center pb-3 mt-4 md:block md:pb-0 md:mt-0">
            <div className="items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {items.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.page}
                  className="block lg:inline-block hover:text-teal-300 text-opacity-80 transition duration-300"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
