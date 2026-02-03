import Reviews from "../components/Reviews";

const About = ()=>{
    return(
        <>
            <h1 className="mt-20 ml-40 font-bold">Why People</h1>
            <h1 className="ml-40 font-bold">Choose Us</h1>
            <div className="flex justify-evenly">
                <div className="w-1/3 mt-16">
                    <Reviews/>
                </div>
                <div className="w-1/3 mt-16">
                    <Reviews/>
                </div>
            </div>
        </>
    )
}

export default About;