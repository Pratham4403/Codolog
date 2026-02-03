import Profile_icon from "../assets/profile_icon.jpg";
import quotes from "../assets/quotes.png";
const Reviews = ()=>{
    return(
        <div className="border rounded-lg w-full p-4">
            <img src={quotes} alt="Quotes_icon" style={{width:"13%",opacity:"0.3"}}/>
            <div className="flex justify-center items-center w-full">
                <div>
                    <img src={Profile_icon} alt="Reviewer" className="rounded" style={{opacity:"0.7"}}/>
                </div>
                <div>
                    <p className="italic">Thank you,Classbot,for providing an affordable application will excellent student Data management and fee management features perfect for our coaching institute!</p>
                    <div className="flex flex-col items-end">
                        <p className="italic font-bold text-md">Mohit Gupta</p>
                        <h4 className="text-slate-400 text-sm font-bold">Data Analyst</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;