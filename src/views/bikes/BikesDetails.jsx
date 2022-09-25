import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

function Button({children}) {
    return <button>{children}</button>;
}

export default function Reviews() {
    const {id} = useParams(); 
    const storedToken = localStorage.getItem('authToken');
    const [ bike, setBikes] = useState(null);
    
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/bike/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
                setBikes(response.data.data);
            } catch (error) {
                console.log(error)
            }
        }
    getData();
}, [id, storedToken])
const addToFavorites = async () => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/favorite/${bike._id}`, {}, { headers: { Authorization: `Bearer ${storedToken}` } })
        toast("added to favorites")
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
return (
    <div className="bikeDetails-container">
        {bike && (
            <div className="bikeDetails">
                <img  src={bike.image} alt={bike.name}/> 
                <h2>{bike.name}</h2> 
                <h4>{bike.description}</h4>
                <h2>{bike.price}€</h2> 
                <a className="buy-save-bike" href={bike.url} target="_blank" rel="noreferrer">
                    <Button >Buy</Button>
                </a>
                <button className="buy-save-bike" onClick={addToFavorites}>Save</button>
            </div>
        )}
    </div>
)

}