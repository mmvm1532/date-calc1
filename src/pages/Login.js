import React from 'react';
import { auth, provider} from '../firebase-config';
import { signInWithPopup, signInAnonymously} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login({setIsAuth}) {

    //creating a var that uses useNavigate() hook
    let navigate = useNavigate();


    const signInWithGoogle = () => {
    //function that takes firebase Api to popup new screen
       signInWithPopup(auth, provider).then(() => {
    //Changing isAuth to true to get logout button later and creating a localstorage locale
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
    //navigating to home page after successfull login 
            navigate("/");
        })
    }

    const signInAnon = () => {
    signInAnonymously(auth)
    .then(() => {
      localStorage.setItem("isAuth", true)
      setIsAuth(true)
      navigate("/")
    })
  }
  return (
    <div className="loginPage">
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
            Sign-in with Google
        </button>
        <p></p>
        <button className="login-with-anon-btn" onClick={signInAnon}>
          Sign-in Anonymously
        </button>
    </div>
  )
}

export default Login