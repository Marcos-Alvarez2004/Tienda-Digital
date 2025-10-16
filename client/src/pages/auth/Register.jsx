import { useState } from "react";
import Layout from "../../Layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAction } from "../../Redux/Actions/User";
import Loading from "../../components/Loading";

export default function Register() {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    const userRegisterReducer = useSelector((state) => state.userRegisterReducer);
    const { loading, error, userInfo } = userRegisterReducer;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(userRegisterAction(name, email, password));
    }

    return (
        <>
            <Layout>
                {loading ? (<Loading />) : error ? <h1>{error}</h1> : (
                    <>
                        <section className="mt-20 py-3 h-full flex flex-col px-4 max-w-screen-sm mx-auto">
                            <div className="flex items-center justify-center pb-4">
                                <h2 className="text-2xl font-semibold relative line">Registrar usuario</h2>
                            </div>
                            <form onSubmit={submitHandler} className="py-8">
                                <div className="flex flex-col gap-y-4 relative mb-4 w-full h-full">

                                    <div className="mb-5 lg:w-2/3 lg:mx-auto">
                                        <label htmlFor="name" className="leading-7 text-sm font-bold mr-auto">Nombre del usuario:</label>
                                        <input type="text" id="name" name="name"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full bg-white rounded border-[0.5px] border-[#ccc] focus:border-celeste-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>

                                    <div className="mb-5 lg:w-2/3 lg:mx-auto">
                                        <label htmlFor="eiaml" className="leading-7 text-sm font-bold mr-auto">Email de la cuenta</label>
                                        <input type="text" id="email" name="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-white rounded border-[0.5px] border-[#ccc] focus:border-celeste-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>

                                    <div className="mb-5 lg:w-2/3 lg:mx-auto">
                                        <label htmlFor="password" className="leading-7 text-sm font-bold">Contraseña</label>
                                        <input type="text" id="password" name="password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full bg-white rounded border-[0.5px] border-[#ccc] focus:border-celeste-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <div className="px-4 w-full lg:w-1/2 lg:mx-auto">
                                        <button className="text-white w-full text-base font-semibold bg-celeste-primary border-0 py-3 px-8 focus:outline-none rounded-sm cursor-pointer tracking-widest hover:brightness-110">Registrar</button>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </>
                )}
            </Layout>
        </>
    );
}
