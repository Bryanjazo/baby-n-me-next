import React, {useState} from 'react'
import { useSelector } from 'react-redux';
export default function Login() {
    const {userUid} = useSelector((state) => state.user)
    console.log(userUid)
    const [email, setEmail] = useState('');
    const [password, setPassworf] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const login = await fetch(`http://localhost:3001/api/v1/sessions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                  email: email,
                  password: password
              })
        }).then((res) => res.json()).then((data) => {
            console.log(data)
            localStorage.setItem('uid', data.uid)})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <label>Password:</label>
                <input type="text" value={password} placeholder="Password" onChange={(e) => setPassworf(e.target.value)}/>
                <button>Sign Up</button>
            </form>
        </div>
    )
}


// export async function getStaticProps(context) {
    
//     return{
//         props: {}
//     }
// }
