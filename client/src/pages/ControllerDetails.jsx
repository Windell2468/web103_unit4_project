import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import '../App.css'
import ControllersAPI from '../services/ControllersAPI'

const ControllerDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [controller, setController] = useState(null)

    const handleDelete = async () => {
    await ControllersAPI.deleteController(id)
    navigate('/customcars')
}

    useEffect(() => {
        const fetchController = async () => {
            const data = await ControllersAPI.getControllerById(id)
            setController(data)
        }

        fetchController()
    }, [id])

    if (!controller) {
        return <h2>Loading...</h2>
    }

    return (
    <div>
        <h1>{controller.name}</h1>

        <p>Shell Color: {controller.shell_color}</p>
        <p>Button Style: {controller.button_style}</p>
        <p>Grip Style: {controller.grip_style}</p>
        <p>LED Color: {controller.led_color}</p>
        <p>Price: ${controller.price}</p>

        <Link to={`/edit/${controller.id}`}>
            <button>Edit Controller</button>
        </Link>

        <button onClick={handleDelete}>
            Delete Controller
        </button>
    </div>
)
}

export default ControllerDetails