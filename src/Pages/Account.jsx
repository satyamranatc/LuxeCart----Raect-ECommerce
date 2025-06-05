import React,{use, useState} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Account.css'; // Import the CSS file
import { data } from 'react-router-dom';

export default function Account() {
    let[ErrData,setErrData] = useState("")
   
    function handleSignUp(e) {


    e.preventDefault();
    let Data = {
        name: e.target[0].value.trim(),
        contact: e.target[1].value.trim(),
        email: e.target[2].value.trim(),
        password: e.target[3].value,
        cpassword: e.target[4].value
    };

    // Validation checks
    if (!Data.name || !Data.contact || !Data.email || !Data.password || !Data.cpassword) {
        setErrData("Please fill all the fields");
        return;
    }

    if (Data.password !== Data.cpassword) {
        setErrData("Password Mismatch");
        return;
    }

    if (Data.name.length <= 2) {
        setErrData("Please enter a valid name (at least 2 characters)");
        return;
    }

    if (!Data.email.includes("@") || !Data.email.includes(".")) {
        setErrData("Please enter a valid email");
        return;
    }

    // Password regex:
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

    if (!passwordRegex.test(Data.password)) {
        setErrData("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one special character");
        return;
    }

    // All validations passed
    console.log("Form Data:", Data);
}



  return (
    <Tabs>
      <TabList>
        <Tab><button>Sign Up</button></Tab>
        <Tab><button>Sign In</button></Tab>
      </TabList>

      <TabPanel>
        <form onSubmit={handleSignUp}>
          <input type="text" placeholder='Full Name:' />
          <input type="text" placeholder='Contact:' />
          <input type="email" placeholder='Email:' />
          <input type="password" placeholder='Password:' />
          <input type="password" placeholder='Confirm Password:' />
          <button type="submit">Sign Up</button>
          {ErrData && <p>{ErrData}</p>}
        </form>
      </TabPanel>

      <TabPanel>
        <form>
          <input type="email" placeholder='Email:' />
          <input type="password" placeholder='Password:' />
          <button type="submit">Sign In</button>
          {ErrData && <p>{ErrData}</p>}
        </form>
      </TabPanel>
    </Tabs>
  )
}