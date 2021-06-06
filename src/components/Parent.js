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

// const testObj = { hello: "world", foo: "bar", bestbfever: "tony" };
//
// const { hello } = testObj;
// const hello = testObj['hello']
// const hello = testObj.hello
// console.log(hello) // 'world'
//
// const testArr = ['world', 'bar', 'wywa']
//
// const [hello, foo, favDoggo] = testArr
// console.log(favDoggo) //wywa
//
// const hello = testArr[0]
// const foo = testArr[1]
// const favDoggo = testArr[2]
//
//
// function useState() {
//   const setString = (stringparam) => {
//     string = stringparam
//   }
//   return ['string', setString]
// }
