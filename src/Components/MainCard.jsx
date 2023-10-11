import React from 'react';

function MainCard(){
    return (
        <div className="weather loading bg-black text-white px-10 text-center item-center py-10 w-[30%] rounded-2xl">
                    <h2 className="city">Weather Loading...</h2>
                    <h1 className="temp">--°</h1>
                    <h3 className="dayTemp">--° to --°</h3>
                    <div className="flex">
                        <img src="https://openweathermap.org/img/wn/04n.png" alt="" class="icon"/>
                        <div class="description">--</div>
                    </div>
                    <div className="humidity">Humidity: -- %</div>
                    <div className="wind">Wind Speed: -- km/h</div>
        </div>
        )
}

export default MainCard;
