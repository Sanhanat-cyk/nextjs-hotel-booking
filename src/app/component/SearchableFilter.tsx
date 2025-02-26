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
    </div>
  );
}

export default SearchableFilter;