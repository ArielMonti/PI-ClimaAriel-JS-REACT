import React from "react";
// import { useParams } from "react-router-dom";

export default function City({city}) {
    return (
        <div className="ciudad">
            {/* <h3>{ciudadId}</h3>
            <h2>{city}</h2> */}
                <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}

   // console.log(city);
    // return <h1>{id}</h1>


// import React from 'react';
// import { useParams } from 'react-router-dom';

// export default function Ciudad({ city }) {
//   const { name, temp, weather, wind, clouds, longitud, latitud } = city;
//   var { ciudadId } = useParams();
//   console.log(ciudadId);

//   return (
//     <div className="ciudad">
//       <h3>{ciudadId}</h3>

//       <div className="container">
//         <h2>{name}</h2>
//         <div className="info">
//           <div>Temperatura: {temp} ºC</div>
//           <div>Clima: {weather}</div>
//           <div>Viento: {wind} km/h</div>
//           <div>Cantidad de nubes: {clouds}</div>
//           <div>Latitud: {latitud}º</div>
//           <div>Longitud: {longitud}º</div>
//         </div>
//       </div>
//     </div>
//   );
// }