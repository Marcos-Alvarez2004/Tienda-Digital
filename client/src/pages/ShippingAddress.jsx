import { saveShippingAddressAction } from "../Redux/Actions/Cart";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBack from '../components/ArrowBack';
import { useDispatch, useSelector } from "react-redux";

export default function shippingAddress() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { shippingAddress } = useSelector((state) => state.cartReducer);
    // shipping address form data
    const [address, setAddress] = useState(shippingAddress?.address || "")
    const [city, setCity] = useState(shippingAddress?.city || "")
    const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode || "")
    const [country, setCountry] = useState(shippingAddress?.country || "")
    const saveShippingAddress = () => {
        dispatch(
            saveShippingAddressAction({
                address,
                city,
                postalCode,
                country
            })
        )
    }

    const handleAddress = async () => {
        await saveShippingAddress();
        navigate("/placeorder")
    };

    return (
        <>

            <ArrowBack />
            <section className="py-3 h-full flex flex-col px-4 max-w-screen-sm mx-auto">
                <div className="flex items-center justify-center">
                    <h2 className="text-2xl font-semibold relative line">Dirección de la entrega</h2>
                </div>
                <div className="flex h-full px-4 py-12">
                    <div className="flex flex-col gap-y-4 relative mb-4 w-full h-full">
                        <div className="mb-5 lg:w-2/3 lg:mx-auto">
                            <label htmlFor="address" className="leading-7 text-sm font-bold">Dirección</label>
                            <input type="text" id="address" name="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full bg-white rounded border-[0.5px] border-[#ccc] focus:border-celeste-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="mb-5 lg:w-2/3 lg:mx-auto">
                            <label htmlFor="city" className="leading-7 text-sm font-bold">Ciudad</label>
                            <input type="text" id="city" name="city" value={city}
                                onChange={(e) => setCity(e.target.value)} className="w-full bg-white rounded border-[0.5px] border-[#ccc] focus:border-celeste-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="mb-5 lg:w-2/3 lg:mx-auto">
                            <label htmlFor="postalcode" className="leading-7 text-sm font-bold">Codigo postal</label>
                            <input type="text" id="postalcode" name="postalcode" value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)} className="w-full bg-white rounded border-[0.5px] border-[#ccc] focus:border-celeste-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="mb-5 lg:w-2/3 lg:mx-auto">
                            <label htmlFor="country" className="leading-7 text-sm font-bold">Pais</label>
                            <input type="text" id="country" name="country" value={country}
                                onChange={(e) => setCountry(e.target.value)} className="w-full bg-white rounded border-[0.5px] border-[#ccc] focus:border-celeste-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>

                </div>
                <div className="px-4 w-full lg:w-1/2 lg:mx-auto">
                    <button onClick={handleAddress} className="text-white w-full text-base font-semibold bg-celeste-primary border-0 py-3 px-6 focus:outline-none rounded-sm cursor-pointer tracking-widest">Guardar dirección</button>
                </div>
            </section >
        </>
    )
}