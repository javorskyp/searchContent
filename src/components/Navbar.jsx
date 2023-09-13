import React from 'react'

const Navbar = () => {
    return (
         <div className='navbar flex flex-direction:row justify-between items-center p-[3rem]'>
             <div className='logoDiv'>
                <h1 className='logo text-[45px] text-blueColor'>
                    <strong>Job</strong>Search
                </h1>
             </div>
             <div className='menu m-2 flex gap-4'>
                <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Jobs</li>
                <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Companies</li>
                <li className='menuList text-[#6f6f6f] hover:text-blueColor'>About</li>
                <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Contact</li>
                <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Blog</li>
                <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Login</li>
                <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Register</li>
             </div>
        </div>
    );
}
 
export default Navbar;