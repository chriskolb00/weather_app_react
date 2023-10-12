import React, {useEffect} from 'react';

function MainCard(props){

    return (
        <div className="weather loading bg-black text-white px-10 text-center item-center py-10 w-[30%] rounded-2xl">
                    <h2 className="city">{props.name} Weather</h2>
                    <h1 className="temp">{props.temp}</h1>
                    <h3 className="dayTemp">High: {props.temp_min}</h3>
                    <h3 className="dayTemp2">Low: {props.temp_max}</h3>
                    <div className="flex">
                        <img src={`https://openweathermap.org/img/wn/${props.icon}.png`} alt="" className="icon ml-[40%]"/>
                        <div className="description">--</div>
                    </div>
                    <div className="humidity">Humidity: {props.humidity} %</div>
                    <div className="wind">Wind Speed: {props.speed} km/h</div>
        </div>
        )
}

export default MainCard;
