import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Layout from "../Layouts/Layout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { orderDetailAction } from "../Redux/Actions/Order";
import Loading from "../components/Loading";

const OrderConfirmation = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(orderDetailAction(id));
    }, [dispatch, id])

    const orderDetailReducer = useSelector((state) => state.orderDetailReducer)
    const { order, loading } = orderDetailReducer;
    // Confetti state
    const [confettiActive, setConfettiActive] = useState(true);

    // Confetti timer to stop after 5 seconds / Tiempo del confetti en parar después 5 segundos
    useEffect(() => {
        const timer = setTimeout(() => {
            setConfettiActive(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Layout>
            {loading ? (
                <section className="flex justify-center items-center mt-16">
                    <Loading />
                </section>
            ) : (
                <section className="flex items-center justify-center mt-16">
                    {confettiActive && <Confetti />}
                    <div className="px-6 rounded-lg text-center">
                        <h1 className="text-2xl font-bold text-celeste-primary mb-4">
                            Pago completado!
                        </h1>
                        <p className="text-base text-gray-600 mb-4">
                            Gracias por su compra.
                        </p>
                        <div className="mb-4 py-8">
                            {order && (
                                <div className="text-left">
                                    <p className="text-sm py-2">
                                        <strong className="mr-2">ID de la compra:</strong> {order._id}
                                    </p>
                                    <p className="text-sm py-2">
                                        <strong className="mr-2">Usuario:</strong> {order.user.name}
                                    </p>
                                    <p className="text-sm py-2">
                                        <strong className="mr-2">Email del usuario:</strong> {order.user.email}
                                    </p>
                                </div>
                            )}
                        </div>
                        <button
                            className="m-auto px-6 p-2 bg-celeste-primary text-white rounded-xs text-base font-semibold tracking-widest hover:cursor-pointer"
                            onClick={() => {
                                window.location.href = "/";
                            }}
                        >
                            Volver al inicio
                        </button>
                    </div>
                </section>
            )}
        </Layout>
    );
};

export default OrderConfirmation;