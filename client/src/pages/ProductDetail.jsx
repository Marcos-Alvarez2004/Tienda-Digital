// React & Redux 
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// React router
import { Link, useParams } from "react-router-dom";
// Layout
import Layout from "../Layouts/Layout";
// Component Loading / Componente Loading
import Loading from "../components/Loading";
import WarningAlert from "../components/WarningAlert";
// Redux
import { productAction } from "../Redux/Actions/Product";
import { addToCartAction } from "../Redux/Actions/Cart"
// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css"

function ProductDetail() {

    const { id } = useParams()

    const dispatch = useDispatch();
    const productReducer = useSelector((state) => state.productReducer);
    const { loading, error, product } = productReducer;

    useEffect(() => {
        dispatch(productAction(id))
    }, [dispatch, id])

    const cart = useSelector((state) => state.cartReducer);
    const { cartItems } = cart;

    const userLoginReducer = useSelector((state) => state.userLoginReducer);
    const { userInfo } = userLoginReducer;

    const handleAddCart = (product) => {
        const isAddCart = cartItems?.some((item) => item.product === product._id)
        if (isAddCart) {
            toast.info(`${product.name} ya está en tu carrito`, {
                position: "bottom-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        } else {
            dispatch(addToCartAction(product._id, 1));
            toast.success(`${product.name} agregado al carrito`, {
                position: "bottom-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        }
    };

    return (
        <Layout>
            {loading ? (
                <Loading />
            ) : error ? (
                <h1>{error}</h1>
            ) : !product ? (
                <h1 className="text-center text-xl">¡Producto no encontrado!</h1>
            ) : (
                <>
                    <section className="overflow-hidden my-12 text-center max-w-screen-lg mx-auto px-8 py-2">
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">

                            <div className="w-full lg:w-96 h-96 flex justify-center">
                                <img
                                    alt={product.name}
                                    className="w-full h-full  object-cover object-center border-b-[0.5px] border-[#ccc] lg:border-none bg-white"
                                    src={product.image}
                                />
                            </div>


                            <div className="md:w-3/4 w-full lg:pl-8 mt-4 lg:mt-0">
                                <div className="flex justify-center mb-8">
                                    <h1 className="text-2xl lg:text-3xl font-medium mb-4 relative line">{product.name}</h1>
                                </div>

                                <div className="flex items-center justify-between mb-4 lg:w-1/2 lg:mx-auto">
                                    <span className="flex items-center gap-2">
                                        <span className="font-normal text-sm lg:text-base">
                                            Calificación : {product.numReview?.$numberDecimal}
                                        </span>
                                        <svg
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5 text-[#FFD43B]"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                    </span>

                                    <span className="font-normal text-sm lg:text-base">
                                        Precio :{" "}
                                        <span className="text-celeste-primary font-bold">
                                            US$ {product.price}.00
                                        </span>
                                    </span>
                                </div>

                                {!userInfo ? (
                                    <>
                                        <div className="my-6">
                                            <Link to="/login">
                                                <button className="lg:w-1/2 py-3 px-6 bg-celeste-primary text-white rounded-xs text-base font-semibold tracking-widest hover:cursor-pointer hover:brightness-105">
                                                    Agregar al carrito
                                                </button>
                                            </Link>
                                        </div>
                                    </>) : (
                                    <>
                                        <div className="my-6">
                                            {product.countInStock > 0 ? (
                                                <button
                                                    onClick={() => handleAddCart(product)}
                                                    className="text-white w-full lg:w-1/2 text-base font-semibold bg-celeste-primary border-0 py-3 px-6 focus:outline-none rounded-sm cursor-pointer tracking-widest hover:brightness-105"
                                                >
                                                    Agregar al carrito
                                                </button>
                                            ) : (
                                                <button className="text-white w-full lg:w-1/2 text-base font-semibold bg-celeste-primary border-0 py-3 px-6 focus:outline-none rounded-sm tracking-widest cursor-not-allowed">
                                                    ¡Sin stock!
                                                </button>
                                            )}
                                        </div>
                                    </>
                                )}

                                <div className="mt-8">
                                    <div className="flex justify-center mb-8">
                                        <h3 className="text-base font-semibold  relative line lg:text-lg">Descripción</h3>
                                    </div>
                                    <p className="leading-relaxed text-gray-600 font-normal text-left text-sm lg:text-base">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <ToastContainer />
                    <div className="px-4">
                        <WarningAlert />
                    </div>
                </>
            )
            }
        </Layout >
    );
}

export default ProductDetail;