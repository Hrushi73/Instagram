import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
const axios = require("axios");

const SignUp = () => {
  const History = useHistory();

  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    password: "",
    confPassword: "",
  });

  const [messages, setMessages] = useState({
    userNameMessage: "",
    emailMessage: "",
    passwordMessage: "",
    confPasswordMessage: "",
  });

  const isEmailValid = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const isPasswordSecure = (password) => {
    const re = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    return re.test(password);
  };

  const isRequired = (value) => (value === "" ? false : true);

  const isBetween = (length, min, max) =>
    length >= min && length <= max ? true : false;

  const checkUsername = (userName) => {
    const min = 3,
      max = 25;
    userName = userName.trim();

    if (!isRequired(userName)) {
      setMessages((prevState) => ({
        ...prevState,
        userNameMessage: "Username is required",
      }));
      return false;
    } else if (!isBetween(userName.length, min, max)) {
      setMessages((prevState) => ({
        ...prevState,
        userNameMessage: `Username must be between ${min} and ${max} characters.`,
      }));
      return false;
    }
    return true;
  };

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

  const checkConfirmPassword = (password, confPassword) => {
    confPassword = confPassword.trim();
    password = password.trim();

    if (!isRequired(confPassword)) {
      setMessages((prevState) => ({
        ...prevState,
        confPasswordMessage: "Please enter the password again",
      }));
      return false;
    } else if (password !== confPassword) {
      setMessages((prevState) => ({
        ...prevState,
        confPasswordMessage: "The password does not match",
      }));
      return false;
    }
    return true;
  };

  const submitData = async (event) => {
    let res;
    try {
      setMessages(() => ({
        userNameMessage: "",
        emailMessage: "",
        passwordMessage: "",
        confPasswordMessage: "",
      }));
      event.preventDefault();
      if (
        checkUsername(userInfo.userName) &&
        checkEmail(userInfo.email) &&
        checkPassword(userInfo.password) &&
        checkConfirmPassword(userInfo.password, userInfo.confPassword)
      ) {
        res = await axios.post("http://localhost:3001/signup", {
          userName: userInfo.userName,
          email: userInfo.email,
          password: userInfo.password,
        });
        if (res.status === 200) {
          History.push("/Login");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <>
      <div className="outerContainer atcenter">
        <div>
          <form method="post">
            <h1 style={{ textAlign: "center" }}>Instagram</h1>
            <div>
              <input
                type="text"
                id="userName"
                name="userName"
                value={userInfo.userName}
                placeholder="username"
                autoCorrect="false"
                autoComplete="off"
                onChange={handleChange}
              />
              <br />
              <small>{messages.userNameMessage}</small>
            </div>
            <br />
            <div>
              <input
                type="text"
                id="email"
                name="email"
                value={userInfo.email}
                placeholder="email address"
                autoCorrect="false"
                autoComplete="off"
                onChange={handleChange}
              />
              <br />
              <small>{messages.emailMessage}</small>
            </div>
            <br />
            <div>
              <input
                type="password"
                id="password"
                name="password"
                value={userInfo.password}
                placeholder="Password"
                autoCorrect="false"
                autoComplete="off"
                onChange={handleChange}
              />
              <br />
              <small>{messages.passwordMessage}</small>
            </div>
            <br />
            <div>
              <input
                type="password"
                id="confPassword"
                name="confPassword"
                value={userInfo.confPassword}
                placeholder="Confirm Password"
                autoCorrect="false"
                autoComplete="off"
                onChange={handleChange}
              />
              <br />
              <small>{messages.confPasswordMessage}</small>
            </div>
            <br />
            <button type="submit" className="submitbutton" onClick={submitData}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
