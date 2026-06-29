import { pool } from '../config/database.js'

export const getControllers = async (req, res) => {
    try {
        const results = await  pool.query('SELECT * FROM controllers ORDER BY id ASC')
        res.status(200).json(results.rows)
    }catch (err) {
        res.status(409).json({ error:  err.message})
    }
}

export const getControllerById = async (req, res) => {
    try {
        const { id } = req.params

        const results = await pool.query(
            'SELECT * FROM controllers WHERE  id = $1',
            [id]
        )
        res.status(200).json(results.rows[0])

    } catch (err) {
        res.status(409).json({ error: err.message})

    }
}

export const createController = async (req, res) => {
    try {
        const {
            name,
            shell_color,
            button_style,
            grip_style,
            led_color,
            price
        } = req.body

        const results = await pool.query(
            `INSERT INTO controllers
            (name, shell_color, button_style, grip_style, led_color, price)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *`,
            [
                name,
                shell_color,
                button_style,
                grip_style,
                led_color,
                price
            ]
        )
        res.status(201).json(results.rows[0])
    }catch (err) {
        res.status(409).json({ error: err.message})


    }
}

export const updateController = async (req, res) => {
    try {
        const { id } = req.params

        const {
            name,
            shell_color,
            button_style,
            grip_style,
            led_color,
            price
        } = req.body

        const results = await pool.query(
            `UPDATE controllers
            SET name = $1,
                shell_color = $2,
                button_style = $3,
                grip_style = $4,
                led_color = $5,
                price = $6
            WHERE id = $7
            RETURNING *`,
            [
                name,
                shell_color,
                button_style,
                grip_style,
                led_color,
                price,
                id
            ]
        )

        res.status(200).json(results.rows[0])
    } catch (err) {
        res.status(409).json({ error: err.message })
    }
}

export const deleteController = async (req, res) => {
    try{
        const { id } = req.params

        await pool.query(
            'DELETE FROM controllers WHERE  id = $1',
            [id]
        )
       res.status(200).json({ message: 'Controller deleted successfully' })

    }catch (err) {
        res.status(409).json({error: err.message})
        
    }
}