import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className=' md:flex flex-col md:justify-center md:items-center text-center w-auto mt-4'>
            <h2 className='mb-4 text-3xl' >Please Login!</h2>
            <div className="w-full   lg:max-w-xs">
                <form className="bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>

                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='name' id="name" type="text" placeholder="Your Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
                            Photo Url
                        </label>

                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='photo' id="photo" type="text" placeholder="Photo Url" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>

                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='email' id="email" type="email" placeholder="Email" />
                    </div>


                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input name='password' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    </div>
                    <div className=''>

                        <p className=" text-sm italic">
                            Already Have An Account?
                            <Link to={'/login'}>Login</Link>
                        </p>

                        <p className=" text-red-600 text-sm italic">

                        </p>
                        <p className=" text-sm italic">

                        </p>

                    </div>
                    <div className="flex  mt-2 items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Login
                        </button>
                        <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
                            Forgot Password?
                        </Link>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;Chef & Recipe. All rights reserved.
                </p>
            </div>

        </div>
    );
};

export default Register;