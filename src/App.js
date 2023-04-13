import React, {useState} from 'react'
import Axios from 'axios'
import './App.css'

function App(){
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");


  const onSubmit = () => {
    Axios.post("http://localhost:3001/create",{
      name: name, 
      email: email, 
      mobile: mobile,
      address: address
    }).then(() => console.log("Success"))
  }

   return (
     <form className='inner-container'>
      <h1 className='header'>Registration Form</h1>
      <label htmlFor='name' className="label">FullName</label>
      <input type="text" name="name" id="name" onChange={(event) => {setName(event.target.value)}}/>

      <label htmlFor='email' className="label">Email</label>
      <input type="text" name="email" id="email" onChange={(event) => {setEmail(event.target.value)}}/>

      <label htmlFor='mobile' className="label">Mobile Number</label>
      <input type="text" name="mobile" id="mobile" onChange={(event) => {setMobile(event.target.value)}}/>

      <label htmlFor='mobile' className="label">Address</label>
      <input type="text" name="address" id="address" onChange={(event) => {setAddress(event.target.value)}}/>

      <button type="button" id="save" className='btn' onClick={onSubmit}>SUBMIT</button>
    </form>
   )
 }
 
export default App

