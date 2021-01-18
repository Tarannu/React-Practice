import React,{useState,useRef,useEffect} from 'react'

const SignUpForm = () => {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [input,setInput]=useState();
    const [error,setError]=useState({});
    
    const handleSubmit=(e)=>{
        e.preventDefault();

       //if(validate(e)){
        console.log('the first name is '+firstName+ ' email is '+email+' last name is '+lastName+' temporary password '+password);
       //}
        setFirstName('');
        setLastName('');
        setEmail('');


    }
    var validate=(e)=>{
        
    };
    

    return (

        <div className='component-singup-div'>
        <form className='component-signup-form' style={{textAlign:'center'}} >
        <p> First Name <input type='text' placeholder="Enter First Name..." name='first name' value={firstName} onChange={e=>{setFirstName(e.target.value)} } required></input></p>
        <p> Last Name <input type='text' placeholder="Enter Last Name..." name='last name' value={lastName} onChange={e=>setLastName(e.target.value)} required></input></p>
        <p> Email  <input type='email' placeholder='email ... ' name='email' value={email} onChange={e=>setEmail(e.target.value)} required></input></p>
        <p> Password <input type='text'  type='password' placeholder="Password" name='password' value={password} minlength="8" onChange={e=>{
            setPassword(e.target.value);
        }} required></input></p>
        <p> Confirm Password <input type='password' placeholder="Confirm Password" minlength="8" name='confirm password' value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} required></input></p>
        <p>Password must be eight in charecter length</p>
        <button type='submit' className='signup-button' onClick={handleSubmit}>Create</button>
        </form>   
        </div>
    )
}

export default SignUpForm;
