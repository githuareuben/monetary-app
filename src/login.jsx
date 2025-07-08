import React, { useEffect } from "react";
import{collection, getDocs} from "firebase/firestore"; /* import from firebase cloud*/
import {db} from "./firebase";  /* import from firebase.js */
import './login.css'

function Login() {
    //collection reference
    const colRef = collection(db, "login");

    useEffect(() => {
        // Fetch documents from Firestore collection when component loads
        getDocs(colRef)
          .then((snapshot) => {
            console.log(snapshot.docs.map(doc => doc.data())); // view data
          })
          .catch((error) => {
            console.error("Error fetching documents:", error);
          });
      }, []);
    return (
      <>
        <section className= "login">
            <div> 
            <h1> Money manager </h1>
            </div>
            <div>
                <h1>Create an account </h1>
                <div className="login_details">
                <input id='firstname' type="text" placeholder='First name' />
                <input id='lastname' type="text" placeholder='Last name' />
                <input id='email' type="text" placeholder='email' />
                <input id='password' type="password" placeholder='password' />
                </div>
            </div>
        </section>

      </>
    )
  }
  
  export default Login
  