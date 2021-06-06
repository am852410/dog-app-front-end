import React, { useState, useEffect } from "react";
import Child from "./Child.js";

function Parent() {
  const [user, setUser] = useState(null);
  const [dog, setDog] = useState(null);
  return (
    <div>
      <h1>Hello, I am the parent</h1>
      <Child name="CreateAccount" setUser={setUser} />
      <Child name="CreateDogAccount" setUser={setDog} />
      <Child name="ProfileScreen" user={user} dog={dog} />
    </div>
  );
}

export default Parent;
