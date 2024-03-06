"use client";
import React, { useState } from "react";


export default function AddBtn() {
  const [name, setName] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [email, setEmail] = useState("");
  const [hobbies, setHobbies] = useState("");

  const handlesubmit = async () => {
    const jsonObject = {
      name: name,
      phone_number: phone_number,
      email: email,
      hobbies: hobbies,
    };

    const res = await fetch(`${process.env.DOMAIN}/api/users`, {
      method: "POST",
      body :JSON.stringify(jsonObject),
    });

    const jsonString = JSON.stringify(jsonObject);
    console.log(jsonString);
  };

  return (
    <form>
      <input
        type="string"
        placeholder="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="string"
        placeholder="phone number"
        value={phone_number}
        onChange={(e) => {
          setPhone_number(e.target.value);
        }}
      />
      <input
        type="string"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="string"
        placeholder="hobbies"
        value={hobbies}
        onChange={(e) => {
          setHobbies(e.target.value);
        }}
      />
      <button onClick={handlesubmit}> ADD USER</button>
    </form>
  );
}
