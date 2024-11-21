import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const LogIn = () => {
    const {signIn} = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row ">
                <div className=" w-1/2 mx-auto mr-12">
                 <img src={img} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    {/* form */}
                    <form onSubmit={handleLogin} className="card-body">
                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                            type="email" 
                            name='email'
                            placeholder="email" 
                            className="input input-bordered" 
                            required />
                        </div>
                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                            type="password" 
                            name='password'
                            placeholder="password" 
                            className="input input-bordered" 
                            required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {/* btn */}
                        <div className="form-control mt-6">
                            <input 
                            type="submit" 
                            value='submit'
                            placeholder="password" 
                            className="btn btn-primary" 
                            required />
                        </div>
                    </form>
                    <p>New to Car Doctors <Link to="/signup" 
                    className='text-orange-500 font-bold'>
                    Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;