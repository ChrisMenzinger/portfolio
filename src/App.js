import './App.css';
import {Navbar} from "./components/Navbar";
import {Header} from "./components/Header";
import {Expertise} from "./components/Expertise";
import {Contact} from "./components/Contact";
import {Experience} from "./components/Experience";

function App() {
    let windowWidth = window.innerWidth;
    let style = windowWidth < 460 ? "Mobile" : "App"
    return (
        <div className={style}>
            <Navbar/>
            <Header/>
            <Expertise/>
            <Experience/>
            <Contact width={windowWidth}/>
        </div>
    );
}

export default App;
