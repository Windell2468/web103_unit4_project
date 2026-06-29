import { pool } from './database.js'


const createControllersTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS controllers;

        CREATE TABLE controllers (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            shell_color Varchar(50) NOT NULL,
            button_style VARCHAR(50) NOT NULL,
            grip_style VARCHAR(50) NOT NULL,
            led_color VARCHAR(50) NOT NULL,
            price INTEGER NOT NULL 
        
        );    
    `
    try {
        await pool.query(createTableQuery)
        console.log('Controllers table created successfully!')

    }catch (err) {
        console.error(err)

    }

}

await createControllersTable()
await pool.end()