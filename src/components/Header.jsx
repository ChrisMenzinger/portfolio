import "./Components.css"

export function Header() {
    return (
        <div className="header">
            <div className="header-sub">
                <h1>CHRIS M</h1>
                <h2>SOFTWARE ENGINEER - FULLSTACK DEVELOPER</h2>
            </div>
            <div className="quote">
                <h1>PROGRAMMER</h1>
                <h2>noun.[pro-gram-er]</h2>
                <p>Someone who solves a problem you didn't know you had, in a way that you don't understand.</p>
                <h3 onClick={() => window.open("https://en.wikipedia.org/wiki/Magician_(fantasy)")}> See also </h3>
            </div>
        </div>
    )
}