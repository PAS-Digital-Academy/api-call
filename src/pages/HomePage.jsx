import React, { useEffect, useState } from 'react'
import CountryCard from '../components/CountryCard'

const HomePage = () => {

    const apiUrl = 'https://restcountries.com/v3.1/all';

    const [country, setCountry] = useState([]);




    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setCountry(res))
    }, [])


    return (
        <div className="page-content">
            {
                country.map((value, index) => <CountryCard
                    name={value.name.official}
                    flag={value.flags.png}
                    capital={value?.capital?.[0]}
                    googleMaps={value.maps.googleMaps}
                    timeZone={value.timezones}
                    openStreetMaps={value.maps.openStreetMaps}
                />)
            }
        </div>
    )
}

export default HomePage