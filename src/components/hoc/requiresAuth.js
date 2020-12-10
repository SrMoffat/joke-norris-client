import { useContext } from "react";
import { Route, Redirect } from 'react-router-dom';

import { UserContext } from "../../state";

const RequiresAuth = ({ component: Component, ...otherProps }) => {
    const { state: { user } } = useContext(UserContext);
    return (
        <Route
          {...otherProps}
          render={props => (localStorage.getItem("currentUser") ? (
            <Component {...props} user={user} />
          ) : (
              <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            ))
          }
        />
    );
};
export default RequiresAuth;
