import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import { Link, useNavigate, useParams } from "react-router-dom";

export default function MyReviews() {
    const {id} = useParams(); 
    const storedToken = localStorage.getItem('authToken');
    const [ myReviews, setMyReviews] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/review/mine`, { headers: { Authorization: `Bearer ${storedToken}` } })
                setMyReviews(response.data.data);
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
    getData();
}, [id, storedToken])

const handleDelete = async (reviewId) => {
    console.log("estoy en delete")
    try {
        const deleted = await axios.delete(`http://localhost:8000/api/v1/review/${reviewId}`, { headers: { Authorization: `Bearer ${storedToken}` } })
        console.log("i have deleted ", deleted)
        toast.success('Review deleted')
        navigate('/reviews');
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
                <div className="my-reviews" key={review._id}>
                    <img width="200px" src={review.imageUrl} alt={review.title}/> 
                    <h2 key={review._id} ><Link to={`/review/${review._id}`}>{review.title}</Link></h2>
                    <button className="edit-delete" onClick={() => navigate(`/edit/${review._id}`)}>Edit</button>  
                    <button className="edit-delete" onClick={() => handleDelete(review._id)}>Delete</button> 
                </div>)
        })} 
    </div>
)

}