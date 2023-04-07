import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const RequireLogin = (props) => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
  return (
    <React.Fragment>
    {props}
    </React.Fragment>
  )
}

export default RequireLogin