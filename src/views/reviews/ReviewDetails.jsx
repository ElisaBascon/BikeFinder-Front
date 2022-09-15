import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Reviews() {
    const {id} = useParams(); 
    const storedToken = localStorage.getItem('authToken');
    const [ review, setReviews] = useState(null);
    
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/review/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
                setReviews(response.data.data);
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
    getData();
}, [id])

return (
    <div>
        {review && (
            <div>
                <img width="200px" src={review.imageUrl} alt={review.title}/> 
                <h2>{review.title}</h2> 
                <p>{review.description}</p> 
            </div>
        )}
    </div>
)

}