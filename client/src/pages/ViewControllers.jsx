import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import ControllersAPI from '../services/ControllersAPI'

const ViewControllers = () => {
    const [controllers, setControllers] = useState([])

    useEffect(() =>{
        const fetchControllers = async () => {
            const data = await ControllersAPI.getControllers()
            setControllers(data)
        }
        fetchControllers()
    }, [])
    
    return (
    <div>
        <h1>Controllers</h1>

        {controllers.length === 0 ? (
            <p>No controllers created yet.</p>
        ) : (
            controllers.map((controller) => (
                <div key={controller.id}>
                    <Link to={`/customcars/${controller.id}`}>
                        <h2>{controller.name}</h2>
                    </Link>

                    <p>Shell Color: {controller.shell_color}</p>
                    <p>Button Style: {controller.button_style}</p>
                    <p>Grip Style: {controller.grip_style}</p>
                    <p>LED Color: {controller.led_color}</p>
                    <p>Price: ${controller.price}</p>
                </div>
            ))
        )}
    </div>
)
}

export default ViewControllers