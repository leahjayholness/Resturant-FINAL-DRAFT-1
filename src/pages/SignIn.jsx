import { Link } from "react-router-dom";
import logo from '../images/logo.png';

const SignIn = () => {
    return (
        <div className="p-5">
            <div className="card mx-auto" style={{width: "400px"}}>
                <div className="card-body">
                    <div className="mb-4 text-center">
                        <img src={logo} alt="Logo" width="100" height="100" className="bi"/>
                        <h5 className="card-title">Resturant Name</h5>
                    </div>
                    <form className="row g-3">
                        <div className="form-floating col-12">
                            <input type="email" className="form-control" id="Email" placeholder='name@example.com'/>
                            <label htmlFor="Email">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                </svg>
                                Email address
                            </label>
                        </div>
                        <div className="form-floating col-12">
                            <input type="password" className="form-control" id="Password" placeholder="Password"/>
                            <label htmlFor="Password">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
                                </svg>
                                Password
                            </label>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="Remember"/>
                                <label className="form-check-label" htmlFor="Remember">Remember Me</label>
                            </div>
                            <div className="mb-3">
                                <Link to="#">Forgot password</Link>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 my-2">Sign In</button>
                        <button type="submit" className="btn btn-secondary w-100 my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                            </svg>
                            Sign In with Google
                        </button>
                        <div className="mb-3 text-center">
                            Dont have an Account?<Link to="/signup" className="ms-1">Sign Up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;