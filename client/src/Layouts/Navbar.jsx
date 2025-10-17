// Redux
import { useSelector, useDispatch } from "react-redux";
// React & react router 
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// Flowbite
import { initFlowbite } from "flowbite";
// Images
import Logo from "/logo.png"


const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    initFlowbite();
    setOpen(false);
  }, [location.pathname])

  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;

  const qty = useSelector((state) => state.cartReducer.cartItems.reduce((total, item) => total + item.qty, 0));

  // cerrar sidebar si vuelvo a desktop / Close sidebar if im back to return the desktop resolution
  useEffect(() => {
    const menu = document.getElementById("mega-menu");
    if (!menu) return;

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        menu.classList.add("hidden");
        setOpen(false);
        initFlowbite();
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize)
  }, []);

  return (
    <>
      <nav className="bg-white px-4 py-3">
        <div className="flex flex-wrap items-center justify-between max-w-screen-lg mx-auto">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="size-12 lg:size-16" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Tienda Digital</span>
          </Link>
          <div className="flex items-center xl:order-2 space-x-1 xl:space-x-2 rtl:space-x-reverse">

            <div className="hidden lg:block">
              {!userInfo ? (
                <>
                  <Link to="/login" href="#" className="text-celeste-primary outline-celeste-primary outline hover:brightness-105 font-medium rounded-sm text-base px-4 py-2 md:px-5 md:py-2.5 mr-4">Ingresar</Link>
                  <Link to="/register" href="#" className="text-white bg-celeste-primary hover:brightness-105 font-medium rounded-sm text-base px-4 py-2 md:px-5 md:py-2.5">Creá tu cuenta</Link>
                </>
              ) : (
                <>
                  <div className="lg:flex lg:justify-center lg:items-center">
                    <div className="hidden lg:block">
                      <ul className="flex justify-center items-center">
                        <li>
                          <Link to="/" className={`flex items-end gap-x-2 py-4 px-2 ${location.pathname === "/" ? "text-celeste-primary" : "text-gray-900"}`} aria-current="page">
                            Inicio
                          </Link>
                        </li>
                        <li>
                          <Link to="/orderhistory" className={`flex items-end gap-x-2 py-4 px-2 ${location.pathname === "/orderhistory" ? "text-celeste-primary" : "text-gray-900"}`} aria-current="page">
                            Mis compras
                          </Link>
                        </li>
                        <li>
                          <Link to="/account" className={`flex items-end gap-x-2 py-4 px-2 ${location.pathname === "/account" ? "text-celeste-primary" : "text-gray-900"}`} aria-current="page">
                            Mi cuenta
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <Link to="/checkout" className="ml-4">
                      <button
                        type="button"
                        className="relative inline-block mr-2 cursor-pointer"
                      >
                        {/* Cart / carrito */}
                        <svg height="2rem" width="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.25 18.75C11.25 19.58 10.58 20.25 9.75 20.25C8.92 20.25 8.25 19.58 8.25 18.75C8.25 17.92 8.92 17.25 9.75 17.25C10.58 17.25 11.25 17.92 11.25 18.75ZM16.25 17.25C15.42 17.25 14.75 17.92 14.75 18.75C14.75 19.58 15.42 20.25 16.25 20.25C17.08 20.25 17.75 19.58 17.75 18.75C17.75 17.92 17.08 17.25 16.25 17.25ZM20.73 7.68L18.73 15.68C18.65 16.01 18.35 16.25 18 16.25H8C7.64 16.25 7.33 15.99 7.26 15.63L5.37 5.25H4C3.59 5.25 3.25 4.91 3.25 4.5C3.25 4.09 3.59 3.75 4 3.75H6C6.36 3.75 6.67 4.01 6.74 4.37L7.17 6.75H20C20.23 6.75 20.45 6.86 20.59 7.04C20.73 7.22 20.78 7.46 20.73 7.68ZM19.04 8.25H7.44L8.62 14.75H17.41L19.04 8.25Z" fill="#000000" />
                        </svg>
                        <div className="absolute -top-2 -right-1.5">

                          {!userInfo ? (
                            <>
                              <span className="text-sm font-bold text-celeste-primary">{qty}</span>
                            </>
                          ) : (
                            <>
                              <span className="text-sm font-bold text-celeste-primary">{qty}</span>
                            </>
                          )}
                        </div>
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </div>


            <Link to="/checkout" className="ml-4">
              <button
                type="button"
                className="relative inline-block mr-2 cursor-pointer"
              >
                {/* Cart / carrito */}
                <svg height="2rem" width="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.25 18.75C11.25 19.58 10.58 20.25 9.75 20.25C8.92 20.25 8.25 19.58 8.25 18.75C8.25 17.92 8.92 17.25 9.75 17.25C10.58 17.25 11.25 17.92 11.25 18.75ZM16.25 17.25C15.42 17.25 14.75 17.92 14.75 18.75C14.75 19.58 15.42 20.25 16.25 20.25C17.08 20.25 17.75 19.58 17.75 18.75C17.75 17.92 17.08 17.25 16.25 17.25ZM20.73 7.68L18.73 15.68C18.65 16.01 18.35 16.25 18 16.25H8C7.64 16.25 7.33 15.99 7.26 15.63L5.37 5.25H4C3.59 5.25 3.25 4.91 3.25 4.5C3.25 4.09 3.59 3.75 4 3.75H6C6.36 3.75 6.67 4.01 6.74 4.37L7.17 6.75H20C20.23 6.75 20.45 6.86 20.59 7.04C20.73 7.22 20.78 7.46 20.73 7.68ZM19.04 8.25H7.44L8.62 14.75H17.41L19.04 8.25Z" fill="#000000" />
                </svg>
                <div className="absolute -top-2 -right-1.5">

                  {!userInfo ? (
                    <>
                      <span className="text-sm font-bold text-celeste-primary">{qty}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-sm font-bold text-celeste-primary">{qty}</span>
                    </>
                  )}
                </div>
              </button>
            </Link>
            <button data-collapse-toggle="mega-menu" type="button" className="inline-flex items-center w-10 h-10 justify-center text-sm text-black rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mega-menu" aria-expanded={open} onClick={() => setOpen(!open)}>
              <span className="sr-only">Abrir menu</span>
              {open ? (
                // Ícono de X
                <svg className="w-8 h-8" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 6L14 14M6 14L14 6"
                  />
                </svg>
              ) : (
                // Ícono hamburguesa
                <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              )}
            </button>
          </div>
          <div id="mega-menu" className="mt-4 border-t border-t-gray-300 md:border-none items-center justify-between hidden w-full">


            {!userInfo ? (
              <>
                <div className="pt-6 pb-2 flex justify-center items-center gap-8">
                  <Link to="/login" href="#" className="text-celeste-primary outline-celeste-primary outline hover:brightness-105 font-medium rounded-sm text-sm px-4 py-2 md:px-5 md:py-2.5">Ingresar</Link>
                  <Link to="/register" href="#" className="text-white bg-celeste-primary hover:brightness-105 font-medium rounded-sm text-sm px-4 py-2 md:px-5 md:py-2.5">Creá tu cuenta</Link>
                </div>
              </>
            ) : (
              <><ul className="flex flex-col font-medium text-base mt-4">
                <li>
                  <Link to="/" className={`flex items-end gap-x-2 py-4 px-2 ${location.pathname === "/" ? "text-celeste-primary" : "text-gray-900"}`} aria-current="page">
                    {/* Init / Inicio */}
                    <svg className="size-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.3103 1.77586C11.6966 1.40805 12.3034 1.40805 12.6897 1.77586L20.6897 9.39491L23.1897 11.7759C23.5896 12.1567 23.605 12.7897 23.2241 13.1897C22.8433 13.5896 22.2103 13.605 21.8103 13.2241L21 12.4524V20C21 21.1046 20.1046 22 19 22H14H10H5C3.89543 22 3 21.1046 3 20V12.4524L2.18966 13.2241C1.78972 13.605 1.15675 13.5896 0.775862 13.1897C0.394976 12.7897 0.410414 12.1567 0.810345 11.7759L3.31034 9.39491L11.3103 1.77586ZM5 10.5476V20H9V15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15V20H19V10.5476L12 3.88095L5 10.5476ZM13 20V15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15V20H13Z" fill="currentColor" />
                    </svg>
                    <span className="relative translate-y-1">Inicio</span>
                  </Link>
                </li>
                <li>
                  <Link to="/orderhistory" className={`flex items-end gap-x-2 py-4 px-2 ${location.pathname === "/orderhistory" ? "text-celeste-primary" : "text-gray-900"}`} aria-current="page">
                    {/* History Shop / Historial de compras */}
                    <svg className="size-6" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor">
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -3119.000000)" fill="currentColor">
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path d="M180.846448,2977 L167.153448,2977 C166.544448,2977 166.077448,2976.461 166.163448,2975.859 L167.306448,2967.859 C167.376448,2967.366 167.798448,2967 168.296448,2967 L168.999448,2967 L168.999448,2969 C168.999448,2969.552 169.447448,2970 169.999448,2970 C170.552448,2970 170.999448,2969.552 170.999448,2969 L170.999448,2967 L176.999448,2967 L176.999448,2969 C176.999448,2969.552 177.447448,2970 177.999448,2970 C178.552448,2970 178.999448,2969.552 178.999448,2969 L178.999448,2967 L179.703448,2967 C180.201448,2967 180.623448,2967.366 180.693448,2967.859 L181.836448,2975.859 C181.922448,2976.461 181.455448,2977 180.846448,2977 L180.846448,2977 Z M170.999448,2964 C170.999448,2962.346 172.345448,2961 173.999448,2961 C175.654448,2961 176.999448,2962 176.999448,2964 L176.999448,2965 L170.999448,2965 L170.999448,2964 Z M183.979448,2976.717 L182.550448,2966.717 C182.410448,2965.732 181.566448,2965 180.570448,2965 L178.999448,2965 L178.999448,2964 C178.999448,2961 176.756448,2959 173.999448,2959 C171.243448,2959 168.999448,2961.243 168.999448,2964 L168.999448,2965 L167.734448,2965 C166.739448,2965 165.589448,2965.732 165.448448,2966.717 L164.020448,2976.717 C163.848448,2977.922 164.783448,2979 166.000448,2979 L181.999448,2979 C183.216448,2979 184.151448,2977.922 183.979448,2976.717 L183.979448,2976.717 Z" id="shopping_cart-[#1135]">

                            </path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span className="relative translate-y-1">Mis compras</span>
                  </Link>
                </li>
                <li>
                  <Link to="/account" className={`flex items-end gap-x-2 py-4 px-2 ${location.pathname === "/account" ? "text-celeste-primary" : "text-gray-900"}`}>
                    {/* Account / Cuenta */}
                    <svg className="size-6" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h48v48H0z" fill="none"></path> <g id="Shopicon"> <path d="M31.278,25.525C34.144,23.332,36,19.887,36,16c0-6.627-5.373-12-12-12c-6.627,0-12,5.373-12,12 c0,3.887,1.856,7.332,4.722,9.525C9.84,28.531,5,35.665,5,44h38C43,35.665,38.16,28.531,31.278,25.525z M16,16c0-4.411,3.589-8,8-8 s8,3.589,8,8c0,4.411-3.589,8-8,8S16,20.411,16,16z M24,28c6.977,0,12.856,5.107,14.525,12H9.475C11.144,33.107,17.023,28,24,28z"></path> </g> </g></svg><span className="relative translate-y-1">Mi cuenta</span>
                  </Link>
                </li>
              </ul>
              </>
            )}

          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

