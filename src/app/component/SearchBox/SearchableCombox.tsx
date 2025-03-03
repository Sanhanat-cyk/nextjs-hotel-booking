import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import { useState, useRef, useEffect } from 'react';

interface Person {
    id: number;
    name: string;
}

const people: Person[] = [
    { id: 1, name: 'Durward Reynolds' },
    { id: 2, name: 'Kenton Towne' },
    { id: 3, name: 'Therese Wunsch' },
    { id: 4, name: 'Benedict Kessler' },
    { id: 5, name: 'Katelyn Rohan' },
];
interface Option {
    value: string;
    label: string;
  }
  
interface SearchableDropdownMenuProps {
    options: Option[];
  }

function SearchableCombox({ options }: SearchableDropdownMenuProps) {
    const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
    const [query, setQuery] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) =>
                person.name.toLowerCase().includes(query.toLowerCase())
            );

    useEffect(() => {
        if (inputRef.current) {
            const input = inputRef.current;
            const handleFocus = () => {
                input.select();
            };
            input.addEventListener('focus', handleFocus);
            return () => {
                input.removeEventListener('focus', handleFocus);
            };
        }
    }, []);

    return (
        <Combobox
            value={selectedPerson}
            onChange={(value) => setSelectedPerson(value || null)}
            onClose={() => setQuery('')}
        >
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4 fill-gray-400"
                    >
                        <path
                            fillRule="evenodd"
                            d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <ComboboxInput
                    ref={inputRef}
                    className={`inline-flex w-full justify-start gap-x-1.5 rounded-3xl bg-white pl-10 pr-3 py-2 text-sm font-semibold text-gray-600 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 ${!selectedPerson && !query ? 'text-gray-400 ' : ''}`}
                    aria-label="Assignee"
                    displayValue={(person: Person | null) =>
                        person ? person.name : query || 'Destination'
                    }
                    onChange={(event) => {
                        setSelectedPerson(null);
                        setQuery(event.target.value);
                    }}
                />
            </div>

            <ComboboxOptions
                anchor="bottom"
                className="border empty:invisible absolute z-10 mt-1 w-min rounded-md bg-white shadow-lg max-h-60 overflow-auto"
            >
                {filteredPeople.slice(0, 2).map((person) => (
                    <ComboboxOption
                        key={person.id}
                        value={person}
                        className={({ active, selected }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-blue-100 text-gray-900' : 'text-gray-900'
                            } ${selected ? 'font-medium' : 'font-normal'}`
                        }
                    >
                        {({ selected }) => (
                            <>
                                <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                                    {person.name}
                                </span>
                                {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.964 3.965 7.437-9.894a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                ) : null}
                            </>
                        )}
                    </ComboboxOption>
                ))}
            </ComboboxOptions>
        </Combobox>
    );
}

export default SearchableCombox;