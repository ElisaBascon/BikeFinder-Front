import React, { useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import axios from "axios";

export default function Reviews() {
    const storedToken = localStorage.getItem('authToken')
    const [ bikes, setBikes] = useState(null);
    
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/bike', bikes, { headers: { Authorization: `Bearer ${storedToken}` } })
                setBikes(response.data.data);
            } catch (error) {
                console.log(error)
            }
        }
    getData();
}, )

return (
    <div>
        {!bikes && <p>loading</p>}
        {bikes && bikes.map(bike => {
            return <p key={bikes._id}><Link to={`/bikes/${bike._id}`}>{bike}</Link></p>
        })}
        <Outlet/>
    </div>
)

}