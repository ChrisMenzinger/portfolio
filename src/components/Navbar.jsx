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
            <NavButton name="// home"/>
            <NavButton name="// expertise"/>
            <NavButton name="// work"/>
            <NavButton name="// experience"/>
            <NavButton name="// contact"/>
        </div>
    );
}

const NavButton = (props) => {
    return <button className="button">{props.name}</button>;
};
