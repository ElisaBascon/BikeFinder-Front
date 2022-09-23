import React, { useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import axios from "axios";

export default function Reviews() {
    const storedToken = localStorage.getItem('authToken')
    const [ bikes, setBikes] = useState(null);
    const [ filteredBikes, setFilteredBikes ] = useState(null);
    const filters = [
        {terrain: ""},
       {material: ""},
        {bikeType: ""}
    ]
    
useEffect(() => {
    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/v1/bike', { headers: { Authorization: `Bearer ${storedToken}` } })
            // substituir todas las rutas localhost
            // `${process.env.REACT_APP_API_URL}/bike`
            setBikes(response.data.data);
            setFilteredBikes(response.data.data);
        } catch (error) {
            console.log(error)
        }}
    getData();
}, [])

const handlePrice = () => {
    const orderPrice = [...bikes].sort((a, b) => a.price - b.price);
    
    return setFilteredBikes(orderPrice);
  }


//   terminar Logica filtros
const handleTerrain = async (e) => {   
    if (e.target.value === "") {
       return setFilteredBikes(bikes)
    }
    const filterTerrain = await [...bikes].filter((bike => bike.terrain === e.target.value));
    return setFilteredBikes(filterTerrain);
}

const handleBiketype = async (e) => {   
    if (e.target.value === "") {
       return setFilteredBikes(bikes)
    }
    const filterBiketype = await [...bikes].filter((bike => bike.biketype === e.target.value));
    return setFilteredBikes(filterBiketype);
}

const handleMaterial = async (e) => { 
    if (e.target.value === "") {
       return setFilteredBikes(bikes)
    }
    const filterMaterial = await [...bikes].filter((bike => bike.material === e.target.value));
    return setFilteredBikes(filterMaterial);
}




return (
    <div className='grid-container'>
        <div className='item-bikes-1' >
            <select onChange={handleTerrain}>
                <option value="">Terrain</option>
                <option value="light">Light</option>
                <option value="intense">Intense</option>
                <option value="all road">All Road</option>
            </select>
            <select onChange={handleBiketype}>
                <option value="">Biketype</option>
                <option value="normal">Normal</option>
                <option value="electric">Electric</option>
            </select>
            <select onChange={handleMaterial}>
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
       
        </div>
        </div>
        <div className='item-bikes-2'><Outlet/></div>
    
    </div>
)

}