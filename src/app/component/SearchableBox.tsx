'use client';
import React from 'react'

import DestinationDropdown from './SearchableDropdownMenu'

function SearchableBox() {

    const options = [
        { value: 'account-settings', label: 'Account settings' },
        { value: 'support', label: 'Support' },
        { value: 'license', label: 'License' },
        { value: 'sign-out', label: 'Sign out' },
        { value: 'profile', label: 'Profile' },
        { value: 'settings', label: 'Settings' },
    ];

    return (

        <div className='flex flex-col items-start px-10 py-3'>
            
            <button className='mt-5'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 stroke-6">
                    <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>
            </button>
            <h6 className='font-bold my-3'>Your Search</h6>
            <p className='my-1'>Destinetion</p>
             <DestinationDropdown options={options} /> 
            <p className='my-1'>Check-in date</p>
            <DestinationDropdown options={options} /> 
            <p className='my-1'>Check-out date</p>
            <DestinationDropdown options={options} /> 
            <p className='my-1'>Guests</p>
            <DestinationDropdown options={options} /> 
            <button className='bg-blue-600 text-white w-full border rounded-3xl py-1 my-3'>Search</button>
           
      
           
        </div>

    )

}



export default SearchableBox