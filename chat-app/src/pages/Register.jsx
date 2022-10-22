import React from 'react' 


const Register = () =>{
    return(
    <div id='RegisterContainer' className='RegisterContainer'>
        <div id="RegisterWrap" className="RegisterWrap">
            <h2>Wavify</h2>
            <form>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='E-mail' />
                <input type="password" placeholder='Password'/>
                <input style={{display:"none"}} type="file" id='file' />
                <label htmlFor="file" typeof='file' id='file'> 
                <p>Set profile pic</p>
                </label>
               
                <button><p>Sign up</p></button>
                <p>Don't have an account?  login</p>
            </form>
        </div>
    </div>
    )
}

export default Register 