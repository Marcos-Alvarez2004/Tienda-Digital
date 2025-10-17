export default function WarningAlert() {
    return (
        <div className="flex justify-center items-center">
            <p className="text-white bg-yellow-500 px-3 py-2 text-xs lg:text-sm lg:rounded-xs"><strong>ADVERTENCIA</strong>: Solo se podrán realizar pagos por PayPal con una cuenta PayPal Developer (Sandbox)</p>
        </div>
    );
};