import React from 'react';
import {motion, useDragControls} from 'framer-motion'
const SubCard = (props) => {
    const controls = useDragControls();
    return (
        <motion.section drag dragControls={controls} animate={{x:0}} initial={{x:-100}}
        className="mt-10 card bg-black text-white px-10 xss:max-xs:px-2 text-center item-center md:py-10 rounded-3xl xss:w-[80%] md:w-[60%] lg:w-[30%] 
        shadow-md hover:shadow-gray-700 hover:bg-orange-200 duration-500 hover:text-gray-900">
            <div className="weather font-semibold">
                <h1>{props.weekDay}</h1>
                <img src={`https://openweathermap.org/img/wn/${props.icon}.png`} alt={props.description} className="icon4  ml-[42.5%] w-min h-min"/>
                <div className="description4">{props.description}</div>
                <h1 className="temp4">{props.temp} °F</h1>
            </div>
        </motion.section>
    );
}

export default SubCard;
