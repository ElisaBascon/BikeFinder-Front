import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Favorites() {
    const storedToken = localStorage.getItem('authToken');
    const [ myFavorites, setMyFavorites] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/favorite`, { headers: { Authorization: `Bearer ${storedToken}` } })
                setMyFavorites(response.data.data);
            } catch (error) {
                console.log(error)
            }
        }
    getData();
    }, [storedToken])


return (
    <div className="grid-container-my-reviews" >
        {!myFavorites && <p>loading</p>}
        {myFavorites && myFavorites.map(bike => {
            return (<div className="my-reviews" key={bike._id}>
                    {bike.image !== "" ? <img className="my-favorite" src={bike.bikeId.image} alt={bike.bikeId.name}/> : ""}
                    <div className="my-reviews-text">
                        <h2>{bike.bikeId.name}</h2>
                        <h4 className="my-favorite-Bike" >TERRAIN: {bike.bikeId.terrain}</h4>
                        <h4 className="my-favorite-Bike" >BYKETIPE:{bike.bikeId.biketype}</h4>
                        <h4 className="my-favorite-Bike" >MATERIAL: {bike.bikeId.material}</h4>
                        <h3 className="my-bike-price">{bike.bikeId.price}€</h3>
                    </div>   
                </div>)
        })} 
    </div>
)

}