import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import { Link, Navigate, useParams } from "react-router-dom";

export default function Reviews() {
    const {id} = useParams(); 
    const storedToken = localStorage.getItem('authToken');
    const [ myReviews, setMyReviews] = useState(null);
    
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/review/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
                setMyReviews(response.data.data);
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
    getData();
}, [id, storedToken])

const handleDelete = async () => {
    try {
        await axios.delete((`http://localhost:8000/api/v1/review/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } }))
        toast.success('Review deleted')
        Navigate('/');
    } catch (error) {
        console.error(error)
    }
}

return (
    <div>
        <p>My reviews</p>
        {!myReviews && <p>loading</p>}
        {myReviews && myReviews.map(review => {
            return (
                <div key={review._id}>
                    <img width="200px" src={review.imageUrl} alt={review.title}/> 
                    <h2 key={review._id} ><Link to={`/review/${review._id}`}>{review.title}</Link></h2>
                    <button onClick={() => Navigate(`/edit/${id}`)}>Edit</button>  
                    <button onClick={handleDelete}>Delete</button> 
                </div>)
        })} 
    </div>
)

}