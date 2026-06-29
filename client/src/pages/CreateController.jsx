import React, { useState } from 'react'
import '../App.css'
import ControllersAPI from '../services/ControllersAPI'


const CreateController = () => {
    const [controller, setController] = useState({
        name: '',
        shell_color: '',
        button_style: '',
        grip_style: '',
        led_color: '',
        price: 50
    })

    const handleChange = (e) => {
        const updatedController = {
            ...controller,
            [e.target.name]: e.target.value
        }
         let price = 50

         // Shell Color
         if (updatedController.shell_color === 'Black') price += 10
         if (updatedController.shell_color === 'Red') price += 15
         if (updatedController.shell_color === 'Blue') price += 15
         if (updatedController.shell_color === 'Green') price += 15
         if (updatedController.shell_color === 'Purple') price += 20
         if (updatedController.shell_color === 'White') price += 10
         if (updatedController.shell_color === 'Orange') price += 20

         // Button Style
         if (updatedController.button_style === 'Mechanical') price += 25
         if (updatedController.button_style === 'Hybrid') price += 35
         if (updatedController.button_style === 'Elite') price += 50

         //Grip Style
         if (updatedController.grip_style === 'Rubber') price += 10
         if (updatedController.grip_style === 'Textured') price += 20

         // LED Color
         if (updatedController.led_color === 'Rainbow RGB') price += 40
         else if (updatedController.led_color !== '') price += 15

         updatedController.price = price

         setController(updatedController)
    }

    const handleSubmit = async (e) => {
    e.preventDefault()

    if (
        controller.shell_color === controller.led_color &&
        controller.shell_color !== ''
    ) {
        alert('Shell Color and LED Color cannot be the same.')
        return
    }

    const result = await ControllersAPI.createController(controller)

    console.log(result)

    if (result.error) {
        alert(result.error)
    } else {
        alert('Controller created successfully!')
    }

    setController({
        name: '',
        shell_color: '',
        button_style: '',
        grip_style: '',
        led_color: '',
        price: 50
    })
}

    return (
        <div className='form-container'>
            <h1>Customize Your Controller</h1>
            <div 
        className="controller-preview"
        style={{ backgroundColor: controller.shell_color || 'gray' }}
    >
        🎮
    </div>

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
                <label>Total Price</label>
               <input
               type="number"
               name="price"
               placeholder="Price"
               value={controller.price}
               min="0"
               readOnly
/>

                <button type="submit">
                    Save Controller
                </button>
                

            

            </form>

        </div>
    )
}

export default CreateController