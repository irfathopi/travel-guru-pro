import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import {UserContext} from '../../App';
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    var { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name : displayName , email}
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
           
          });
    
    }
    

    return (
        <div>
            <button onClick ={handleGoogleSignIn}>google sign in</button>
        </div>
    );
};

export default Login;