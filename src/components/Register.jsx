import { Room, Cancel } from '@material-ui/icons'
import { useState, useRef } from 'react';
import axios from 'axios'
import './register.css'

export default function Register({setShowRegister}) {

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit =  async (e) => {
        e.preventDefault()
        const newUser = {
            username: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        try{
            await axios.post('/users/register', newUser)
            setSuccess(true)
            setError(false)
        }catch(err) {
            setError(true)
        }
    }

    return (
        <div className="registerContainer">
            <div className="logo">
                <Room/>
                Mappin
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" ref={nameRef}/>
                <input type="emai" placeholder="email" ref={emailRef} />
                <input type="password" placeholder="password" ref={passwordRef} />
                <button className="registerButton">Register</button>
                {success &&
                    <span className="success">Sucessful! You can Login now. </span>
                } {error &&    
                    <span className="failure">Something went wrong. </span>
                }
                
            </form>
            <Cancel className="registerCancel" onClick={() => setShowRegister(false)}
            />
        </div>
    )
}

