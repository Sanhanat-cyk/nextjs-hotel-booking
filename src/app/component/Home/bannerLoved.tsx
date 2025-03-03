import React from 'react';

function bannerLoved() {
  return (
    <div className='w-full px-10'>
      <div className='grid grid-cols-4 gap-4'>
        {/* ส่วนที่ 1 */}
        <div className='bg-white shadow-md px-1 py-1 border rounded-3xl h-80 flex flex-col'>
          <div className='bg-slate-500 h-52 border rounded-3xl w-full'>
          </div>
            <p>Hotelname</p>
            <p>Location</p>
            <p>Rate</p>  
        </div>
        <div className='bg-white shadow-md px-1 py-1 border rounded-3xl h-80 flex flex-col'>
          <div className='bg-slate-500 h-52 border rounded-3xl w-full'>
          </div>
            <p>Hotelname</p>
            <p>Location</p>
            <p>Rate</p>  
        </div>
        <div className='bg-white shadow-md px-1 py-1 border rounded-3xl h-80 flex flex-col'>
          <div className='bg-slate-500 h-52 border rounded-3xl w-full'>
          </div>
            <p>Hotelname</p>
            <p>Location</p>
            <p>Rate</p>  
        </div>
        <div className='bg-white shadow-md px-1 py-1 border rounded-3xl h-80 flex flex-col'>
          <div className='bg-slate-500 h-52 border rounded-3xl w-full'>
          </div>
            <p>Hotelname</p>
            <p>Location</p>
            <p>Rate</p>  
        </div>

      </div>
    </div>
  );
}

export default bannerLoved;