import Footersection from "../componets/footer/page";
import LoginPage from "../componets/login/page";
import Navber from "../componets/navber/page";


const LoginForm = () => {
    return (
        <div>
            <Navber />
            <div className="flex items-center justify-center min-h-screen bg-base-200">
                <div className="card bg-base-100 w-96 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">User Login</h2>
                        <LoginPage />
                    </div>
                </div>
            </div>


            <Footersection />
        </div>
    );
};

export default LoginForm;