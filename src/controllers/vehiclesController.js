import { readFileModel } from "../utils/filesServices.js";

export async function gettingAllVehicles(req, res) {
  try {
    const db = await readFileModel("vehicles");

    
    if (db) {
      res.status(200).json(db);
    } else return res.status(404).send("Ops, parece que não tem nada aqui para mostrar");
  
  } catch (error) {
    return console.log(error);
  }
}

