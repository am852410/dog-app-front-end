import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ENV from "../Env.js";

export default function CreateDogAccount(props) {
  const history = useHistory();

  function handleClick() {
    history.push("/profile");
  }
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [size, setSize] = useState("");
  const [additionalComments, setAdditionalComments] = useState("");

  const createDogAccount = () => {
    const body = {
      name,
      breed,
      age,
      weight,
      size,
      additionalComments
    };
    fetch(ENV.API + "/dogs", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(body)
    })
      .then(handleClick)
      .then(() => props.setDog(body));
  };

  return (
    <div>
      <h1>Create Dog Account</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Breed"
        value={breed}
        onChange={event => setBreed(event.target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={event => setAge(event.target.value)}
      />
      <input
        type="text"
        placeholder="Weight"
        value={weight}
        onChange={event => setWeight(event.target.value)}
      />
      <input
        type="text"
        placeholder="Size"
        value={size}
        onChange={event => setSize(event.target.value)}
      />
      <input
        type="text"
        placeholder="Additional Comments"
        value={additionalComments}
        onChange={event => setAdditionalComments(event.target.value)}
      />

      <button onClick={createDogAccount}>Create Dog Account</button>
    </div>
  );
}
