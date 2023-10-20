import React  from 'react';
import {motion, useDragControls} from 'framer-motion'
function MainCard(props){
    console.log(props)
    const controls = useDragControls()
    return (
        <motion.section drag dragControls={controls} animate={{y:0}} initial={{y:-200}}
        className="flex mt-10 justify-between weather loading bg-black text-white md:px-10 xss:px-2 item-center py-10 rounded-3xl xss:w-[90%] md:w-[70%] lg:w-[45%] 
        shadow-lg hover:shadow-gray-900 hover:bg-orange-300 duration-500 hover:text-gray-900">
            <div className='flex flex-col'>
            <h2 className="city text-2xl font-bold">{props.name}, {props.country} </h2>
            <h1>{props.weekDay}</h1>
            
            <div className="flex flex-col">
                <img  src={`https://openweathermap.org/img/wn/${props.icon}.png`} alt="" className="first-letter:icon w-min h-min"/>
                <div className="description ">{props.description}</div>
            </div>
            
            </div>
            <div  className="flex flex-col float-right text-right">
            <h1 className="temp text-2xl font-bold">{props.temp} °F</h1>
            <div className="humidity">Humidity: {props.humidity} %</div>
            <div className="wind">Wind Speed: {props.speed} km/h</div>
            <h3 className="dayTemp">High: {props.temp_min} °F</h3>
            <h3 className="dayTemp2">Low: {props.temp_max} °F</h3>
            </div>
            
        </motion.section>
        )
}

export default MainCard;
