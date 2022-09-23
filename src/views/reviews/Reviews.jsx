import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from 'react-router-dom';
import axios from "axios";


export default function Reviews() {
    const {id} = useParams(); 
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
    <div className="container-reviews-out" >
        {!reviews && <p>loading</p>}
        {reviews && reviews.map(review => {
            return (
                <div className="container-reviews-in" key={review._id}>
                    <Link to={`/review/${review._id}`}><img width="150px" height="100%" src={review.imageUrl} alt={review.title}/></Link> 
                </div>)
        })} 
    </div>
)

}