import connection from "../dbStrategy/db.js";

export async function allVehicles(){
    return await connection.query(`
    SELECT * FROM vehicles
    `);
}
export async function getVehicleLicense(license){

    return await connection.query(`
        SELECT * FROM vehicle WHERE license = $1
    `, [license]);
}