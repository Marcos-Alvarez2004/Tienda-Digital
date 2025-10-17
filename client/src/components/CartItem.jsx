// React & React redux
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCartAction, removeFromCartAction } from "../Redux/Actions/Cart";

function resolutionDesktop() {
    const [desktop, setDesktop] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const resize = () => setDesktop(window.innerWidth >= 1024);
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    return desktop;
}

export default function CartItem({ cartItems }) {


    const isDesktop = resolutionDesktop();

    const dispatch = useDispatch();
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCartAction(id));
    }

    const addToCartHandler = (id, qty) => {
        dispatch(addToCartAction(id, qty))
    }
    return (
        <>
            <div>

                <ul role="list" className="md:flex md:flex-wrap md:gap-x-4 md:justify-center">
                    {
                        isDesktop ? (
                            <>
                                {Array.isArray(cartItems) && cartItems.map((product) => (

                                    <li key={product.product} className="flex items-center justify-between gap-x-4 h-36 bg-white border-[0.5px] border-[#ccc] my-4 lg:mb-6 lg:my-0 rounded-sm w-full py-6">
                                        <div className="flex">
                                            <div className="w-40 h-28 px-3">
                                                <img alt={product.imageAlt} src={product.image} className="h-full w-full object-contain rounded-sm" />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h3 className="font-semibold text-sm">
                                                    <a href={product.href}>{product.name}</a>
                                                </h3>
                                                <button onClick={() => removeFromCartHandler(product.product)} type="button" className="mt-4 font-semibold text-xs text-red-500 cursor-pointer text-left">
                                                    Eliminar
                                                </button>
                                            </div>
                                        </div>


                                        <div className="flex gap-x-12 mr-8">

                                            <div className="text-center">
                                                <div className="relative flex flex-col z-50">
                                                    <select
                                                        value={product.qty}
                                                        onChange={(e) => addToCartHandler(product.product, Number(e.target.value))}
                                                        className="block w-full lg:w-auto rounded-sm border border-[#ccc]  text-base text-gray-700 focus:border-celeste-primary focus:ring-2 focus:ring-blue-200 pr-16"
                                                        style={{
                                                            appearance: "none",
                                                            WebkitAppearance: "none",
                                                            MozAppearance: "none",
                                                            backgroundImage: "none",
                                                        }}
                                                    >
                                                        {[...Array(product.countInStock).keys()].map((x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1} u.
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-celeste-primary">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="size-6" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"></path> </g></svg>
                                                    </span>
                                                </div>
                                                <span className="text-xs font-light text-gray-500">{product.countInStock} Disponibles</span>
                                            </div>
                                            <span className="text-celeste-primary text-base font-bold my-2">US$ {product.price}</span>
                                        </div>
                                    </li>

                                ))}
                            </>
                        ) : (
                            <>
                                {Array.isArray(cartItems) && cartItems.map((product) => (
                                    <li key={product.product} className="flex h-36 bg-white border-[0.5px] border-[#ccc] my-4 rounded-l-sm md:w-full">
                                        <div className="h-full w-1/3 border-r-[0.5px] border-[#ccc]">
                                            <img alt={product.imageAlt} src={product.image} className="h-full w-full object-cover rounded-l-sm md:object-contain" />
                                        </div>

                                        <div className="flex flex-1 flex-col pt-3 px-2">
                                            <div>
                                                <div className="flex flex-col gap-y-2 justify-between text-xs font-medium">
                                                    <h3>
                                                        <a href={product.href}>{product.name}</a>
                                                    </h3>
                                                    <span className="text-celeste-primary text-sm font-bold my-2">US$ {product.price}</span>
                                                </div>
                                            </div>
                                            <div className="flex pt-4 items-center justify-between text-sm">


                                                <div className="relative inline-block">
                                                    <select
                                                        value={product.qty}
                                                        onChange={(e) => addToCartHandler(product.product, Number(e.target.value))}
                                                        className="block w-full rounded-sm border border-[#ccc] bg-white py-2 pl-3 pr-10 text-base text-gray-500 focus:border-celeste-primary focus:ring-2 focus:ring-blue-200"
                                                        style={{
                                                            appearance: "none",
                                                            WebkitAppearance: "none",
                                                            MozAppearance: "none",
                                                            backgroundImage: "none",
                                                        }}
                                                    >
                                                        {[...Array(product.countInStock).keys()].map((x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1} u.
                                                            </option>
                                                        ))}
                                                    </select>

                                                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-celeste-primary">
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="size-6" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"></path> </g></svg>
                                                    </span>

                                                </div>
                                                <div>
                                                    <button onClick={() => removeFromCartHandler(product.product)} type="button" className="font-semibold text-sm text-red-500 cursor-pointer">
                                                        Eliminar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                ))}
                            </>
                        )
                    }
                </ul>

            </div>
        </>
    )
}