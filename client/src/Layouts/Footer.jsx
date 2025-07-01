import LogoVite from "/vite.svg"

const Footer = () => {
    return (<>
        <footer className="bg-white p-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={LogoVite} className="h-8" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Tienda Digital</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Inicio</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Historial de compras</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">sobre la pagina</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contacto del creador</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center">© 2023 <a href="https://github.com/Marcos-Alvarez2004" className="hover:underline">Marcos Alvarez</a>. Derechos reservados.</span>
            </div>
        </footer>
    </>);
}

export default Footer;