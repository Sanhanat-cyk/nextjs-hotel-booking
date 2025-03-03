import React from 'react';

function BannerPopular() {
    return (
        <div className='w-full px-10'>
            <div className='grid grid-cols-4 gap-4'>
                {/* ส่วนที่ 1 */}
                <div className='bg-slate-500 px-4 border rounded-3xl h-80 flex flex-col-reverse'>
                    <div className='bg-white bg-opacity-80 border rounded-3xl flex flex-col justify-center items-center px-2 py-1 mb-2'>
                        <p>Banner Popular</p>
                    </div>
                </div>

                {/* ส่วนที่ 2 (แบ่งบน-ล่าง) */}
                <div className='grid gap-0'> {/* ลบ grid-rows-2 */}
                    <div className='bg-slate-500 px-4 border rounded-3xl flex flex-col-reverse h-52'> {/* ลบ h-52 */}
                        <div className='bg-white bg-opacity-80 border rounded-3xl flex flex-col justify-center items-center px-2 py-1 mb-2'>
                            <p>ส่วนบน</p>
                        </div>
                    </div>
                    <div className='bg-slate-500 px-4 border rounded-3xl flex flex-col-reverse h-28'> {/* ลบ h-28 */}
                        <div className='bg-white bg-opacity-80 border rounded-3xl flex flex-col justify-center items-center px-2 py-1 mb-2'>
                            <p>ส่วนล่าง</p>
                        </div>
                    </div>
                </div>

                {/* ส่วนที่ 3 */}
                <div className='bg-slate-500 px-4 border rounded-3xl h-80 flex flex-col-reverse'>
                    <div className='bg-white bg-opacity-80 border rounded-3xl flex flex-col justify-center items-center px-2 py-1 mb-2'>
                        <p>Banner Popular</p>
                    </div>
                </div>

                {/* ส่วนที่ 4 */}
                <div className='bg-slate-500 px-4 border rounded-3xl h-80 flex flex-col-reverse'>
                    <div className='bg-white bg-opacity-80 border rounded-3xl flex flex-col justify-center items-center px-2 py-1 mb-2'>
                        <p>Banner Popular</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerPopular;