import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [users , setUser] = useState([
        
    { id: 1, name : "Aziz", position : "Font End Developer" , salary : 28000},
    {id: 2, name : "Munna", position : "Data Entry" , salary : 26000},
    {id: 3, name : "shah", position : "Full Stack developer" , salary : 27000}
    ]);
    return (
        <UserContext.Provider value= {[users , setUser]}>
            {props.children} </UserContext.Provider>
    );
}

