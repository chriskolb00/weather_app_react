import React from 'react';

const SubCard = (props) => {
    return (
        <section className="card bg-black text-white px-10 text-center item-center py-10 w-[20%] rounded-2xl">
            <div className="weather">
                <img src="https://openweathermap.org/img/wn/04n.png" alt="" className="icon4  ml-[40%]"/>
                <div className="description4">{props.description}</div>
                <h1 className="temp4">{props.temp}°</h1>
            </div>
        </section>
    );
}

export default SubCard;
