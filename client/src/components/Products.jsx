// React & React redux
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// React router
import { Link } from "react-router-dom";
// Components / Componentes
import Loading from "./Loading";
// React rating stars
import ReactStars from "react-rating-stars-component";
// Redux
import { productListAction } from "../Redux/Actions/Product";
import { addToCartAction } from "../Redux/Actions/Cart";
// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

const Products = () => {

    const numReviewsStar = (numReview) => ({
        size: 15,
        count: 5,
        value: parseFloat(numReview || 0),
        edit: false,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" style={{ color: "#CCCCCC" }} />,
        halfIcon: <i className="fas fa-star-half-alt" style={{ color: "#FFD43B" }}></i>,
        filledIcon: <i className="fa fa-star" style={{ color: "#FFD43B" }} />,
    })

    const dispatch = useDispatch();
    const productListReducer = useSelector((state) => state.productListReducer);
    const { loading, error, products = [] } = productListReducer;

    const userLoginReducer = useSelector((state) => state.userLoginReducer);
    const { userInfo } = userLoginReducer;

    const cart = useSelector((state) => state.cartReducer);
    const { cartItems } = cart;

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



    useEffect(() => {
        dispatch(productListAction());
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : error ? (
                <h1>{error}</h1>
            ) : (
                <>

                    <section className="my-8">
                        <div className="container px-5 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                {products.map((product) => (
                                    <div className="px-4 py-3 lg:w-1/3 xl:w-1/4 md:w-1/2 w-full" key={product.id}>
                                        <div className="bg-white rounded-sm border-[0.5px] border-[#ccc]">


                                            <div>
                                                <Link to={`/products/${product._id}`} className="hover:brightness-105">
                                                    <img src={product.image} alt={product.name} className="rounded-t-sm aspect-square md:aspect-video object-cover h-full w-full lg:h-80 border-b-[0.5px] border-[#ccc]" />
                                                </Link>

                                                <div className="flex flex-col gap-y-4 justify-between px-4 py-4">

                                                    <h3 className="text-sm font-medium text-black">
                                                        <Link to={`/products/${product._id}`}>
                                                            <span aria-hidden="true" className="hover:underline hover:text-celeste-primary">
                                                                {product.name}
                                                            </span>
                                                        </Link>
                                                    </h3>
                                                    <p className="text-xl font-bold text-celeste-primary">US$ {product.price}</p>
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-sm font-light text-black">Calificación:</span>
                                                        <ReactStars {...numReviewsStar(product.numReview?.$numberDecimal)} />
                                                    </div>

                                                </div>
                                                {!userInfo ? (
                                                    <>
                                                        <Link to="/login" className="flex justify-center items-center px-4 pb-2">
                                                            <button className="m-auto w-full p-2 bg-celeste-primary text-white rounded-xs text-base font-semibold tracking-widest hover:cursor-pointer hover:brightness-105">
                                                                Agregar al carrito
                                                            </button>
                                                        </Link>
                                                    </>) : (
                                                    <>
                                                        {
                                                            product.countInStock > 0 ? (
                                                                <div className="px-4 pb-2">
                                                                    <button onClick={() => handleAddCart(product)} className="m-auto w-full p-2 bg-celeste-primary text-white rounded-xs text-base font-semibold tracking-widest hover:cursor-pointer hover:brightness-105">Agregar al carrito</button>
                                                                </div>
                                                            ) : (
                                                                <>
                                                                    <div className="px-4 pb-2">
                                                                        <button className="m-auto w-full p-2 bg-celeste-primary text-white rounded-xs text-base font-semibold tracking-widest hover:cursor-no-drop">¡Sin stock!</button>
                                                                    </div>
                                                                </>
                                                            )
                                                        }
                                                    </>
                                                )}
                                            </div>

                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <ToastContainer />
                </>

            )}
        </>
    )
}

export default Products;