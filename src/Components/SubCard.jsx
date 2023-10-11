import React from 'react';

const SubCard = () => {
    
    return (
        <section class="card bg-black text-white px-10 text-center item-center py-10 w-[20%] rounded-2xl">
            <div class="weather">
                <img src="https://openweathermap.org/img/wn/04n.png" alt="" class="icon4"/>
                <div class="description4">--</div>
                <h1 class="temp4">--°</h1>
            </div>
        </section>
    );
}

export default SubCard;
