import React from "react";

export default function ProfileScreen(props) {
  console.log(props.user);
  console.log(props.dog);
  if (!props.user || !props.dog) {
    return "oops";
  }
  return (
    <div>
      <h1>Welcome {props.user.firstName}</h1>
      <br />
      <h3>{props.user.firstName}</h3>
      <h3>{props.user.lastName}</h3>
      <h3>{props.user.address}</h3>
      <h3>{props.user.cellPhone}</h3>
      <h3>{props.user.email}</h3>
      <br />
      <h1>{props.user.firstName}'s Dogs</h1>
      <br />
      <h3>{props.dog.name}</h3>
      <h3>{props.dog.breed}</h3>
      <h3>{props.dog.age}</h3>
      <h3>{props.dog.weight}</h3>
      <h3>{props.dog.size}</h3>
      <h3>{props.dog.additionalComments}</h3>
    </div>
  );
}
