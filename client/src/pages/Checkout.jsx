'use client'
// React & React Redux
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
// React Router
import { Link } from "react-router-dom";
// Components / Componentes
import CartItem from '../components/CartItem'
import ArrowBack from '../components/ArrowBack';
import Loading from "../components/Loading";

export default function Checkout() {
    const [isLoading, setIsLoading] = useState(true);

    const cart = useSelector((state) => state.cartReducer)
    const { cartItems } = cart;

    const totalQty = cartItems?.reduce((acc, item) => acc + (item.qty || 0), 0) ?? 0;

    // subtotal
    const addDecimal = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    }
    const subtotal = addDecimal(cartItems.reduce((total, item) => total + item.qty * item.price, 0));
    const shippingPrice = addDecimal(subtotal > 250 ? 0 : 20);

    const total = (Number(subtotal) + Number(shippingPrice)).toFixed(2);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false)
        }, 800)

        return () => clearTimeout(timeout)
    }, [])

    if (isLoading) {
        return (
            <section className="min-h-screen flex justify-center items-center">
                <Loading />
            </section>
        )
    }

    return (
        <>
            <ArrowBack />
            <section className="py-4 min-h-screen flex flex-col items-center max-w-screen-lg mx-auto">
                <h1 className='text-2xl relative line lg:mb-8'>Carrito</h1>
                <div className='md:flex md:justify-between w-full mt-16'>
                    <div className="container mx-auto lg:m-0 px-4">
                        {cartItems.length > 0 ? (
                            <>
                                <CartItem cartItems={cartItems} removeFromCartHandler={() => removeFromCartHandler(product.product)} />
                            </>
                        ) : (
                            <p className='text-center text-gray-600 mt-8 text-base lg:text-lg'>Tu carrito está vacío.</p>
                        )}
                    </div>

                    {cartItems.length > 0 ? (
                        <div className='w-full md:w-1/2 md:mx-auto py-2 px-4 lg:py-0'>
                            <div className=' border-[0.5px] border-[#ccc] rounded-sm bg-white'>
                                <h4 className='text-sm px-4 py-3 font-medium border-b-[0.5px] border-[#ccc]'>Resumen de la compra</h4>
                                <div className='py-3 px-4'>
                                    <div className='flex justify-between items-center font-normal text-xs mb-1 pb-2'>
                                        <span>Producto/s ({totalQty})</span>
                                        <span>US$ {subtotal}</span>
                                    </div>
                                    <div className='flex justify-between items-center font-normal text-xs mb-1 pb-2'>
                                        <span>Envio</span>
                                        <span>US$ {shippingPrice}</span>
                                    </div>
                                    <div className='flex justify-between items-center font-semibold pb-2 pt-4'>
                                        <span>Total</span>
                                        <span>US$ {total}</span>
                                    </div>
                                    <Link to="/address">
                                        <button
                                            className="m-auto w-full p-2 bg-celeste-primary text-white rounded-xs text-base font-semibold tracking-widest hover:cursor-pointer"
                                        >
                                            Continuar la compra
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </section>
        </>
    )
}
