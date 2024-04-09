import { readFileModel} from "../utils/filesServices.js";
import { getClientAsRegister } from "../repositories/clientRepository.js"

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

  try {
    const result = await getClientAsRegister(email, password);

    console.log(result.rows[0]);
    return res.status(200).send();
  } catch (error) {
    return res.status(401).send();
  }
}

export async function userDetails(req, res){
  const { email:userEmail } = req.body;
  
  try {
    const user = await getClientAsRegister(userEmail);
    
    if(user.rows.length !== 0){
      return res.status(200).send(user.rows[0]);
    }
    
    return res.status(404).send();

  } catch (error) {
    return res.status(404).send(error);
    
  }
}