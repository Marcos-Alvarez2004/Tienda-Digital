import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userLogoutAction } from "../Redux/Actions/User";
import Checkout from "../pages/Checkout";
import LogoVite from "/vite.svg"
import { initFlowbite } from "flowbite";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    initFlowbite();
    setOpen(false);
  }, [location.pathname])

  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;
  const dispatch = useDispatch();

  const qty = useSelector((state) => state.cartReducer.cartItems.reduce((total, item) => total + item.qty, 0));

  const logoutHandler = () => {
    dispatch(userLogoutAction());
  }

  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={LogoVite} className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Tienda Digital</span>
          </a>
          <div className="flex items-center xl:order-2 space-x-1 xl:space-x-2 rtl:space-x-reverse">
            <Link to="/">
              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 mr-2"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                {!userInfo ? (
                  <>
                    <span>0</span>
                  </>
                ) : (
                  <>
                    <span>{qty}</span>
                  </>
                )}
              </button>
            </Link>
            <div className="hidden xl:block">
              {!userInfo ? (
                <>
                  <Link to="/login" href="#" className="text-blue-800 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 focus:outline-none mr-2">Ingresar</Link>
                  <Link to="/register" href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5  focus:outline-none ml-2">Creá tu cuenta</Link>
                </>
              ) : (
                <>
                  <button to="/register" href="#" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5  focus:outline-none" onClick={logoutHandler}>Salir</button>
                </>
              )}
            </div>
            <button data-collapse-toggle="mega-menu" type="button" className="inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mega-menu" aria-expanded={open} onClick={() => setOpen(!open)}>
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
          <div id="mega-menu" className="border-b border-b-gray-300 md:border-none items-center justify-between hidden w-full xl:flex xl:w-auto xl:order-1">
            <ul className="flex flex-col font-medium xl:flex-row xl:mt-0 xl:space-x-8 rtl:space-x-reverse mt-6">
              <li>
                <a href="#" className="block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 xl:p-0" aria-current="page">Inicio</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 xl:p-0" aria-current="page">Historial de compras</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 xl:p-0">Sobre la pagina</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 xl:p-0">Contacto del creador</a>
              </li>
            </ul>
            <div className="xl:hidden m-4 mt-16 ml-3 flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
              {!userInfo ? (
                <>
                  <Link to="/login" href="#" className="text-blue-800 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 focus:outline-none mr-2">Ingresar</Link>
                  <Link to="/register" href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5  focus:outline-none ml-2">Creá tu cuenta</Link>
                </>
              ) : (
                <>
                  <button to="/register" href="#" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5  focus:outline-none" onClick={logoutHandler}>Salir</button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
