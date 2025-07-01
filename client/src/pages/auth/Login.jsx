import { useState } from "react";
import Layout from "../../Layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../../Redux/Actions/User";
import Loading from "../../components/Loading"

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const userLoginReducer = useSelector((state) => state.userLoginReducer);

    const { loading, error, userInfo } = userLoginReducer;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(userLoginAction(email, password));
    }
    return (
        <>
            <Layout>
                {loading ? (<Loading />) : error ? <h1>{error}</h1> : (
                    <>
                        <form onSubmit={submitHandler} className="max-w-sm mx-auto">
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                        </form>
                    </>
                )}
            </Layout>
        </>
    );
}
