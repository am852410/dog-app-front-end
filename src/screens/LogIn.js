import React, { useState } from "react";
import { TextInput, Button, Icon } from "react-materialize";
import ENV from "../Env.js";

export default function LogIn() {
  const [cellPhone, setCellPhone] = useState("");
  const getAuthCode = () => {
    const body = {
      cellPhone
    };
    fetch(ENV.API + "/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        mode: "no-cors"
      },
      body: JSON.stringify(body)
    }).then(response => {
      response.json();
      console.log(response.json);
    });
  };
  return (
    <div>
      <TextInput type="tel" />
      <Button node="button" onClick={getAuthCode} waves="light">
        Submit
        <Icon right>send</Icon>
      </Button>
    </div>
  );
}
