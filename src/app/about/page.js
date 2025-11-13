import Link from "next/link";
import Footersection from "../componets/footer/page";
import Navber from "../componets/navber/page";


const AboutUs = () => {
    return (
        <div className="container mx-auto">
            <Navber/>
            <button>
                <Link href="/logout">Logtout</Link>
            </button>
            <Footersection/>
        </div>
    );
};

export default AboutUs;