import React, { useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import axios from "axios";

export default function Reviews() {
    const storedToken = localStorage.getItem('authToken')
    const [ reviews, setReviews] = useState(null);
    
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/review', reviews, { headers: { Authorization: `Bearer ${storedToken}` } })
                setReviews(response.data.data);
            } catch (error) {
                console.log(error)
            }
        }
    getData();
}, [])

return (
    <div>
        {!reviews && <p>loading</p>}
        {reviews && reviews.map(review => {
            return <p key={review._id}><Link to={`/review/${review._id}`}>{review}</Link></p>
        })}
        <Outlet/>
    </div>
)

}