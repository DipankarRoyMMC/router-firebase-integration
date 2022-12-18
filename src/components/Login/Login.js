import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { handleSignInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={handleSignInWithGoogle}>Google Sign In</button>
            </div>
            <form>
                <input type="email" placeholder='Enter Youre Email' />
                <br></br>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;