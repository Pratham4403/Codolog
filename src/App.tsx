import { Outlet } from "react-router-dom";
import "./index.css";
const About = ()=>{
    return(
        <div>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default About;