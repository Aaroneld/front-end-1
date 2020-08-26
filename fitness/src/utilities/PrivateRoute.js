import React from 'react'
import { Route } from 'react-router-dom'

function PrivateRoute({children , path, ...rest}){
    const { push } = useHistory();
    if (localStorage.getItem("token")){
        return(
            <Route path={path}>
                {children}
            </Route>
        )
    } else {
       push("/login");
    }
    return null
}
 
export default PrivateRoute;