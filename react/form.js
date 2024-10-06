import React, { useState } from "react";

export default function Form() {
  const state =
    useState[
      {
        name: "",
        email: "",
        username: "",
        phone: "",
        gender: "",
        age: 0,
        country: "",
        state: "",
        city: "",
        zipCode: "",
      }
    ];
  return (
    <div>
      <h1>Form</h1>
      <div>
        <p>Name: {state.name}</p>
        <p>Email: {state.email}</p>
        <p>Username: {state.username}</p>
        <p>Phone: {state.phone}</p>
        <p>Gender: {state.gender}</p>
        <p>Age: {state.age}</p>
        <p>Country: {state.country}</p>
        <p>State: {state.state}</p>
        <p>City: {state.city}</p>
        <p>Zip Code: {state.zipCode}</p>
      </div>
    </div>
  );
}
