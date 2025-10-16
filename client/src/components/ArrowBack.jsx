import { useNavigate } from "react-router-dom";
import Arrow from "../assets/Arrows/arrowLeft.svg"

export default function ArrowBack() {
    const navigate = useNavigate();

    return (
        <button className="ml-4 mt-4 cursor-pointer"
            onClick={() => navigate(-1)}
        >
            <img className="size-10" src={Arrow} alt="Volver" />
        </button>
    );
}