import React, { useState, useEffect } from 'react';
import {FaSearch} from 'react-icons/fa'
import MainCard from './MainCard';
import SubCard from './SubCard';
import '../App.css'


function Header(){
    const apiKey = "0515874ab047b33baf2d52f13472e5c5";
    const [searchTerm, setSearchTerm] = useState('Omaha');
    const [complete, setComplete] = useState(false);

    const [datas, setDatas] = useState({
            name: "", 
            country: "",
            icon:"", 
            description:"", 
            temp: "", 
            temp_min:"",
            temp_max: "", 
            humidity: "", 
            speed:"",
            src:""
    })
    const [data2,setData2] = useState({
        icon:"",
        description:"",
        temp:""
    })
    const [data3,setData3] = useState({
        icon:"",
        description:"",
        temp:""
    })
    function fetchWeather(term, apiKey) {
        const fetchURL = `https://api.openweathermap.org/data/2.5/forecast?q=${term}&units=imperial&appid=${apiKey}`; 
        fetch(fetchURL)
        .then((response) =>response.json())
        .then((data) => { 
            console.log(data)
            displayWeather(data) 
        })
    }   
    function displayWeather(data){ 
        const {name} =data.city;
        const {country} = data.city;
        const {icon, description}=data.list[0].weather[0];
        const {temp, temp_min, temp_max, humidity}=data.list[0].main;
        const {speed} = data.list[0].wind;
        
        const icon2 = data.list[1].weather[0].icon;
        const description2 = data.list[1].weather[0].description;
        const temp2 = data.list[1].main.temp;
        const icon3 = data.list[2].weather[0].icon;
        const description3 = data.list[2].weather[0].description;
        const temp3 = data.list[2].main.temp;

        setDatas({
            name: name, 
            country: country,
            icon:icon, 
            description:description, 
            temp: temp, 
            temp_min:temp_min,
            temp_max: temp_max, 
            humidity: humidity, 
            speed:speed,
            src:`https://source.unsplash.com/1920x1080/?${name}`,
        })
        setData2({
            icon:icon2, 
            description:description2, 
            temp:temp2
        })
        setData3({
            icon:icon3, 
            description:description3, 
            temp:temp3
        })
    }
    const search=()=>{
        console.log(searchTerm)
        fetchWeather(searchTerm, apiKey)
        setComplete(true) 
    }
    const handleEnterKeyPress=(e)=>{
        if(e.key === 'Enter'){
            search()
        }
    }
    const myStyle = {
        backgroundImage: `url(${datas.src})`,
        height: '100vh',
        width: '100vw'
    }
    function dayOfWeek(day){
        day = day % 7;
        switch(day){
            case 0: return "Sunday";break;
            case 1: return "Monday";break;
            case 2: return "Tuesday";break;
            case 3: return "Wednesday";break;
            case 4: return "Thursday";break;
            case 5: return "Friday";break;
            case 6: return "Saturday";break;
            default: return "Sunday";break;
        }
    }
    let wkplus1, wkplus2, wk;
    if(setComplete){
        const date = new Date()
        let day =date.getDay()
        wk = dayOfWeek(day)
        wkplus1 = dayOfWeek(day+1)
        wkplus2 = dayOfWeek(day+2)
        console.log(wk, wkplus1, wkplus2)
    }

    useEffect(()=>{
        search()
    },[])

    return (
        <div>
            <div className='search text-center px-10 py-10 text-white justify-center bg-gray-900'>
                
                <h1 className='text-3xl'>The Weather App</h1>
                <h5 className='text-xl mb-5'>Search a location for the weather</h5>
                <p>You can drag the weather container to see the background a little bit better,<br/> please try not to drag it off the screen. Otherwise refresh fixes this.</p>
                <div>
                    <input className="search-bar bg-gray-500 rounded-md px-5 py-1 mr-2 hover:bg-white hover:text-black" type="text" placeholder='Search'
                    value={searchTerm} onChange={e=> setSearchTerm(e.target.value)} onKeyPress={handleEnterKeyPress}/>
                    <button onClick={search} className='mt-2 px-5 py-2 w-[100px] bg-gray-600 rounded-md hover:bg-orange-300'> <FaSearch /> </button>
                
                </div>
            </div> 
                {complete?
                <section style={myStyle} className=''>
                    <div className="flex  flex-col md:mb-10 md:mx-10 justify-around items-center">
                        <MainCard {...datas} weekDay = {wk} />
                        <SubCard {...data2} weekDay = {wkplus1}/>
                        <SubCard {...data3} weekDay = {wkplus2}/>
                    </div>
                </section>
                    :
                    ""
                } 
        </div> 
    )
};
export default Header;
