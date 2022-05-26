import { useState } from "react";
import AuthForm from "../components/Auth/AuthForm";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import BasicTabs from "../components/layout/MainNavigation";
import MainNavigation from "../components/layout/MainNavigation";

export default function Home() {
  const adminUser = {
    // email:"admin@admin.com",
    password: "0000",
  };
  
  const [user, setUser] = useState({ name: "", phone: "" });
  const [error, setError] = useState("");
  const Login = (details) => {
    console.log(details);
    // if(details.email==adminUser.email && details.password==adminUser.password){
    if (details.password == adminUser.password) {
      console.log("logged in");
      setUser({
        name: details.name,
        phone: details.phone,
      });
    
    } else {
      console.log("details do not match");
      
      // setError("details do not match");
     
     
    }
  };
  const Logout = () => {
    console.log("logout");
    setUser({ name: "", phone: "" });
    setError("");
  };
  return (
    <>
      {user.phone != "" ? (
        <div>
          {/* <h2>
            Welcome,<span>{user.name}</span>
           
          </h2> */}

          
           
          <button onClick={Logout}>logout</button>
          <br /><br/>

          {/* <Link href="/user">Click here to view Dashboard</Link> */}

          {/* <BasicTabs /> */}
          <MainNavigation user={user}   />
        </div>
      ) : (
        
        
        
        <AuthForm Login={Login} error={error} />
      )}
      
    </>
  );
}
