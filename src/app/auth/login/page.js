'use client'
import { useState, useEffect } from 'react'

const LoginPage = () => {
    const [username, setUsername] = useState('pedja')
    const [password, setPassword] = useState('124')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const updateValue = (event) => {
        const fieldID = event.target.id
        if (fieldID === 'username') {
            setUsername(event.target.value)
            return
        }
        console.log('pass to be updated ', event.target.value)
        setPassword(event.target.value)
    }

    const isFormValid = () => {
        if (username.length > 3 && password.length > 3) {
            return true
        }
        return false
    }

    const onSubmit = (event) => {
        if (!isFormValid()) {
            event.preventDefault()
            setIsSubmitted(true)
        }
        setIsSubmitted(false)
    }

    return (
        <div>
            <h1>Login Page</h1>
            <p style={{ color: 'red', display: !isSubmitted ? 'none' : 'block' }}>
                Error: Forma nije validna
            </p>
            <form style={styles.form}>
                <input
                    // style={styles.form}
                    type="text"
                    id="username"
                    defaultValue={username}
                    placeholder="username"
                    onChange={updateValue}
                    required
                />
                <input
                    // style={styles.form}
                    id="password"
                    type="password"
                    placeholder="Password"
                    defaultValue={password}
                    onChange={updateValue}
                    required
                    autoFocus
                />
                <button type="submit" onClick={(e) => onSubmit(e)}>
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage

const styles = {
    form: {
        display: 'block',
        color: 'black'
    }
}
