// Layout
import Layout from "../Layouts/Layout";
// React & Redux
import { useSelector, useDispatch } from "react-redux";
import { userLogoutAction } from "../Redux/Actions/User";
// React router
import { Link } from "react-router-dom";

const Account = () => {
    const userLoginReducer = useSelector((state) => state.userLoginReducer);
    const { userInfo } = userLoginReducer;
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(userLogoutAction());
    }

    return (
        <Layout>
            <section className="min-h-[80vh] flex flex-col justify-center items-center gap-y-8 text-lg">
                {userInfo && (<>
                    <span className="text-gray-600">Nombre del usuario: <span className="text-celeste-primary">{userInfo.name}</span></span>
                    <span className="text-gray-600">Email del usuario: <span className="text-celeste-primary">{userInfo.email}</span></span>
                    <Link to="/login" className="cursor-pointer text-white bg-red-500 px-4 py-2 rounded-sm hover:brightness-110" onClick={() => logoutHandler()}>Cerrar cuenta</Link>
                </>)}
            </section>
        </Layout>
    )
}

export default Account;