import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditReview() {
    const navigate = Navigate();
    const {id} = useParams();
    const storedToken = localStorage.getItem('authToken');
    const [review, setReview] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/review/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
                setReview(response.data.data);
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
        getData();
    }, [id, storedToken]) 


    const handleChange = (e) => {
        setReview(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
        console.log(review)
    }

    const handleFileUpload = async(e) => {
        const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0]);
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/review/upload`, uploadData);
            console.log(response.data.fileUrl);

            setReview(prev => {
                return {
                    ...prev,
                    imageUrl: response.data.fileUrl
                }
            })
        } catch (error) {
            console.error(error);
        }}

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newReview = await axios.put('http://localhost:8000/api/v1/review', review, { headers: { Authorization: `Bearer ${storedToken}` } });
            navigate(`/reviews/${newReview.data.data._id}`)
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <div>
            <h1>Edit Review</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={(e) => handleFileUpload(e)} />
                <input type="text" name="title" placeholder="Title" value={review.title} onChange={handleChange} />
                <input type="text" name="description" placeholder="Description" value={review.description} onChange={handleChange} />
                <button type="submit">Save Changes</button>
            </form>
        </div>
    )

}