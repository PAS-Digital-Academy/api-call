import React from 'react'

const CountryCard = ({ name, flag, capital, googleMaps, timeZone, openStreetMaps }) => {
    return (
        <div className='card'>
            <img src={flag} width={300} height={130} alt={`${name}_flag`} />
            <div className="card-content">
                <h2>{name}</h2>
                <h3>{capital}</h3>
                <a href={googleMaps} target='_blank'>view google map</a> <br />
                <a href={openStreetMaps} target='_blank'>view open street map</a>
                <p style={{
                    width: "100%",
                    wordWrap: "break-word"
                }}>{timeZone?.join(", ")}</p>
            </div>

        </div >
    )
}

export default CountryCard