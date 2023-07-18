import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg';
import toast from 'react-hot-toast';

const Navbar = (props) => {
    let isLogedIn = props.isLogedIn;
    let setIsLogedIn = props.setIsLogedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="/">
            <img src={Logo} alt='Logo' width={160} height={32} loading='lazy'></img>
        </Link>
        <nav>
            <ul className='text-richblack-100 flex gap-x-6'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contect</Link>
                </li>
            </ul>
        </nav>
        <div className='flex items-center gap-x-4'>
            {!isLogedIn&&
                <Link to="/Login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Login</button>
                </Link>
            }
            {!isLogedIn&&
                <Link to="/Signup">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Signup</button>
                </Link>
            }
            {isLogedIn&&
                <Link to="/">
                    <button onClick={()=>{
                        setIsLogedIn(false);
                        toast.success("Loged out");
                    }}
                    className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Logout</button>
                </Link>
            }
            {isLogedIn&&
                <Link to="/Dashboard">
                    <button                      className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Dashboard</button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar