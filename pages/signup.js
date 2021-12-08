import React, {useState} from 'react'

export default function Signup() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
  
        const login = await fetch(`http://localhost:3001/api/v1/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                  email: email,
                  password: password,
                  username: username
              })
        }).then((res) => res.json()).then((data) => localStorage.setItem('uid',data.uid) )
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <label>Password:</label>
                <input type="text" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <label>username:</label>
                <input type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                <button>Sign Up</button>
                
            </form>
        </div>
    )
}

