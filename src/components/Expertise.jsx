import "./Components.css"
import {ReactComponent as DB} from "../assets/db.svg"
import {ReactComponent as PG} from "../assets/programming.svg"
import {ReactComponent as M} from "../assets/monitor.svg"

export function Expertise() {
    return (
        <div className="header" style={{margin: 550}}>
            <h3 style={{margin: 20}}>EXPERTISES</h3>
            <div className="expertise">
                <TechStack icon={"pg"} head="Software Development">
                    Experienced in both functional and OOP: JavaScript,
                    TypeScript, Java, Python and know-how with Git and
                    Docker
                </TechStack>
                <TechStack icon={"monitor"} head="Frontend Development">
                    Experienced in common frameworks like React (-Native), Angular and
                    good skills in CSS, HTML and JS/TS.
                </TechStack>
                <TechStack icon={"db"} head="Backend Development">
                    Passionate in scalable backend-systems with microservices and RESTful, experienced with Node.js,
                    Express.js, Spring, MySQL and MongoDB.
                </TechStack>
            </div>
        </div>
    )
}

function TechStack(props) {
    const brace = "<div>"
    const endBrace = "</div>"
    return (
        <div className="tech-stack">
            <div className="tech-container">
                <div className="icon-container">
                    {props.icon === "db" && (<DB style={{width: 50, height: 50, fill: "white"}}/>)}
                    {props.icon === "monitor" && (<M style={{width: 50, height: 50, fill: "white"}}/>)}
                    {props.icon === "pg" && (<PG style={{width: 50, height: 50, fill: "white"}}/>)}
                </div>
                <div className="text-container">
                    <p>{props.head}</p>
                </div>

            </div>
            <div className="expertise-desc">
                <p className="brace">{brace}</p>
                <div className="desc">
                    <p className="desc">{props.children}</p>
                </div>
                <p className="brace">{endBrace}</p>
            </div>
        </div>
    )


}