import React from 'react'
import { useState } from 'react'

export function Input({onSearch}) {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query); // Call the search function with the query
        }
    };
    return (
        <div className='flex items-center '>
            <input
                className=' w-80 px-2 py-2 h-11 border rounded-md rounded-r-none shadow-gray-200 mx-auto'
                type="text"
                placeholder='Search...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                className='w-15 px-2 py-2 h-11 bg-blue-900 rounded-md rounded-l-none'
                onClick={handleSearch}
            >

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokewidth="1.5" stroke="white" className="size-6 text-center">
                    <path strokelinecap="round" strokelinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
        </div>
    )
}
