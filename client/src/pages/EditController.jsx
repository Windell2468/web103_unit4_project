import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../App.css'
import ControllersAPI from '../services/ControllersAPI'

const EditController = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [controller, setController] = useState({
        name: '',
        shell_color: '',
        button_style: '',
        grip_style: '',
        led_color: '',
        price: 0
    })

    useEffect(() => {
        const fetchController = async () => {
            const data = await ControllersAPI.getControllerById(id)
            setController(data)
        }

        fetchController()
    }, [id])
    
    const handleChange = (e) => {
        setController({
            ...controller,
            [e.target.name]: e.target.value
        })
    } 

    if (!controller.name) {
        return <h2>Loading...</h2>
    }

    const handleSubmit = async (e) => {
    e.preventDefault()

    // Prevent impossible controller combinations
    if (
        controller.shell_color === controller.led_color &&
        controller.shell_color !== ''
    ) {
        alert('Shell Color and LED Color cannot be the same.')
        return
    }

    await ControllersAPI.updateController(id, controller)

    alert('Controller updated successfully!')

    navigate(`/customcars/${id}`)
}


    return (
        <div className='form-container'>
            <h1>Edit Controller</h1>

            <form onSubmit={handleSubmit}>
                <label>Controller Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Controller Name"
                    value={controller.name}
                    onChange={handleChange}
                    required
                />
                <label>Shell Color</label>
                <select name="shell_color" value={controller.shell_color} onChange={handleChange} required>
                    <option value="">Select Shell Color</option>
                    <option value="Black">Black</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Purple">Purple</option>
                    <option value="White">White</option>
                    <option value="Orange">Orange</option>
                </select>
                <label>Button Style</label>
                <select name="button_style" 
                value={controller.button_style} 
                onChange={handleChange}
                required
                >
                    <option value="">Select Button Style</option>
                    <option value="Standard">Standard</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Elite">Elite</option>
                </select>
                <label>Grip Style</label>
                <select name="grip_style" value={controller.grip_style} onChange={handleChange} required>
                    <option value="">Select Grip Style</option>
                    <option value="Rubber">Rubber</option>
                    <option value="Textured">Textured</option>
                    <option value="Smooth">Smooth</option>
                </select>
                <label>LED Color</label>
                <select name="led_color" 
                value={controller.led_color} 
                onChange={handleChange}
                required
                > 
                    <option value="">Select LED Color</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Purple">Purple</option>
                    <option value="Orange">Orange</option>
                    <option value="Rainbow RGB">Rainbow RGB</option>
                </select>
                <label>Price</label>
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={controller.price}
                    onChange={handleChange}
                    min="0"
                    required          
                />

                <button type="submit">
                    Update Controller
                </button>

            </form>

        </div>
    )
}

export default EditController