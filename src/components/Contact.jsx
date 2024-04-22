import cv from '../assets/cv.png'
import "./Components.css"
import cvm from '../assets/CV-Menzinger.pdf'

export function Contact(props) {
    return (
        <div style={props.width < 460 ? styles.app : styles.container}>
            <div style={styles.contact}>
                <p style={styles.h1}>Contact Me</p>
                <p style={styles.text}> AT 8333 Riegersburg</p>
                <p style={styles.text}> Dörfl 11</p>
                <p style={styles.text}> Christoph Menzinger</p>

                <p style={styles.mail} onClick={openEmailTool}>menzinger202@gmail.com</p>
                <p style={styles.git}
                   onClick={() => window.open("https://gitlab.com/ChrisMenzinger")}>GitLap</p>
            </div>
            <div>
                <p style={styles.h1}>Curriculum Vitae</p>
                <div>
                    <div style={styles.png} className="cv" onClick={handlePdfClick}></div>

                </div>
            </div>
        </div>
    )
}

function handlePdfClick() {
    window.open(cvm, '_blank');
}

function openEmailTool() {
    const email = "menzinger202@gmail.com";
    const subject = "We want you!";
    const body = "Nice Portfolio";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
        subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
}

const styles = {
    container: {
        width: "70vw",
        height: "410px",
        minWidth: 900,
        display: "flex",
        flexDirection: "row",
    },
    app: {
        width: "70vw",
        height: "500px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    contact: {
        height: "100%",
        width: "500px",
        backgroundColor: "rgba(0, 0, 0, 0.95)",
        padding: "10px",
    },
    h1: {
        marginTop: "30px",
        marginLeft: "40px",
        marginBottom: 0,
        color: "white",
        fontfamily: "Proppins",
        fontWeight: 600,
        fontSize: 28,
    },
    mail: {
        marginTop: "30px",
        marginLeft: "40px",
        font: "1.3rem Inconsolata, monospace",
        cursor: "pointer",
        color: "aqua",
        textDecoration: "underline",
        marginBottom: 0,
    },
    git: {
        marginTop: 5,
        marginLeft: "40px",
        font: "1.3rem Inconsolata, monospace",
        cursor: "pointer",
        color: "white",
    },
    text: {
        color: "white",
        marginLeft: "42px",
        font: "1.3rem Inconsolata, monospace",
        marginTop: 5,
        marginBottom: 0,
    },
    png: {
        width: 400,
        height: 400,
        backgroundImage: `url(${cv})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        marginLeft: "40px",
        marginTop: 0,
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
            transform: "scale(1.15)",
        }
    }
}