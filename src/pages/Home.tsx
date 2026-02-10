import { Link } from "react-router-dom";

const Home = ()=>{
    return(
        <>
            <h1 className="text-center mt-60"> This is a Home page.</h1>
            <div className="flex justify-center items-center mt-16">
                <Link to={"/"} className="p-4 text-primary hover:underline">Home</Link>
                <Link to={"/about"} className="p-4 text-primary hover:underline">About</Link>
                <Link to={"/login"} className="p-4 text-primary hover:underline">Login</Link>
                <Link to={"/signup"} className="p-4 text-primary hover:underline">Signup</Link>
            </div>
        </>
    )
}

export default Home;