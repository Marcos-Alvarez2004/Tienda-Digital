// React & React redux
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../Redux/Constants/BASE_URL";
import { orderAction, orderPaymentAction } from "../Redux/Actions/Order"
import { ORDER_RESET } from "../Redux/Constants/Order";
// React router
import { useNavigate } from "react-router-dom";
// Paypal API
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
// Axios
import axios from "axios";
// Components / Componentes
import ArrowBack from "../components/ArrowBack"
import Loading from "../components/Loading";

export default function PlaceOrder() {

    const [isLoading, setIsLoading] = useState(true);

    const cart = useSelector((state) => state.cartReducer);
    const { cartItems } = cart;

    const totalQty = cartItems?.reduce((acc, item) => acc + (item.qty || 0), 0) ?? 0;

    // subtotal
    const addDecimal = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    }
    // subtotal price
    const subtotal = addDecimal(cartItems.reduce((total, item) => total + item.qty * item.price, 0));
    const taxPrice = addDecimal(Number(0.15 * subtotal).toFixed(2));
    const shippingPrice = addDecimal(subtotal > 100 ? 0 : 20)
    // total
    const total = (Number(subtotal) + Number(taxPrice) + Number(shippingPrice)).toFixed(2);

    const [clientId, setClientId] = useState(null)

    // added for order confirm
    const orderReducer = useSelector((state) => state.orderReducer);
    const { order, success } = orderReducer;
    const [paymentResult, setPaymentResult] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        getPaypalClientID();

        // add for order confirm, payment success
        if (success) {
            dispatch({ type: ORDER_RESET });
            dispatch(orderPaymentAction(order._id, paymentResult))
            navigate(`/order/${order._id}`, {});
        }
    });

    const getPaypalClientID = async () => {
        const response = await axios.get(`${BASE_URL}/api/config/paypal`);
        const fetchedClientId = response.data;
        setClientId(fetchedClientId)
    }

    const dispatch = useDispatch();
    const successPaymentHandler = async (paymentResult) => {
        try {
            setPaymentResult(paymentResult)
            dispatch(orderAction({
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                totalPrice: total,
                paymentmethod: "paypal",
                price: subtotal,
                taxPrice: taxPrice,
                shippingPrice: shippingPrice
            }))
        } catch (err) {
            console.log(err)
        }
    }

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


            <section className="min-h-screen flex flex-col justify-center items-center px-5">
                <div className="flex justify-center items-center">
                    <h2 className="text-2xl font-semibold relative line">Elige tu forma de pago</h2>
                </div>
                <div className="relative py-24 mx-auto">
                    <div className="mx-auto flex flex-wrap">
                        <div className="w-full mb-6 font-normal text-base">
                            <div className="flex py-2">
                                <span>Productos ({totalQty})</span>
                                <span className="ml-auto text-gray-900 font-medium">US$ {subtotal}</span>
                            </div>
                            <div className="flex py-2">
                                <span>Impuesto</span>
                                <span className="ml-auto text-gray-900 font-medium">US$ {taxPrice}</span>
                            </div>
                            <div className="flex mb-6 py-2">
                                <span>Envio</span>
                                <span className="ml-auto text-gray-900 font-medium">US$ {shippingPrice}</span>
                            </div>
                            <div className="flex items-center justify-center mb-6 py-2 text-xl font-medium border-b border-[#ccc]">
                                <span>Total a pagar</span>
                                <span className="ml-auto text-celeste-primary">US$ {total}</span>
                            </div>
                        </div>
                        <div className="w-full mx-auto">

                            {clientId && (
                                <>
                                    <PayPalScriptProvider options={{ clientId: clientId }}>
                                        <PayPalButtons
                                            createOrder={(data, actions) => {
                                                return actions.order.create({
                                                    purchase_units: [
                                                        {
                                                            amount: {
                                                                currency_code: "USD",
                                                                value: total
                                                            }
                                                        }
                                                    ]
                                                })
                                            }}
                                            onApprove={(data, actions) => {
                                                return actions.order.capture().then(function (details) {
                                                    successPaymentHandler(details)
                                                })
                                            }}
                                        />
                                    </PayPalScriptProvider>
                                </>
                            )}
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}