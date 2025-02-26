
import React, { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface Option {
  value: string;
  label: string;
}

interface SearchableDropdownMenuProps {
  options: Option[];
}

function SearchableDropdownMenu({ options }: SearchableDropdownMenuProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='w-full px-1 '>
    <Menu as="div" className="relative inline-block text-left w-full">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-3xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24" fill="currentColor" className="size-4 fill-gray-400">
            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
          </svg>
          <p className='text-gray-600'>Destination</p>
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-none data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
        <div className="py-1">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 text-sm text-gray-700 border-b border-gray-200 focus:outline-none"
          />
          {filteredOptions.map((option) => (
            <MenuItem key={option.value}>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
              >
                {option.label}
              </a>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
    </div>
  );
}

export default SearchableDropdownMenu;