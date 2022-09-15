import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Reviews() {
    const {id} = useParams(); 
    const storedToken = localStorage.getItem('authToken');
    const [ bike, setBikes] = useState(null);
    
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/bike/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
                setBikes(response.data.data);
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
    getData();
}, [id, storedToken])

return (
    <div>
        {bike && (
            <div>
                <img width="200px" src={bike.image} alt={bike.name}/> 
                <h2>{bike.name}</h2> 
                <p>{bike.description}</p>
                <p>{bike.price}</p> 
                <p>{bike.url}</p>  
            </div>
        )}
    </div>
)

}