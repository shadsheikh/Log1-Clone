import { AiOutlineDown} from "react-icons/ai";
import './Dropdown.css';

const Dropdown = () => {
    return(
        <div className="box">
            <p className="text-dd">This Year</p>
            <AiOutlineDown className="icon-dd"/>
        </div>
    );
}

export default Dropdown;