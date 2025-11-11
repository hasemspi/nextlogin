import Footersection from "../componets/footer/page";
import LoginPage from "../componets/login/page";
import Navber from "../componets/navber/page";


const LoginForm = () => {
    return (
        <div>
            <Navber />
            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">User Loign</h2>
                    <LoginPage />
                </div>
            </div>

            <Footersection />
        </div>
    );
};

export default LoginForm;