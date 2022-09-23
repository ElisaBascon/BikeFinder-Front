import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Favorites() {
    const {id} = useParams(); 
    const storedToken = localStorage.getItem('authToken');
    const [ myFavorites, setMyFavorites] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/favorite`, { headers: { Authorization: `Bearer ${storedToken}` } })
                setMyFavorites(response.data.data);
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
    getData();
    }, [id, storedToken])

const handleDelete = async (favoriteId) => {
    try {
        const deleted = await axios.delete(`http://localhost:8000/api/v1/favorite/${favoriteId}`, { headers: { Authorization: `Bearer ${storedToken}` } })
        console.log("i have deleted ", deleted)
        toast.success('Favorite deleted')
        navigate('/bikes');
    } catch (error) {
        console.error(error)
    }
}

return (
    <div>
        {!myFavorites && <p>loading</p>}
        {myFavorites && myFavorites.map(bike => {
            return (
                <div key={bike._id}>
                    <img width="200px" src={bike.image} alt={bike.name}/> 
                    <h2 key={bike._id} ><Link to={`/favorite/${bike._id}`}>{bike.name}</Link></h2>
                    <button className="edit-delete" onClick={() => handleDelete(bike._id)}>Delete</button> 
                </div>)
        })} 
    </div>
)

}