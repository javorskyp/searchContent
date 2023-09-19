import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
const Jobs = () => {
    return (
    <div>
        <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
            <div className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                <span className='flex justify-between items-center gap-4'>
                    <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Web Developer</h1>
                <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive/>Now
                </span>
                </span>
                <h6 className='text-[#ccc]'>Canada</h6>
                <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusamus recusandae dolorem labore!</p>
                <div className='company flex items-center gap-2'>
                   
                </div>
            </div>
        </div>
    </div> );
}
 
export default Jobs;