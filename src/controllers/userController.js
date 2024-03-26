import { readFileModel} from "../utils/filesServices.js";
import { getClientAsRegister } from "../repositories/clientRepository.js"
import dotenv from "dotenv";

dotenv.config();

export async function loginUser(req, res) {
  const { password, email } = req.body;

  try {
    const db = await readFileModel("usersBase");

    const searchinginDb = db.users.find((item) => {
      if (item.login === email && item.pass_ == password) {
        return item;
      }
    });

    if (searchinginDb) {
      res.status(200).json({
        name: searchinginDb.name,
        acess: searchinginDb.control_acess,
      });
    } else return res.status(401).send("You dont have permission for this");
  
  } catch (error) {
    return console.log(error);
  }
}

export async function checkUserAsRegister(req, res){
 const { email, password } = req.body;
 console.log(process.env.DATABASE_URL)

  try {
    await getClientAsRegister(email, password);

    return res.status(200).send();
  } catch (error) {
    return res.status(401).send();
  }
}