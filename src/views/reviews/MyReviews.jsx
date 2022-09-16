import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import { Navigate, useParams } from "react-router-dom";

export default function Reviews() {
    const {id} = useParams(); 
    const storedToken = localStorage.getItem('authToken');
    const [ myReview, setMyReviews] = useState(null);
    
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
        {myReview && (
            <div>
                <img width="200px" src={myReview.imageUrl} alt={myReview.title}/> 
                <h2>{myReview.title}</h2> 
                <p>{myReview.description}</p>
                <button onClick={handleDelete}>Delete</button> 
                <button onClick={() => Navigate(`/edit/${id}`)}>Edit</button> 
            </div>
        )}
        {!myReview && <p>Review not found</p>}
    </div>
)

}