import { Link } from "react-router-dom";
import logo from '../images/logo.png';

const SignUp = () => {
    return (
        <div className="p-5">
            <div className="card mx-auto" style={{width: "400px"}}>
                <div className="card-body">
                    <div className="mb-4 text-center">
                        <img src={logo} alt="Logo" width="100" height="100" className="bi"/>
                        <h5 className="card-title">Resturant Name</h5>
                    </div>
                    <form className="row g-3">
                        <div className="form-floating col-md-6">
                            <input type="text" className="form-control" id="first-name" placeholder="First Name"/>
                            <label htmlFor="first-name" className="ms-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                                </svg>
                                First Name
                            </label>
                        </div>
                        <div className="form-floating col-md-6">
                            <input type="text" className="form-control" id="last-name" placeholder="Last Name"/>
                            <label htmlFor="last-name" className="ms-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                </svg>
                                Last Name
                            </label>
                        </div> 
                        <div className="form-floating col-12">
                            <input type="email" className="form-control" id="Email" placeholder='name@example.com'/>
                            <label htmlFor="Email" className="ms-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                </svg>
                                Email address
                            </label>
                        </div>
                        <div className="form-floating col-12">
                            <input type="password" className="form-control" id="Password" placeholder="Password"/>
                            <label htmlFor="Password" className="ms-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
                                </svg>
                                Password
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 my-2">Create Account</button>
                        <div className="mb-3 text-center">
                            Already have an Account?<Link to="signin.html" className="ms-1">Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;