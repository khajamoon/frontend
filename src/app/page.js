'use client'
import { useState } from "react";
import SignUp from "./pages/signup";
const axios = require('axios');

export default function Home() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {

    // Generate payload
    const payload = {
      id: Math.floor(Math.random() * 10000),
      username,
      password
    };
    console.log('Payload:', payload);
    let data = JSON.stringify(payload)
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://54.227.88.54:8000/api/user',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };


    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });



    // Call your API here
  };
  return (




    // <>

    //   <h1>welcome to my app</h1>
    //   <form >
    //     <input
    //       type="text"
    //       placeholder="Username"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button onClick={handleSubmit} type="button">Login</button>
    //   </form>


    // </>
      <SignUp></SignUp>




  );
}
