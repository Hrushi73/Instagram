import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
const axios = require("axios");
axios.defaults.withCredentials = true;

const Login = () => {
  const History = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState({
    emailMessage: "",
    passwordMessage: "",
  });
  const [notFoundMessage, setnotFoundMessage] = useState("");

  //Email validation
  const isEmailValid = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  //Password strength
  const isPasswordSecure = (password) => {
    const re = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    return re.test(password);
  };

  //Is Empty field check
  const isRequired = (value) => (value === "" ? false : true);

  //Email check
  const checkEmail = (email) => {
    email = email.trim();
    if (!isRequired(email)) {
      setMessages((prevState) => ({
        ...prevState,
        emailMessage: "Email cannot be blank",
      }));
      return false;
    } else if (!isEmailValid(email)) {
      setMessages((prevState) => ({
        ...prevState,
        emailMessage: "Email is not valid.",
      }));
      return false;
    }
    return true;
  };

  //Pssword check
  const checkPassword = (password) => {
    password = password.trim();
    if (!isRequired(password)) {
      setMessages((prevState) => ({
        ...prevState,
        passwordMessage: "Password cannot be blank.",
      }));
      return false;
    } else if (!isPasswordSecure(password)) {
      setMessages((prevState) => ({
        ...prevState,
        passwordMessage:
          "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)",
      }));
      return false;
    }
    return true;
  };

  //Data submit
  const submitdata = async (event) => {
    try {
      event.preventDefault();
      setMessages(() => ({
        emailMessage: "",
        passwordMessage: "",
      }));

      if (checkEmail(email) && checkPassword(password)) {
        const res = await axios.post("http://localhost:3001/Login", {
          email: email,
          password: password,
        });

        if (res.status === 200) {
          setnotFoundMessage("");
          History.push("/home");
        }
      }
    } catch (err) {
      setnotFoundMessage("Either Email or password didn't match");
      console.log(err);
    }
  };

  return (
    <>
      <div className="background"></div>
      <div className="outerContainer atcenter">
        <div>
          <form>
            <h1 style={{ textAlign: "center" }}>FrenZone</h1>
            <small style={{ color: "red" }}>{notFoundMessage}</small>
            <input
              type="text"
              id="username"
              name="username"
              value={email}
              placeholder="Email address"
              autoCorrect="false"
              autoComplete="false"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <small>{messages.emailMessage}</small>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              autoCorrect="false"
              autoComplete="false"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <small>{messages.passwordMessage}</small>
            <button type="submit" className="submitbutton" onClick={submitdata}>
              Login
            </button>
          </form>
        </div>
        <div>
          <h4>
            Don't have account?{" "}
            <Link to="/signup">
              <a href="">Sign Up</a>
            </Link>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Login;
