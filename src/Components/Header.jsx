import React, { Component, useState } from 'react';
import {FaSearch} from 'react-icons/fa'
function Header(){
    const apiKey = useState("0515874ab047b33baf2d52f13472e5c5")
    const [city, setCity] = useState("Omaha")
    const [searchTerm, setSearchTerm] = useState("Omaha")

    const handleSearchInputChange = (e) => {
        setSearchTerm(e);
    };
    const search=()=>{
        console.log(searchTerm)
    }

    return (
        <div className='search text-center mb-5 px-10 py-10 text-white justify-center bg-blue-600'>
            <h1 className='text-3xl'>The Weather App</h1>
            <h5>Search a location for the weather</h5>
            <div>
                <input className="search-bar bg-gray-500 rounded-md px-5 py-1 mr-2" type="text" placeholder='Search'
                value={searchTerm} onChange={handleSearchInputChange} />
                <button onClick={search} className='px-5 py-2 w-[100px] bg-gray-600 rounded-md'> <FaSearch /> </button>
                
            </div>
        </div>
    );
}

export default Header;
