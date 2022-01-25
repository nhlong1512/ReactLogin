import React from 'react';
import { useState } from 'react'
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  const adminUser = {
    email: "huulongn15@gmail.com",
    password: "admin123"
  }

  const [user, setUser] = useState({ name: "", email: "" })
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details);
    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log('Logged in');
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      setError('The email address or password is incorrect.')
    }
  }
  const Logout = () => {
    setUser({
      name: '',
      email: ''
    })
  }

  return (
    <div className="App">
      {
        (user.email !== "") ? (
          <div>
            <h2 className="text-purple-500 text-[18px] font-bold mt-12">
            Welcome, <span>{user.name}</span>
            </h2>
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded my-6"
              onClick={Logout}>
              Logout
            </button>
          </div>
        ) :
          <LoginForm Login={Login} error={error} />
      }
    </div>
  );
}

export default App;
