import React, { useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import axios from "axios";

export default function Reviews() {
    const storedToken = localStorage.getItem('authToken')
    const [ bikes, setBikes] = useState(null);
    const [ filteredBikes, setFilteredBikes ] = useState(null);
    
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/bike', { headers: { Authorization: `Bearer ${storedToken}` } })
                setBikes(response.data.data);
                setFilteredBikes(response.data.data);
            } catch (error) {
                console.log(error)
            }
        }
    getData();
}, )

const handlePrice = () => {
    const orderPrice = [...bikes].sort((a, b) => a.price - b.price);
    setFilteredBikes(orderPrice);
  }


//   Falta logica filtrat productos
const handleTerrain = () => {
    const filterTerrain = [...bikes].filter((bike => bike.terrain = ''));
    setFilteredBikes(filterTerrain);
}


return (
    <div>
        <select onClick={handleTerrain}>
            <option value="">Terrain</option>
            <option value="light">Light</option>
            <option value="intense">Intense</option>
            <option value="all road">All Road</option>
          </select>
          <select onClick={handleTerrain}>
            <option value="">Biketype</option>
            <option value="normal">Normal</option>
            <option value="electric">Electric</option>
          </select>
          <select onClick={handleTerrain}>
            <option value="">Material</option>
            <option value="carbon">Carbon</option>
            <option value="aluminum">Aluminum</option>
          </select>
        <button onClick={handlePrice}>Sort by price</button>
    <div>
        {!filteredBikes && <p>loading</p>}
        {filteredBikes && filteredBikes.map(bike => {
            return (<p key={bikes._id}><Link to={`/bikes/${bike._id}`}>{bike.name}</Link></p>)
        })}
        <Outlet/>
    </div>
    </div>
)

}