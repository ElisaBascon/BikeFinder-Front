import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Reviews() {
    
    const storedToken = localStorage.getItem('authToken');
    const [ review, setReviews] = useState(null);
    
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/review/:id', review, { headers: { Authorization: `Bearer ${storedToken}` } })
                setReviews(response.data.data);
            } catch (error) {
                console.log(error)
            }
        }
    getData();
}, )

return (
    <div>
        {!review && <p>loading</p>}
        {review && <p>{review}</p>}
    </div>
)

}