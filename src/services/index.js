import { encryptedLocalStorage } from "./encrypt-storage/encrypt-storage";
import { authHeader } from "./auth-header/auth-header";
import { createUser,getUsers,updateUser,deleteUser } from "./user/user-service";


export const services={
  encryptedLocalStorage,
  authHeader,
  createUser,
  getUsers,
  updateUser,
  deleteUser,
 
 

}