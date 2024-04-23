import "./Components.css"
import {useState} from "react";
import {ReactComponent as Location} from "../assets/location.svg"

export function Experience() {
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const handleClick = (number) => {
        switch (number) {
            case 1:
                setOpen1(!open1);
                break;
            case 2:
                setOpen2(!open2);
                break;
            case 3:
                setOpen3(!open3);
                break;    
            default:
                break;
        }
    };
    const toolsCompax = ["Java", "Spring-boot", "Angular", "GitLab", "OracleDB", "Rest-API"]
    const toolsSmax = ["React", "Angular", "Node.js", "GitLab", "Docker", "Rest-API", "JavaScript"]
    const toolsPA = ["Spring", "Rest-API", "Jenkins", "Git", "SQL", "Java"]

    return (
        <div className="header">
            <h3 style={{margin: 20}}>PROFESSIONAL EXPERIENCE</h3>
            <div style={styles.container}>
                <ExpElement title="Software Engineer @ Compax" time="2023 - Present" open={open1}
                            click={() => {
                                handleClick(1)
                            }}/>
                {open1 && (
                    <ExpContainer tools={toolsCompax} loc="Graz, Austria">
                       Developing Rest/SOAP-APIs,
                        implementing and extending Kafka,
                        developing and improving a server-side
                        web-interface
                    </ExpContainer>)}

                <ExpElement title="Web Developer @ smaXtec animal care" time="2022 - 2023" open={open2}
                        click={() => { handleClick(2) }}/>
                {open2 && (
                <ExpContainer tools={toolsSmax} loc="Gleisdorf, Austria">
                    Development of interfaces between third-party software and customization of existing software
                    for customers
                </ExpContainer>)}

                <ExpElement title="Software Engineer @ proALPHA" time="2021 - 2022" open={open3} 
                    click={() => { handleClick(3) }}/>
                {open3 && (
                    <ExpContainer tools={toolsPA} loc="Gleisdorf, Austria">
                        Development of interfaces between third-party software and customization of existing software
                        for customers
                    </ExpContainer>)}
            </div>
        </div>
    )
}

function ExpContainer(props) {
    return (
        <div style={styles.expContainer}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                height: 30,
                marginTop: 20,
                marginLeft: 20
            }}>
                <Location style={{width: 20, height: 20, fill: "white", marginRight: 10}}/>
                <p>{props.loc}</p>
            </div>
            <div style={{marginLeft: 20}}>
                <p>{props.children}</p>
            </div>
            <div style={{display: "flex", flexDirection: "row", marginTop: 20}}>
                {props.tools.map((tool) => (
                    <Chip>{tool}</Chip>
                ))}

            </div>
        </div>
    );
}

function ExpElement(props) {

    return (
        <div style={styles.expElement}>
            <p style={styles.title}>{props.title}</p>
            <p style={styles.time}>{props.time}</p>
            {props.open && (
                <button className="openButton" onClick={props.click}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                </button>
            )}
            {!props.open && (
                <button className="closedButton" onClick={props.click}>
                </button>
            )}
        </div>
    );
}

function Chip(props) {
    return (
        <div style={styles.chip}>
            <p style={{margin: 10}}>{props.children}</p>
        </div>
    )
}

const styles = {
    chip: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 30,
        maxWidth: 180,
        marginLeft: 10,
        backgroundColor: "#C2544A",
        borderRadius: 20,
        marginBottom: 10,
    },
    container: {
        width: "70vw",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 20
    },
    expElement: {
        height: "60px",
        backgroundColor: "#2a3e69",
        width: "700px",
        minWidth: "400px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: 10
    },
    expContainer: {
        height: "180px",
        backgroundColor: "#152034",
        width: "700px",
        minWidth: "400px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        fontFamily: "monospace",
        fontSize: "16px",
        color: "white",
    },
    title: {
        marginLeft: 10,
        fontFamily: "monospace",
        fontSize: "16px",
        fontWeight: "bold",
        color: "white",
        width: 400,
    },
    time: {
        paddingLeft: 110,
        flex: 1,
        fontFamily: "monospace",
        fontSize: "16px",
        fontWeight: "bold",
        color: "white"
    },
}
