import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="text" placeholder='Enter Your Name' />
                <br></br>
                <input type="email" placeholder='Enter Youre Email' />
                <br></br>
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;