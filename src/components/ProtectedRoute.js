import { useContext } from "react"
import { Redirect, Route } from "react-router";
import { MyContext } from "../Context"

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { user } = useContext(MyContext);

    return (
        <Route
            {...rest}
            render={
                props => {
                    if (user) {
                        return <Component {...rest} {...props} />
                    } else {
                        return <Redirect to='/login' />
                    }
                }
            }
        />  
    )
};

export default ProtectedRoute;