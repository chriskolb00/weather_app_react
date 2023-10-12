import React, { useState } from 'react';
import {FaSearch} from 'react-icons/fa'
import MainCard from './MainCard';
import SubCard from './SubCard';


function Header(){
    const apiKey = "0515874ab047b33baf2d52f13472e5c5";
    const [searchTerm, setSearchTerm] = useState("Omaha");
    const [complete, setComplete] = useState(false);
    const [datas, setDatas] = useState({
            name: "", 
            icon:"", 
            description:"", 
            temp: "", 
            temp_min:"",
            temp_max: "", 
            humidity: "", 
            speed:""
    })
        function fetchWeather(term, apiKey) {
            const fetchURL = `https://api.openweathermap.org/data/2.5/forecast?q=${term}&units=imperial&appid=${apiKey}`;

            fetch(fetchURL)
            .then((response) => response.json())
            .then((data) => {
                displayWeather(data);
            });
        }
       function displayWeather(data){
        const {name} =data.city;
        const {icon, description}=data.list[0].weather[0];
        const {temp, temp_min, temp_max, humidity}=data.list[0].main;
        const {speed} = data.list[0].wind;
        
        setDatas({
            name: name, 
            icon:icon, 
            description:description, 
            temp: temp, 
            temp_min:temp_min,
            temp_max: temp_max, 
            humidity: humidity, 
            speed:speed
        })
        }
    const search=()=>{
        fetchWeather(searchTerm, apiKey)
        setComplete(true)
    }
    const handleEnterKeyPress=(e)=>{
        if(e.key === 'Enter'){
            search()
        }
    }
    return (
        <div>
            <div className='search text-center mb-5 px-10 py-10 text-white justify-center bg-blue-600'>
                <h1 className='text-3xl'>The Weather App</h1>
                <h5>Search a location for the weather</h5>
                <div>
                    <input className="search-bar bg-gray-500 rounded-md px-5 py-1 mr-2" type="text" placeholder='Search'
                    value={searchTerm} onChange={e=> setSearchTerm(e.target.value)} onKeyPress={handleEnterKeyPress}/>
                    <button onClick={search} className='px-5 py-2 w-[100px] bg-gray-600 rounded-md'> <FaSearch /> </button>
                
                </div>
            </div>
              
                {complete?
                <div> 
                    <div className="flex md:flex-row my-10 mx-10 justify-around">
                        <MainCard {...datas}/>
                        <SubCard {...datas}/>
                        <SubCard {...datas}/>
                    </div>
                    <div className="flex md:flex-row my-10  mx-10 justify-around">
                        <SubCard {...datas}/>
                        <SubCard {...datas}/>
                        <SubCard {...datas}/>
                        <SubCard {...datas}/>
                    </div>
                    
                    
                </div>
                    :
                    ""
                }
           
            
        </div>
        
        
    );
}

export default Header;
