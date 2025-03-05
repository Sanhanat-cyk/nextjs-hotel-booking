import React from 'react'
import Link from 'next/link'
function page() {
    return (
        <main className='w-full'>
            <div className='px-10 flex flex-col'>
                <button className='mt-5'>
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 stroke-6">
                            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </button>
                <div>
                    img
                </div>

                <div className='flex flex-row justify-between items-center'>
                    <div>
                        <h1>Hotel Name</h1>
                        <p>details</p>
                    </div>
/api/v1/routes
                    <div className="flex items-center justify-end mb-2">
                        <div className="flex flex-col mx-1">
                            <h4 className="text-green-500 font-bold text-sm">rate</h4>
                            <p className="text-xs text-gray-600">reviews</p>
                        </div>
                        <div className="bg-green-200 font-bold text-xl text-green-500 border py-2 px-4 rounded-3xl">
                            <p>8.8</p>
                        </div>
                    </div>

                </div>
<div>
    card
</div>
<div>
    Review
</div>

            </div>
        </main>
    )
}

export default page