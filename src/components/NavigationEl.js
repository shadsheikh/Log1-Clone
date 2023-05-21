import { SlSpeedometer } from "react-icons/sl";
import { RiHandbagFill} from "react-icons/ri";
import { BsPersonGear} from "react-icons/bs";
import { FaRobot} from "react-icons/fa";
import { HiWrenchScrewdriver} from "react-icons/hi2";

import './NavigationEl.css'

const NavigationEl = (props) => {
    return(
    <>
        <div className="container-nav">
            <SlSpeedometer className="icon-nav"/>
            <p className="text-nav">Dashboard</p>
        </div>
        <div className="container-nav">
            <RiHandbagFill className="icon-nav"/>
            <p className="text-nav">Market</p>
        </div>
        <div className="container-nav">
            <BsPersonGear className="icon-nav"/>
            <p className="text-nav">Consultant</p>
        </div>
        <div className="container-nav">
            <FaRobot className="icon-nav"/>
            <p className="text-nav">Engineering</p>
        </div>
        <div className="container-nav">
            <HiWrenchScrewdriver className="icon-nav"/>
            <p className="text-nav">Utilities</p>
        </div>
    </>
    );
}

export default NavigationEl;