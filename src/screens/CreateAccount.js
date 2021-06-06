import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ENV from "../Env.js";

export default function CreateAccount(props) {
  const history = useHistory();

  function handleClick() {
    history.push("/user");
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isUserCreated, setIsUserCreated] = useState(false);
  const createUser = () => {
    const body = {
      firstName: firstName,
      lastName,
      address,
      cellPhone,
      email
    };
    fetch(ENV.API + "/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(body)
    })
      .then(handleClick)
      .then(() => props.setUser(body));
  };

  return (
    <div>
      <h1>Create Account</h1>

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={event => setFirstName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={event => setLastName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={event => setAddress(event.target.value)}
      />
      <input
        type="text"
        placeholder="Cellphone Number"
        value={cellPhone}
        onChange={event => setCellPhone(event.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />

      <button onClick={createUser}>Create Account</button>
    </div>
  );
}
