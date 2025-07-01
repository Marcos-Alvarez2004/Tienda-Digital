import Footer from "./Footer"
import Navbar from "./Navbar"
import 'flowbite';


const Layout = ({ children }) => {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </div>
        </>
    )
}

export default Layout;