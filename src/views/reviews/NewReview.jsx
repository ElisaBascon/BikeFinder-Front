import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function FormReview() {

    const storedToken = localStorage.getItem('authToken');
    const navigate = useNavigate();
    const [review, setReview ] = useState ({
        imageUrl:'',
        title: '',
        description:''
    })

    const handleChange = (e) => {
        setReview(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
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
        }
        }
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newReview = await axios.post('http://localhost:8000/api/v1/review', review, { headers: { Authorization: `Bearer ${storedToken}` } });
            toast.success('Review created sucessfully')
            console.log(newReview)
            navigate(`/reviews/${newReview.data.data._id}`)
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={(e) => handleFileUpload(e)} />
                <input type="text" name="title" placeholder="Title" value={review.title} onChange={handleChange} />
                <input type="text" name="description" placeholder="Description" value={review.description} onChange={handleChange} />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
