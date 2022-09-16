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

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const newReview = await axios.post('http://localhost:8000/api/v1/review', review, { headers: { Authorization: `Bearer ${storedToken}` } });
        navigate(`/reviews/${newReview.data.data._id}`)
    } catch (error) {
        console.error(error)
    }
}

}