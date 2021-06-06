import React, { useState } from "react";

function Child(props) {
  const [age, setAge] = useState(props.age);

  return (
    <div>
      <h1>
        Hello, I am {props.name} and I am {age} years old
      </h1>
      <button onClick={() => setAge(age + 1)}>Its my birthday!</button>
    </div>
  );
}

export default Child;
