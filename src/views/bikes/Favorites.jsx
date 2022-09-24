import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function Favorites() {
    const storedToken = localStorage.getItem('authToken');
    const [ myFavorites, setMyFavorites] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/favorite`, { headers: { Authorization: `Bearer ${storedToken}` } })
                setMyFavorites(response.data.data);
            } catch (error) {
                console.log(error)
            }
        }
    getData();
    }, [storedToken])


return (
    <div>
        {!myFavorites && <p>loading</p>}
        {myFavorites && myFavorites.map(bike => {
            return <div key={bike._id}>
                    {bike.image !== "" ? <img width="200px" src={bike.bikeId.image} alt={bike.bikeId.name}/> : ""}
                    <h2>{bike.bikeId.name}</h2>
                </div>
        })} 
    </div>
)

}