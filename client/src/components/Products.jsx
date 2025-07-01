import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productListAction } from "../Redux/Actions/Product"
import { Link } from "react-router-dom";
import Loading from "./Loading";


const Products = () => {

    const dispatch = useDispatch();
    const productListReducer = useSelector((state) => state.productListReducer);
    const { loading, error, products = [] } = productListReducer;

    useEffect(() => {
        dispatch(productListAction());
    }, [dispatch]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : error ? (
                <h1>{error}</h1>
            ) : (
                <>

                    <section className="text-gray-600 body-font">
                        <div className="container py-24 px-5 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                {products.map((product) => (
                                    <div className="p-4 lg:w-1/4 md:w-1/2" key={product.id}>
                                        <div className="bg-white rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.12)]">
                                            <div className="max-w-2xl  lg:max-w-7xl">
                                                <div className="gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                                    <div className="group relative">
                                                        <img src={product.image} alt={product.name} className="aspect-square h-full w-full object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80 border-b border-b-[rgba(0,0,0,0.12)] p-8" />
                                                        <div className="mt-4 flex justify-between p-4">
                                                            <div>
                                                                <h3 className="text-sm font-semibold text-gray-900">
                                                                    <Link to={`/products/${product._id}`}>
                                                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                                                        {product.name}
                                                                    </Link>
                                                                </h3>
                                                                <p className="mt-1 text-sm text-gray-500">Calificación : {product.numReview}</p>
                                                            </div>
                                                            <p className="text-md font-semibold text-gray-900">US$ {product.price}</p>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </>

            )}
        </>
    )
}

export default Products;