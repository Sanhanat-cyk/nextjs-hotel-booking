import React from 'react';
import Link from 'next/link';

function banner() {
  return (
    <div className='w-full flex flex-col items-center px-10'>
      <div className='w-full bg-slate-500 h-60 border rounded-3xl flex flex-col justify-center items-center text-white relative'>
        <h1 className='text-3xl font-bold'>Book you stay whith Tripster</h1>
        <p>1,480,086 rooms arond the world are waiting for you!</p>
      </div>
      <div className='w-3/6 px-4 bg-white text-black py-2 border rounded-full shadow-sm flex flex-row justify-between items-center relative -mt-8'>
        {/* ใช้ -mt-8 หรือค่าลบอื่น ๆ เพื่อขยับ div ขึ้น */}
        <div className='flex flex-col px-2 '> {/* ลบ border-l อย่างชัดเจน */}
          <h3 className='font-semibold'>Location</h3>
          <p className='text-xs text-gray-500'>Where are you going?</p>
        </div>

        <div className='flex flex-col px-2 border-l border-gray-300'>
          <h3 className='font-semibold'>Check-in</h3>
          <p className='text-xs text-gray-500'>Add date</p>
        </div>

        <div className='flex flex-col px-2 border-l border-gray-300'>
          <h3 className='font-semibold'>Check-out</h3>
          <p className='text-xs text-gray-500'> Add date</p>
        </div>

        <div className='flex flex-col px-2 border-l border-gray-300'>
          <h3 className='font-semibold'>Guest</h3>
          <p className='text-xs text-gray-500'>Number of guest</p>
        </div>

        <button className='bg-blue-600 text-white border rounded-full py-2 px-2'>
          <Link href='/SearchResult'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-6'
            >
              <path
                fillRule='evenodd'
                d='M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z'
                clipRule='evenodd'
              />
            </svg>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default banner;