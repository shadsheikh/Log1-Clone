import { BsGlobe2 } from "react-icons/bs";
import { RiGroupLine} from "react-icons/ri";
import { BsPerson} from "react-icons/bs";
import './Option.css'

const Options = ()=>{
    return(
    <div className="row-opt">
        <div className="container-opt">
            <BsGlobe2 className="icon-opt-s"/>
            <p className="text-opt-s">Global</p>
        </div>
        <div className="container-opt">
            <RiGroupLine className="icon-opt-u"/>
            <p className="text-opt-u">Team</p>
        </div>
        <div className="container-opt">
            <BsPerson className="icon-opt-u"/>
            <p className="text-opt-u">My</p>
        </div>
    </div>
    );
}
export default Options;