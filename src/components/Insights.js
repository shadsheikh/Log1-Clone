import { IoDiamondOutline } from "react-icons/io5";
import { SlDrawer } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";
import { HiOutlineNewspaper } from "react-icons/hi";
import { TfiCup } from "react-icons/tfi";
import './Insights.css'

const Insights = () =>{
    return(
        <div className="main-row">
        <div className="box-i pink">
            <div className="row-i">
                <IoDiamondOutline className="icon-i" size="2em"/>
            </div>
            <div className="column-i">
                <p className="text-h-i">10409</p>
                <p className="text-s-i">Submission</p>
            </div>
        </div>
        <div className="box-i yellow">
            <div className="row-i">
                <SlDrawer className="icon-i" size="2em"/>
            </div>
            <div className="column-i">
                <p className="text-h-i">608</p>
                <p className="text-s-i">Interview</p>
            </div>
        </div>
        <div className="box-i green">
            <div className="row-i">
                <AiOutlineDollar className="icon-i" size="2em"/>
            </div>
            <div className="column-i">
                <p className="text-h-i">78</p>
                <p className="text-s-i">Offer</p>
            </div>
        </div>
        <div className="box-i terqoish">
            <div className="row-i">
                <HiOutlineNewspaper className="icon-i" size="2em"/>
            </div>
            <div className="column-i">
                <p className="text-h-i">0</p>
                <p className="text-s-i">BA Bench</p>
            </div>
        </div>
        <div className="box-i blue">
            <div className="row-i">
                <HiOutlineNewspaper className="icon-i" size="2em"/>
            </div>
            <div className="column-i">
                <p className="text-h-i">85</p>
                <p className="text-s-i">Dev Bench</p>
            </div>
        </div>
        <div className="box-i peech">
            <div className="row-i">
                <TfiCup className="icon-i" size="2em"/>
            </div>
            <div className="column-i">
                <p className="text-h-i">8</p>
                <p className="text-s-i">On Project</p>
            </div>
        </div>
        </div>
    );
}

export default Insights