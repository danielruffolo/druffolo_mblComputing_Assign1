import { User } from "../models/user";



export class UsersService {

    

    private Users: User[] = [];


    addUser(username: string,password: string,firstname: string,lastname: string,email: string,timestamp: string)

            {
                 const user = new User(
                     
                    username,
                    password,
                    firstname,
                    lastname,
                    email,
                    timestamp);
                 this.Users.push(user);

         
                 

             }


}

