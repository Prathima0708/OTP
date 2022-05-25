import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import classes from "./AuthForm.module.css";

const AuthForm = ({ Login, error }) => {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);
  const [show,setShow]=useState(false)

  // const[state,setState]=useState({name:'',pwd:''})

  const [details, setDetails] = useState({ name: "", phone: "", password: "" });

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  //  const handleChange=(e)=>{
  //    const {name,value}=e.target
  //    setState({[name]:value})
  //  }

  const log = (e) => {
    setShow(true)
    e.preventDefault();
    Login(details);
   
    // router.push('/hello')
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      {error != "" ? <div>{error}</div> : ""}
      <form onSubmit={log}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input
            type="name"
            id="name"
            name="name"
            autoComplete="off"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="number">Mobile Number</label>
          <input
            type="number"
            id="number"
            name="phone"
            className="num"
            onChange={(e) => setDetails({ ...details, phone: e.target.value })}
            value={details.phone}
          />
        </div>
    {show &&   <div className={classes.control}>
          <label htmlFor="password">Enter your OTP</label>
       <input
            type="password"
            id="password"
            name="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>}
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
