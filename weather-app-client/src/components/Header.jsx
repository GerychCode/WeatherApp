import React, {useEffect, useState} from 'react';
import "../style/header.sass";
import moment from "moment";

function Header() {
    const currentDate = moment();
    const dayOfWeek = currentDate.format('dddd');
    const month = currentDate.format('MMMM');
    const day = currentDate.format('D');
    const getOrdinalSuffix = (day) => {
        const suffixes = ['th', 'st', 'nd', 'rd'];
        return suffixes[day % 100 > 10 && day % 100 < 20 ? 1 : day % 10];
    }

    const [time, setTime] = useState(moment().format('HH:mm:ss'));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment().format('HH:mm:ss'));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header>
            <div className="header_container">
                <form className='search'>
                    <img src={process.env.PUBLIC_URL +  "/img/map-pin.svg"} alt='Search icon'/>
                    <input placeholder='Name of the site' type='search' id="city-search" name="city" alt='Enter the name of the site you are looking for' autoComplete="off"/>
                    <button>
                        <img src={process.env.PUBLIC_URL +  "/img/search-icon.svg"} alt='Search icon'/>
                    </button>
                </form>
                <div className='date'>
                    <time className='day'>{`${dayOfWeek}, ${day}${getOrdinalSuffix(day)} ${month}`}</time>
                    <time className='time'>{time}</time>
                </div>
            </div>
        </header>
    );
}

export default Header;