import connection from "../dbStrategy/db.js";

export default async function insertClient(name, address, phone){
    return await connection.query(`
        INSERT INTO clients
        (name, address, phone)
        VALUES ($1, $2, $3)
    `, [name, address, phone]);
}

export async function getClientAsRegister(userEmail){
    

    return await connection.query(`
        SELECT * FROM users WHERE email = $1
    `, [userEmail]);
}