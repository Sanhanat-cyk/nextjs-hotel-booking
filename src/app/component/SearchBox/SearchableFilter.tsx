'use client';
import React, { useState } from 'react';
import { Checkbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/16/solid';

function SearchableFilter() {
  const [budgetHotel, setBudgetHotel] = useState(false);
  const [breakfastIncluded, setBreakfastIncluded] = useState(false);
  const [freeAirport, setFreeAirport] = useState(false);
  const [hostelBackpacker, setHostelBackpacker] = useState(false);

  return (
    <div className="flex flex-col items-start  bg-white w-full px-10 py-3">
      <div className="flex flex-col items-start bg-white w-full">
        <h6 className="font-bold mb-3 mt-5">Popular filters</h6>
        <label className="flex items-center space-x-2">
          <Checkbox
            checked={budgetHotel}
            onChange={setBudgetHotel}
            className="group size-5 rounded-md bg-white p-1 ring-1 ring-gray-400 ring-inset data-[checked]:ring-blue-500"
          >
            <CheckIcon className="hidden size-3 fill-blue-500 group-data-[checked]:block" />
          </Checkbox>
          <span>Budget hotel</span>
        </label>
        <label className="flex items-center space-x-2">
          <Checkbox
            checked={breakfastIncluded}
            onChange={setBreakfastIncluded}
            className="group size-5 rounded-md bg-white p-1 ring-1 ring-gray-400 ring-inset data-[checked]:ring-blue-500"
          >
            <CheckIcon className="hidden size-3 fill-blue-500 group-data-[checked]:block" />
          </Checkbox>
          <span>Breakfast included</span>
        </label>
        <label className="flex items-center space-x-2">
          <Checkbox
            checked={freeAirport}
            onChange={setFreeAirport}
            className="group size-5 rounded-md bg-white p-1 ring-1 ring-gray-400 ring-inset data-[checked]:ring-blue-500"
          >
            <CheckIcon className="hidden size-3 fill-blue-500 group-data-[checked]:block" />
          </Checkbox>
          <span>Free airport shuttle</span>
        </label>
        <label className="flex items-center space-x-2">
          <Checkbox
            checked={hostelBackpacker}
            onChange={setHostelBackpacker}
            className="group size-5 rounded-md bg-white p-1 ring-1 ring-gray-400 ring-inset data-[checked]:ring-blue-500"
          >
            <CheckIcon className="hidden size-3 fill-blue-500 group-data-[checked]:block" />
          </Checkbox>
          <span>Hostel/Backpacker</span>
        </label>
      </div>

      <div className="flex flex-col items-start bg-white w-full">
        <h6 className="font-bold mb-3 mt-5">Price per night</h6>
        <label className="flex items-center space-x-2">
          <Checkbox
            checked={budgetHotel}
            onChange={setBudgetHotel}
            className="group size-5 rounded-md bg-white p-1 ring-1 ring-gray-400 ring-inset data-[checked]:ring-blue-500"
          >
            <CheckIcon className="hidden size-3 fill-blue-500 group-data-[checked]:block" />
          </Checkbox>
          <span>Less than $50</span>
        </label>
        <label className="flex items-center space-x-2">
          <Checkbox
            checked={breakfastIncluded}
            onChange={setBreakfastIncluded}
            className="group size-5 rounded-md bg-white p-1 ring-1 ring-gray-400 ring-inset data-[checked]:ring-blue-500"
          >
            <CheckIcon className="hidden size-3 fill-blue-500 group-data-[checked]:block" />
          </Checkbox>
          <span>&50 to $100</span>
        </label>
        <label className="flex items-center space-x-2">
          <Checkbox
            checked={freeAirport}
            onChange={setFreeAirport}
            className="group size-5 rounded-md bg-white p-1 ring-1 ring-gray-400 ring-inset data-[checked]:ring-blue-500"
          >
            <CheckIcon className="hidden size-3 fill-blue-500 group-data-[checked]:block" />
          </Checkbox>
          <span>$100 to $150</span>
        </label>
        <label className="flex items-center space-x-2">
          <Checkbox
            checked={hostelBackpacker}
            onChange={setHostelBackpacker}
            className="group size-5 rounded-md bg-white p-1 ring-1 ring-gray-400 ring-inset data-[checked]:ring-blue-500"
          >
            <CheckIcon className="hidden size-3 fill-blue-500 group-data-[checked]:block" />
          </Checkbox>
          <span>$150 and moer</span>
        </label>
      </div>


      <div className="flex flex-col items-start bg-white w-full">
        <h6 className="font-bold mb-3 mt-5">Guest rating</h6>
        <label className="flex items-center space-x-2">
          <Checkbox
            checked={budgetHotel}
            onChange={setBudgetHotel}
            className="group size-5 rounded-md bg-white p-1 ring-1 ring-gray-400 ring-inset data-[checked]:ring-blue-500"
          >
            <CheckIcon className="hidden size-3 fill-blue-500 group-data-[checked]:block" />
          </Checkbox>
          <span>Any</span>
        </label>
        <label className="flex items-center space-x-2">
          <Checkbox
            checked={breakfastIncluded}
            onChange={setBreakfastIncluded}
            className="group size-5 rounded-md bg-white p-1 ring-1 ring-gray-400 ring-inset data-[checked]:ring-blue-500"
          >
            <CheckIcon className="hidden size-3 fill-blue-500 group-data-[checked]:block" />
          </Checkbox>
          <span>Excellent</span>
        </label>
        <label className="flex items-center space-x-2">
          <Checkbox
            checked={freeAirport}
            onChange={setFreeAirport}
            className="group size-5 rounded-md bg-white p-1 ring-1 ring-gray-400 ring-inset data-[checked]:ring-blue-500"
          >
            <CheckIcon className="hidden size-3 fill-blue-500 group-data-[checked]:block" />
          </Checkbox>
          <span>Verry good</span>
        </label>
        <label className="flex items-center space-x-2">
          <Checkbox
            checked={hostelBackpacker}
            onChange={setHostelBackpacker}
            className="group size-5 rounded-md bg-white p-1 ring-1 ring-gray-400 ring-inset data-[checked]:ring-blue-500"
          >
            <CheckIcon className="hidden size-3 fill-blue-500 group-data-[checked]:block" />
          </Checkbox>
          <span>Good</span>
        </label>
      </div>
      <h6 className="font-bold mb-3 mt-5">Guest rating</h6>
      <div className="flex flex-row items-start bg-white w-full space-x-2">
        <button className='flex items-center align-middle border-gray-500 text-gray-500 border py-1 px-2 rounded-3xl text-xs '>
          <p className='mr-1'>1</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg>
        </button>
        <button className='flex items-center align-middle border-gray-500 text-gray-500 border py-1 px-2 rounded-3xl text-xs'>
          <p className='mr-1'>2</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg>
        </button>
        <button className='flex items-center align-middle border-gray-500 text-gray-500 border py-1 px-2 rounded-3xl text-xs'>
          <p className='mr-1'>3</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg>
        </button>
        <button className='flex items-center align-middle border-gray-500 text-gray-500 border py-1 px-2 rounded-3xl text-xs'>
          <p className='mr-1'>4</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg>
        </button>
        <button className='flex items-center align-middle border-gray-500 text-gray-500 border py-1 px-2 rounded-3xl text-xs'>
          <p className='mr-1'>5</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SearchableFilter;