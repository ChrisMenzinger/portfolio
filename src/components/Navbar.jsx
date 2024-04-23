import {useState} from "react";
import "./Components.css";

export function Navbar() {
    const [isHidden, setIsHidden] = useState(false);
    const handleMouseMove = (event) => {
        if (document.documentElement.scrollTop === 0) {
            setIsHidden(true)
        } else {
            setIsHidden(event.clientY < 40);
        }
    };


    window.addEventListener("mousemove", handleMouseMove);

    return (
        <div className={`navbar ${isHidden ? "hidden" : "visible"}`}>
            <NavButton name="// home" onClick={() => window.scroll({top: 1, behavior: "smooth"})}/>
            <NavButton name="// expertise" onClick={() => window.scroll({top: 1000, behavior: "smooth"})}/>
            <NavButton name="// experience" onClick={() => window.scroll({top: 2000, behavior: "smooth"})}/>
            <NavButton name="// contact" onClick={() => window.scroll({top: 10000, behavior: "smooth"})}/>
        </div>
    );
}

const NavButton = (props) => {
    return <button className="button" onClick={props.onClick}>{props.name}</button>;
};
