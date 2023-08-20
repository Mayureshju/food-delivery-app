import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
    const [user,setUser] = useState({  
           name: "Dummy Name",
           email: "mj@gmail.com"
        })


        const value = {
           user,
           setUser
          };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}


