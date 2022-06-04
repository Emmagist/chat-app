import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const { username, setUsername} = useState('');

    const { password, setPassword} = useState('');

    const { error, setError} = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if user details is present then login else give an error
        const authObject = {'Project-ID': "2b897963-85f4-40a6-8046-0dc888ad3512", 'User-Name': username, 'User-Secret': password}

        try {
            axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            setError('Oops! incorrect credentials.');
        }
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form action="" className="" onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button className="button" type="submit">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h3 className="error">{error}</h3>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;