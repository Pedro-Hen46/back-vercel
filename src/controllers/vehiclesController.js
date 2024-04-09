import { allVehicles, getVehicleLicense } from "../repositories/vehiclesRepository.js";

export async function gettingAllVehicles(req, res) {
  try {
    
    const vehicles = await allVehicles();

    if (vehicles.rows.length!== 0) {
      return res.status(200).send(vehicles.rows);
    }

    return res.status(404).send();
    
    
  } catch (error) {
    return res.status(404).send();
  }
}

export async function getVehicleById(req, res) {
  const { license } = req.body;
  try {
    
    const vehicles = await getVehicleLicense(license);

    if (vehicles.rows.length!== 0) {
      return res.status(200).send(vehicles.rows);
    }

    return res.status(404).send("Nao achei papai");
    
    
  } catch (error) {
    return res.status(404).send();
  }
}

