import React, { createContext, useState } from "react";

export const AuthContext = createContext()

function AuthContextProvider(props) {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('wasteNotUser'))
    const [name, setName] = useState(localStorage.getItem('wasteNotName'))
    const [token, setToken] = useState(localStorage.getItem('wasteNotToken'))
 

    const handleUser = (user) => {
        setCurrentUser(user)
        localStorage.setItem('wasteNotUser', user)
    }

    const handleToken = (token) => {
        setToken(token)
        localStorage.setItem('wasteNotToken', token)
    }

    const handleName = (name) => {
        setName(name)
        localStorage.setItem('wasteNotName', name)
    }


    const handleLogout = () => {
        
        localStorage.removeItem('wasteNotUser')
        localStorage.removeItem('wasteNotToken')
        localStorage.removeItem('wasteNotName')        
   
    }


    const value = { currentUser, handleUser, handleLogout, handleToken, token, name, handleName }



    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider;