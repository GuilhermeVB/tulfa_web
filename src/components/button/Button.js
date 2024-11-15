import { FaPlus } from "react-icons/fa6";

export const Button = ({buttonClick}) => {

    return (
        <button onClick={buttonClick} className="button_container">
            <FaPlus className="button_icon" /> Take a closer look
        </button>
    );
}