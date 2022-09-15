import React, { useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import axios from "axios";

export default function Reviews() {
    const storedToken = localStorage.getItem('authToken');
    const [ reviews, setReviews] = useState(null);
    
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/review', { headers: { Authorization: `Bearer ${storedToken}` } })
                setReviews(response.data.data);
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
    getData();
}, [storedToken])

return (
    <div>
        {!reviews && <p>loading</p>}
        {reviews && reviews.map(review => {
            return (<p key={review._id}><Link to={`/review/${review._id}`}>{review.title}</Link></p>)
        })} 
        <Outlet/>
    </div>
)

}