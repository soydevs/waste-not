import React, { useContext } from 'react'
import { Route, Navigate } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext'

const PrivateRoute = ({children, ...rest}) => {

    const { currentUser } = useContext(AuthContext)

    return (
        <Route
    {...rest}
    render={props =>
      currentUser ? (
        children
      ) : (
        <Navigate
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
    )
}

export default PrivateRoute