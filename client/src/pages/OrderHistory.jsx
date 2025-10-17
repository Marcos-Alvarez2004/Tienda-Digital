// React & React redux
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderListAction } from "../Redux/Actions/Order";
// Layout
import Layout from "../Layouts/Layout";
// Loading component / Loading componente
import Loading from "../components/Loading"
// Moment
import moment from "moment";

export function OrderHistory() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(orderListAction());
    }, [dispatch])

    const orderListReducer = useSelector((state) => state.orderListReducer)
    const { orders, loading, error } = orderListReducer;
    return (
        <>
            <Layout>
                {loading ? (
                    <section className="flex justify-center items-center mt-16">
                        <Loading />
                    </section>
                ) : (
                    <section className="py-8 md:py-16">
                        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                            <div className="mx-auto max-w-5xl">
                                <div className="flex justify-center items-center">
                                    <h2 className="text-2xl font-semibold relative line">Mis compras</h2>
                                </div>

                                <div className="mt-6 sm:mt-8 flex flex-wrap justify-center  gap-8">

                                    {
                                        orders && (
                                            orders.map((order) => (

                                                <div key={order._id} className="flex flex-wrap justify-center items-center gap-y-4 py-6">

                                                    <div className="text-left border-[0.5px] border-[#ccc] px-4 py-2 rounded-sm text-sm">
                                                        <p className="text-lg py-2">
                                                            <strong className={`mr-2 ${order.isPaid ? "text-green-500" : "text-red-500"}`}>{order.isPaid ? "Pagado" : "No pagado"}</strong>
                                                        </p>
                                                        <p className="py-2">
                                                            <strong className="mr-2">ID de la compra:</strong> {order._id}
                                                        </p>
                                                        <p className="py-2">
                                                            <strong className="mr-2">Fecha de la compra:</strong> {moment(order.createdAt).format("DD/MM/YYYY")}
                                                        </p>
                                                        <p className="py-2">
                                                            <strong className="mr-2">Total de la compra:</strong> US$ {order.totalPrice}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))

                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </Layout>
        </>
    );
}
